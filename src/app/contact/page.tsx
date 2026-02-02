"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+973 17 362 322", "+973 17 362 333"],
      color: "bg-brand-orange",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@crystal-bahrain.com", "sales@crystal-bahrain.com"],
      color: "bg-brand-blue",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Office 21, Building 118",
        "Road 333, Block 327",
        "Salmabad, Bahrain",
      ],
      color: "bg-brand-dark",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sunday - Thursday: 7:30 AM - 5:00 PM", "Friday - Saturday: Closed"],
      color: "bg-brand-gray",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent" />
        {/* Animated decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-orange/10 rounded-full animate-wave" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-orange/10 rounded-full animate-wave" style={{ animationDelay: '0.5s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-drop">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up stagger-1">
            Get in touch with our team for inquiries, quotes, or support
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-zoom-in stagger-${index + 1}`}
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="text-white group-hover:rotate-3 transition-transform" size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-brand-gray text-sm group-hover:text-brand-dark transition-colors">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg animate-slide-left group">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 group-hover:text-brand-orange transition-colors">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group/input">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brand-dark mb-1 group-hover/input:text-brand-orange transition-colors"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-brand-gray/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="group/input">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brand-dark mb-1 group-hover/input:text-brand-orange transition-colors"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-brand-gray/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group/input">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-brand-dark mb-1 group-hover/input:text-brand-orange transition-colors"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-brand-gray/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="group/input">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-brand-dark mb-1 group-hover/input:text-brand-orange transition-colors"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-brand-gray/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="group/input">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-brand-dark mb-1 group-hover/input:text-brand-orange transition-colors"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-brand-gray/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="product">Product Information</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="group/input">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-dark mb-1 group-hover/input:text-brand-orange transition-colors"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-brand-gray/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group/btn"
                >
                  <Send size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="animate-slide-right">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 group-hover:text-brand-orange transition-colors">
                Find Us
              </h2>
              <div className="bg-white rounded-xl p-2 shadow-lg h-full group/map">
                <div className="aspect-[4/3] bg-brand-gray/20 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8 group/map">
                    <MapPin
                      className="text-brand-orange mx-auto mb-4 group-hover/map:scale-125 transition-transform"
                      size={48}
                    />
                    <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover/map:text-brand-orange transition-colors">
                      Crystal Building Materials
                    </h3>
                    <p className="text-brand-gray mb-4 group-hover/map:text-brand-dark transition-colors">
                      Office 21, Building 118<br />
                      Road 333, Block 327<br />
                      Salmabad, Bahrain
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-orange font-medium hover:text-brand-orange/80 transition-colors group/link"
                    >
                      Open in Google Maps
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-drop">
            Need Immediate Assistance?
          </h2>
          <p className="text-brand-gray mb-8 max-w-2xl mx-auto animate-slide-up stagger-1">
            Our team is ready to help you with any urgent inquiries. Call us
            directly for quick support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up stagger-2">
            <a
              href="tel:+97317362322"
              className="flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all hover:scale-105 group"
            >
              <Phone size={20} className="group-hover:rotate-3 transition-transform" />
              Call Us Now
            </a>
            <a
              href="mailto:info@crystal-bahrain.com"
              className="flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-brand-light transition-all hover:scale-105 group"
            >
              <Mail size={20} className="group-hover:rotate-3 transition-transform" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
