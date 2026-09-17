import ScrollSequenceHero from "../components/ScrollSequenceHero";
import WhatsAppButton from "../components/WhatsAppButton";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-sans" id="top">
      {/* 
        ScrollSequenceHero handles the pinned canvas scroll effect, 
        Lenis scroll initialization, Header, HeroContent, and CategoryBar 
      */}
      <ScrollSequenceHero />

      {/* Clean White Section Below Hero */}
      <section id="about" className="w-full bg-white text-deep-navy py-32 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
            Make Every Drive Feel <br className="hidden md:block" />
            <span className="text-brand-red">Premium.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Premium interiors, styling, audio, lighting, car care and accessories, 
            tailored around your vehicle and your lifestyle.
          </p>
        </div>

        {/* Contact Section */}
        <div id="contact" className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-red">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-1">Phone</h3>
              <a href="tel:+919700314415" className="font-black text-lg hover:text-brand-red transition-colors">
                +91 97003 14415
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-red">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-1">Instagram</h3>
              <a href="https://instagram.com/ayyapacaraccessories" target="_blank" rel="noreferrer" className="font-black text-lg hover:text-brand-red transition-colors">
                @ayyapacaraccessories
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-red">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-1">Email</h3>
              <a href="mailto:ayyapacaraccessories@gmail.com" className="font-black text-lg hover:text-brand-red transition-colors">
                ayyapacaraccessories<br />@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-red">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-1">Address</h3>
              <a href="https://maps.app.goo.gl/dYoCD4xXcpAHbNxC6" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors block">
                <address className="not-italic font-bold text-sm text-gray-700 leading-relaxed">
                  1-8-32/66A, Minister Rd,<br />
                  Ramgopalpet, Secunderabad,<br />
                  Hyderabad, Telangana 500003
                </address>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
