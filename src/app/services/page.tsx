"use client";

import { ArrowRight, Star, Shield, Factory, Package } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Factory,
      title: "Steel Import & Distribution",
      description:
        "Import and distribution of high-quality steel products from world's leading suppliers.",
      features: [
        "Structural Steel",
        "M.S. Angles, Bars & Sections",
        "Hollow Sections",
        "Checkered Plates",
        "Expanded Metals",
        "G.I. Gratings",
      ],
    },
    {
      icon: Package,
      title: "Building Materials",
      description:
        "Complete range of building materials for construction projects.",
      features: [
        "Quality Building Supplies",
        "Foundation Materials",
        "Roofing Solutions",
        "Flooring Materials",
        "Insulation Products",
        "Construction Accessories",
      ],
    },
    {
      icon: Factory,
      title: "Aluminum Products",
      description:
        "Premium aluminum products for various industrial applications.",
      features: [
        "Aluminum Sheets",
        "Aluminum Extrusions",
        "Aluminum Profiles",
        "Aluminum Composite Panels",
        "Aluminum Finishes",
        "Custom Fabrication",
      ],
    },
    {
      icon: Shield,
      title: "Wood Industry",
      description:
        "Quality wood products for construction and industrial needs.",
      features: [
        "Structural Timber",
        "Plywood & MDF",
        "Wooden Panels",
        "Door Frames",
        "Furniture Grade Wood",
        "Wood Treatment",
      ],
    },
  ];

  const industries = [
    {
      title: "Construction",
      description:
        "Comprehensive steel and building material solutions for all types of construction projects.",
    },
    {
      title: "Infrastructure",
      description:
        "Materials for IWP (Infrastructure, Water & Power) and civil engineering projects.",
    },
    {
      title: "Oil & Gas",
      description:
        "Industrial-grade materials meeting the rigorous demands of the oil and gas sector.",
    },
    {
      title: "Manufacturing",
      description:
        "Raw materials and components for manufacturing and fabrication industries.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Quality Assurance",
      description: "All products meet international quality standards and certifications.",
    },
    {
      title: "Competitive Pricing",
      description: "Best prices in the market due to our strong supplier relationships.",
    },
    {
      title: "Reliable Supply",
      description: "Consistent inventory and timely delivery across the country.",
    },
    {
      title: "Expert Support",
      description: "Technical advice and support from our experienced team.",
    },
    {
      title: "Flexible Terms",
      description: "Flexible payment terms for approved corporate clients.",
    },
    {
      title: "Wide Network",
      description: "Strategic warehouse locations for efficient distribution.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent" />
        {/* Animated decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-orange/10 rounded-full animate-wave" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-orange/10 rounded-full animate-wave" style={{ animationDelay: '0.5s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-drop">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up stagger-1">
            Comprehensive steel import, distribution, and building materials
            solutions
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 animate-drop">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto animate-scale" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-brand-light rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-zoom-in stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-dark transition-colors duration-300 group-hover:scale-110">
                    <service.icon className="text-white group-hover:rotate-3 transition-transform" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-brand-gray mb-4 group-hover:text-brand-dark transition-colors">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-brand-dark group-hover:text-brand-dark transition-colors"
                        >
                          <Star className="text-brand-orange shrink-0 group-hover:scale-125 transition-transform" size={16} />
                          <span className="group-hover:translate-x-1 transition-transform">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-black transition-all hover:scale-105 animate-slide-up stagger-4 group"
            >
              View All Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 animate-drop">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto animate-scale" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`group bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer animate-pop-in stagger-${index + 1}`}
              >
                <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-dark transition-colors group-hover:scale-110">
                  <Star className="text-white group-hover:rotate-3 transition-transform" size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                  {industry.title}
                </h3>
                <p className="text-brand-gray group-hover:text-brand-dark transition-colors">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 animate-drop">
              Why Choose Crystal Trading
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto animate-scale" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 group animate-slide-up stagger-${index + 1}`}
              >
                <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center shrink-0 mt-1 group-hover:bg-brand-dark transition-colors group-hover:scale-110">
                  <Shield className="text-white group-hover:rotate-3 transition-transform" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray group-hover:text-brand-dark transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-drop">
            Ready to Get Started?
          </h2>
          <p className="text-brand-gray mb-8 max-w-2xl mx-auto animate-slide-up stagger-1">
            Contact us today for competitive quotes on your steel and building
            material requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all hover:scale-105 group"
            >
              Request a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-dark transition-all hover:scale-105"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
