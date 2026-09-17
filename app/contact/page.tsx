import React from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ayyappa Car Accessories",
  description: "Get in touch with Ayyappa Car Accessories in Secunderabad for premium car modifications and accessories.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-deep-navy uppercase tracking-tight mb-4 leading-none">
            LET&apos;S UPGRADE<br />
            <span className="text-brand-red">YOUR DRIVE.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col gap-12">
            <ContactItem 
              icon={<Phone size={28} />}
              title="CALL"
              value="+91 9700314415"
              link="tel:+919700314415"
            />
            <ContactItem 
              icon={<MessageCircle size={28} />}
              title="WHATSAPP"
              value="Chat with Ayyappa"
              link="https://wa.me/919700314415"
            />
            <ContactItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>}
              title="INSTAGRAM"
              value="@ayyapacaraccessories"
              link="https://instagram.com/ayyapacaraccessories"
            />
            <ContactItem 
              icon={<Mail size={28} />}
              title="EMAIL"
              value="ayyapacaraccessories@gmail.com"
              link="mailto:ayyapacaraccessories@gmail.com"
            />
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-red flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-2">LOCATION</h3>
                <a href="https://maps.app.goo.gl/dYoCD4xXcpAHbNxC6" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors block">
                  <address className="not-italic text-lg font-bold text-deep-navy leading-relaxed">
                    1-8-32/66A, Minister Rd,<br />
                    Ramgopalpet,<br />
                    Secunderabad,<br />
                    Hyderabad,<br />
                    Telangana 500003
                  </address>
                </a>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919700314415"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white px-8 py-5 font-black tracking-wider uppercase transition-colors rounded-xl w-full md:w-auto self-start"
            >
              GET A QUOTE
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-deep-navy uppercase mb-2">Send us a message</h2>
              <p className="text-gray-500 font-medium">Fill out the form below and our team will get back to you shortly.</p>
            </div>
            
            <form action="https://formspree.io/f/xzezbrkw" method="POST" className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Name</label>
                  <input type="text" id="name" name="name" required className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Phone</label>
                  <input type="tel" id="phone" name="phone" required className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all" placeholder="+91 90000 00000" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Email Address</label>
                <input type="email" id="email" name="email" required className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Interested In</label>
                <select id="service" name="service" className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all appearance-none font-medium text-deep-navy">
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Ceramic Coating">Ceramic Coating & PPF</option>
                  <option value="Audio System">Audio System Upgrade</option>
                  <option value="Seat Covers">Seat Covers & Interiors</option>
                  <option value="Lighting">Lighting Upgrades</option>
                  <option value="Other">Other Accessories</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Message</label>
                <textarea id="message" name="message" rows={4} required className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="mt-2 bg-deep-navy hover:bg-gray-800 text-white px-8 py-4 font-black tracking-wider uppercase transition-colors rounded-xl w-full flex items-center justify-center gap-2">
                SEND MESSAGE
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Map moved below the grid */}
        <div className="mt-16 h-[400px] w-full bg-gray-100 rounded-3xl overflow-hidden relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9455325852923!2d78.48169991487668!3d17.4308560880526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a24446a8d67%3A0xc02cf9ab984a9f93!2sMinister%20Rd%2C%20Ramgopalpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

      </div>
    </main>
  );
}

function ContactItem({ icon, title, value, link }: { icon: React.ReactNode, title: string, value: string, link: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-1">{title}</h3>
        <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="text-xl font-black text-deep-navy hover:text-brand-red transition-colors">
          {value}
        </a>
      </div>
    </div>
  );
}
