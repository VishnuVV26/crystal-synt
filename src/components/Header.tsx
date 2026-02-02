"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, User } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Our Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-brand-dark text-white py-2 px-4 hidden md:block animate-drop">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+973-17784818"
              className="flex items-center gap-2 hover:text-brand-orange transition-colors"
            >
              <Phone size={16} />
              <span>+973-17784818</span>
            </a>
            <a
              href="mailto:trading@crystalbahrain.com"
              className="flex items-center gap-2 hover:text-brand-orange transition-colors"
            >
              <Mail size={16} />
              <span>trading@crystalbahrain.com</span>
            </a>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-2 hover:text-brand-orange transition-colors"
          >
            <User size={16} />
            <span>Login</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`py-4 px-4 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold animate-scale cursor-pointer">
              <span className={`text-brand-orange ${isScrolled ? "text-brand-dark" : "text-white"}`}>CRYSTAL</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium hover:text-brand-orange transition-colors relative group animate-slide-down stagger-${index + 1} ${
                  isScrolled ? "text-brand-dark" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={isScrolled ? "text-brand-dark" : "text-white"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-brand-dark" : "text-white"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-dark font-medium hover:text-brand-orange transition-colors animate-slide-up stagger-${index + 1}"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t">
            <a
              href="tel:+973-17784818"
              className="flex items-center gap-2 text-brand-dark"
            >
              <Phone size={16} />
              <span>+973-17784818</span>
            </a>
            <a
              href="mailto:trading@crystalbahrain.com"
              className="flex items-center gap-2 text-brand-dark"
            >
              <Mail size={16} />
              <span>trading@crystalbahrain.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
