import React from 'react';
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Ready to Transform <br />
            Your <span className="text-[#EEFF00]">Padel Court?</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
            Join the future of professional Padel scoring. Get a custom quote for your facility today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group inline-flex items-center gap-3 bg-[#EEFF00] text-black px-12 py-6 hover:bg-[#EEFF00]/90 transition-all text-lg w-full sm:w-auto">
              Order System
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-12 py-6 hover:bg-white hover:text-black transition-all text-lg w-full sm:w-auto">
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {/* Email Card */}
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 hover:border-[#EEFF00] transition-colors group">
            <Mail className="w-8 h-8 text-[#EEFF00] mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-400 mb-4">Get in touch with our sales team</p>
            <a href="mailto:sales@summa.com" className="text-[#EEFF00] hover:underline">
              sales@summa.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 hover:border-[#EEFF00] transition-colors group">
            <Phone className="w-8 h-8 text-[#EEFF00] mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-400 mb-4">Speak with a specialist</p>
            <a href="tel:+1234567890" className="text-[#EEFF00] hover:underline">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1A1A1A] pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#EEFF00] flex items-center justify-center">
                <span className="text-black font-bold text-xl">U</span>
              </div>
              <div>
                <div className="text-white tracking-[0.2em] text-sm">ULTIMA</div>
                <div className="text-gray-500 text-xs">by SUMMA</div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2026 SUMMA. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
