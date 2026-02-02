"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, Star, Award, Truck, Shield } from "lucide-react";
import AboutImage from "@/assets/images/About.jpg";
import HomepageImage1 from "@/assets/images/HomepageImage1.jpg";
import HomepageImage5 from "@/assets/images/HomepageImage5.jpg";
import HomepageImage2 from "@/assets/images/HomepageImage2.jpg";
import LogoImage from "@/assets/images/Logo.jpg";

export default function Home() {
  const services = [
    {
      title: "Sale of Steel",
      description:
        "Wide range of structural steel products including MS Equal Angles, Flat Bars, Round Bars, Hollow Sections, and more.",
      icon: Shield,
    },
    {
      title: "Building Materials",
      description:
        "Complete range of building materials to serve construction, infrastructure, and industrial projects.",
      icon: Truck,
    },
    {
      title: "Aluminum",
      description:
        "Premium aluminum products from world-class suppliers for various industrial applications.",
      icon: Award,
    },
    {
      title: "Wood Industry",
      description:
        "Quality wood products for construction and industrial needs.",
      icon: Star,
    },
  ];

  const products = [
    "Round Pipe",
    "K-Prix Cheil Grinding Wheel",
    "MAKITA – Power Tools",
    "Carpoint Compressor",
    "PATTA Fasteners And Fixings",
    "NATIONAL RED OXIDE PRIMER",
    "Black and Decker Chop Saw",
    "WACKER® GP Silicone Sealant",
    "STANLEY INVERTER MMA WELDING",
    "M.S. Equal Angles",
    "M.S. Flat Bars",
    "M.S. Round Bars",
    "M.S. Hollow Sections (SHS, RHS)",
    "M.S. Checkered Plates",
    "Expanded Metals",
    "G.I. Gratings",
  ];

  const latestNews = [
    {
      date: "June 28, 2018",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has…",
    },
    {
      date: "June 28, 2018",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has…",
    },
  ];

  const brands = [
    "MAKITA",
    "Black & Decker",
    "WACKER",
    "STANLEY",
    "K-Prix",
    "CARPOINT",
    "NATIONAL",
    "PATTA",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={HomepageImage5}
            alt="Crystal International Trading"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/80 to-brand-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6 animate-drop">
            <Image
              src={LogoImage}
              alt="Crystal Logo"
              width={120}
              height={120}
              className="mx-auto rounded-full border-4 border-brand-orange"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up stagger-1">
            <span className="text-brand-orange">CRYSTAL</span> INTERNATIONAL
            TRADING
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up stagger-2">
            Bahrain's Leading Steel Import, Stockiest, Trade & Distribution
            Company
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all hover:scale-105"
            >
              View Our Products
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-dark transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-custom">
          <div className="w-6 h-10 border-2 border-brand-orange rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-orange rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2010", label: "Established" },
              { value: "500+", label: "Products" },
              { value: "1000+", label: "Clients" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center animate-scale`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 animate-drop">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto animate-scale" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-zoom-in stagger-${index + 1}`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-orange/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon with animation */}
                <div className="relative w-14 h-14 bg-brand-orange rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-dark transition-colors duration-300">
                  <service.icon className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-gray group-hover:text-brand-dark transition-colors">
                  {service.description}
                </p>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl origin-left" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-black transition-all hover:scale-105 animate-slide-up stagger-4 group"
            >
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                About Crystal Trading W.L.L
              </h2>
              <p className="text-brand-gray mb-4">
                Crystal Trading W.L.L Established in 2010, is a Bahrain leading
                steel import, stockiest, trade and distribution company, with
                the experience, expertise and network to provide exceptional
                service and unsurpassed value to our clients throughout the
                country.
              </p>
              <p className="text-brand-gray mb-4">
                Over the past years, we have built solid partnerships with the
                world's premier suppliers and processors in the steel,
                Aluminum, Building materials & Wood industry, allowing us to
                offer a wide-range of competitively-priced products to serve the
                country construction, IWP (Infrastructure, Water & Power), Oil &
                Gas industries.
              </p>
              <p className="text-brand-gray mb-6">
                Due to our strategic warehouse and outlet locations, sturdy
                operations and structured, trade finance capabilities, you gain
                the competitive edge of having a consistent and secure supply of
                a variety of grades and sizes of structural steel at your
                doorstep.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-orange/80 transition-colors group"
              >
                Read More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative animate-slide-right">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={AboutImage}
                  alt="About Crystal Trading"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-8 right-8 bg-white rounded-xl p-4 shadow-lg animate-bounce-custom">
                <div className="text-3xl font-bold text-brand-orange">2010</div>
                <div className="text-sm text-brand-dark font-semibold">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Operations Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-drop">
              Our Operations
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto animate-scale" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: HomepageImage1, title: "Steel Warehouse" },
              { src: HomepageImage2, title: "Distribution" },
              { src: AboutImage, title: "Our Team" },
            ].map((image, index) => (
              <div
                key={image.title}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group animate-slide-up stagger-${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-125"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                {/* Animated content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-semibold text-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {image.title}
                    </h3>
                    <div className="w-12 h-12 border-2 border-brand-orange rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 scale-0 group-hover:scale-100">
                      <ArrowRight className="text-brand-orange" size={20} />
                    </div>
                  </div>
                </div>
                
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-brand-dark/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 animate-drop">
              Latest News
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto animate-scale" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-slide-up stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  {/* Date badge */}
                  <div className="bg-brand-orange/10 rounded-lg p-3 text-center min-w-[80px] group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <div className="text-sm font-semibold text-brand-orange group-hover:text-white">
                      {news.date.split(' ')[0]}
                    </div>
                    <div className="text-2xl font-bold text-brand-dark group-hover:text-white">
                      {news.date.split(' ')[1].replace(',', '')}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-orange transition-colors">
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
                
                {/* Animated border at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange rounded-b-xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                {/* Animated border at left */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-brand-orange rounded-l-xl transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-75" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 animate-drop">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto animate-scale" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={product}
                className={`group relative bg-brand-light rounded-lg p-4 text-center hover:bg-brand-orange transition-all duration-500 cursor-pointer hover:scale-110 hover:shadow-xl animate-pop-in`}
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
              >
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white transition-colors duration-300">
                  <Star className="text-white group-hover:text-brand-orange transition-colors" size={20} />
                </div>
                <h4 className="font-medium text-brand-dark group-hover:text-white transition-colors">
                  {product}
                </h4>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-black transition-all hover:scale-105 animate-slide-up stagger-4 group"
            >
              View All Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-drop">
              Our Brands
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto animate-scale" />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className={`bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 text-white font-bold text-xl hover:bg-brand-orange hover:scale-125 transition-all duration-300 cursor-pointer animate-fade`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-drop">
            Ready to Work With Us?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up stagger-1">
            Contact us today for competitive pricing on steel, aluminum, and
            building materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-2">
            <a
              href="tel:+973-17784818"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-black transition-all hover:scale-105"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="mailto:trading@crystalbahrain.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-dark text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark hover:text-white transition-all hover:scale-105"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
