"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Header from "./Header";
import HeroContent from "./HeroContent";
import CategoryBar from "./CategoryBar";
import LoadingScreen from "./LoadingScreen";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 300;

export default function ScrollSequenceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;
    
    // Priority load first 150 frames
    const PRIORITY_COUNT = 150;

    const loadFrame = (index: number) => {
      return new Promise<HTMLImageElement>((resolve) => {
        const img = new Image();
        const numStr = (index + 1).toString().padStart(4, "0");
        img.src = `/frames/frame_${numStr}.jpg`;
        img.onload = () => {
          loadedImages[index] = img;
          count++;
          setLoadedCount(count);
          if (count === PRIORITY_COUNT) {
            setIsLoaded(true);
          }
          resolve(img);
        };
        img.onerror = () => {
          // Fallback if image not found, resolve anyway to not block
          loadedImages[index] = img;
          count++;
          resolve(img);
        };
      });
    };

    const initLoad = async () => {
      // Load priority frames
      const priorityPromises = [];
      for (let i = 0; i < PRIORITY_COUNT; i++) {
        priorityPromises.push(loadFrame(i));
      }
      
      await Promise.all(priorityPromises);
      
      // Load remaining frames in background
      for (let i = PRIORITY_COUNT; i < FRAME_COUNT; i++) {
        loadFrame(i);
      }
      
      setImages(loadedImages);
    };

    initLoad();
  }, []);

  // 2. Setup Lenis & GSAP ScrollTrigger
  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current || !containerRef.current) return;

    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Canvas drawing function
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = (frameIndex: number) => {
      const img = images[frameIndex];
      if (!img || img.width === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      // Handle responsive resize correctly
      const { clientWidth, clientHeight } = document.documentElement;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      
      // Scale canvas CSS
      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;
      
      ctx.scale(dpr, dpr);

      // Object-fit: cover calculation
      const hRatio = clientWidth / img.width;
      const vRatio = clientHeight / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (clientWidth - img.width * ratio) / 2;
      const centerShift_y = (clientHeight - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, clientWidth, clientHeight);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    };

    // Draw initial frame
    drawFrame(0);

    let currentFrame = 0;

    // Create ScrollTrigger pinning
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=5000",
      pin: true,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        const frame = Math.floor(self.progress * (FRAME_COUNT - 1));
        
        if (frame !== currentFrame) {
          currentFrame = frame;
          requestAnimationFrame(() => drawFrame(frame));
        }
      },
    });

    // Handle window resize to redraw current frame
    const handleResize = () => {
      requestAnimationFrame(() => drawFrame(currentFrame));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      trigger.kill();
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, images]);

  return (
    <>
      {!isLoaded && <LoadingScreen count={loadedCount} total={150} />}
      
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white">
        {/* The pinned canvas */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* UI Layer */}
        <div className="relative z-10 w-full h-full flex flex-col pointer-events-none">
          {/* Header - Opacity linked to scroll */}
          <div 
            className="pointer-events-auto"
            style={{ opacity: Math.max(0, 1 - scrollProgress * 5) }}
          >
            <Header />
          </div>

          {/* Main Hero Content */}
          <div className="flex-1 flex items-center relative">
            <HeroContent scrollProgress={scrollProgress} />
          </div>

          {/* Bottom Category Bar */}
          <div 
            className="w-full absolute bottom-0 pointer-events-auto transition-transform duration-300"
            style={{ 
              transform: `translateY(${scrollProgress > 0.05 ? '100%' : '0'})`,
              opacity: Math.max(0, 1 - scrollProgress * 15)
            }}
          >
            <CategoryBar />
          </div>
        </div>
      </div>
    </>
  );
}
