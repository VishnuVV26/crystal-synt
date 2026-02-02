"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Our Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  const services = [
    { href: "/services", label: "Sale of Steel" },
    { href: "/services", label: "Building Materials" },
    { href: "/services", label: "Aluminum" },
    { href: "/services", label: "Wood Industry" },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-orange">CRYSTAL</span>
              <span className="text-white">BAHRAIN</span>
            </h3>
            <p className="text-brand-gray mb-4">
              Crystal Trading W.L.L Established in 2010, is a Bahrain leading
              steel import, stockiest, trade and distribution company.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up stagger-1">
            <h4 className="text-lg font-bold mb-4 text-brand-orange">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-up stagger-2">
            <h4 className="text-lg font-bold mb-4 text-brand-orange">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-brand-gray hover:text-brand-orange transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up stagger-3">
            <h4 className="text-lg font-bold mb-4 text-brand-orange">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
                <span className="text-brand-gray">
                  Office 400, Road 411, Block 704 Salmabad
                  <br />
                  Kingdom Of Bahrain.
                  <br />
                  Office 3070-a, Road 1448, Block 1014, Al-hamalah
                  <br />
                  Kingdom Of Bahrain
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={18} />
                <a
                  href="tel:+973-17784818"
                  className="text-brand-gray hover:text-brand-orange transition-colors"
                >
                  +973-17784818
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={18} />
                <a
                  href="mailto:trading@crystalbahrain.com"
                  className="text-brand-gray hover:text-brand-orange transition-colors"
                >
                  trading@crystalbahrain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray text-sm">
            Copyright © {currentYear} Crystal International Trading. W.L.L. All
            Rights Reserved...
          </p>
          <p className="text-brand-gray text-sm">Designed with ❤️ in Bahrain</p>
        </div>
      </div>
    </footer>
  );
}
