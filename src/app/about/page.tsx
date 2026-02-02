"use client";

import { Award, Users, Globe, Shield, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import OwnerImage from "@/assets/images/profile_owner.jpg";

export default function AboutPage() {
  const features = [
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "We ensure all products meet international quality standards.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced team provides exceptional service and expertise.",
    },
    {
      icon: Globe,
      title: "Global Partnerships",
      description:
        "Strong partnerships with world-leading suppliers and processors.",
    },
    {
      icon: Shield,
      title: "Reliable Supply",
      description:
        "Consistent and secure supply of materials across the country.",
    },
  ];

  const stats = [
    { value: "2010", label: "Year Established" },
    { value: "500+", label: "Products" },
    { value: "50+", label: "Global Partners" },
    { value: "1000+", label: "Happy Clients" },
  ];

  const products = [
    "K-Prix Cheil Grinding Wheel",
    "DIGITAL Spray Gun",
    "MAKITA – Power Tools",
    "Carpoint Compressor",
    "PATTA Fasteners And Fixings",
    "NATIONAL RED OXIDE PRIMER",
    "Black and Decker Chop Saw",
    "WACKER® GP Silicone Sealant",
  ];

  const latestNews = [
    {
      date: "2024",
      title: "News Heading 3",
      description: "Latest updates from Crystal Group",
    },
    {
      date: "2024",
      title: "News Heading 2",
      description: "Company achievements and milestones",
    },
    {
      date: "2024",
      title: "News",
      description: "Recent developments and partnerships",
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
            About Crystal International Trading W.L.L
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up stagger-1">
            Bahrain's Leading Steel Import, Stockiest, Trade & Distribution
            Company Since 2010
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-6 animate-slide-down">
              About Crystal International Trading W.L.L
            </h2>
            <div className="w-24 h-1 bg-brand-orange mb-6 animate-scale" />
            
            <div className="space-y-6 text-brand-gray">
              <p className="animate-slide-up stagger-1">
                Crystal International Trading W.L.L Established in 2010, is a Bahrain leading 
                steel import, stockiest, trade and distribution company, with the experience, 
                expertise and network to provide exceptional service and unsurpassed value to 
                our clients throughout the country.
              </p>
              <p className="animate-slide-up stagger-2">
                Over the past years, we have built solid partnerships with the world's premier 
                suppliers and processors in the steel, Aluminum, Building materials & Wood industry, 
                allowing us to offer a wide-range of competitively-priced products to serve the 
                country construction, IWP (Infrastructure, Water & Power), Oil & Gas industries.
              </p>
              <p className="animate-slide-up stagger-3">
                Due to our strategic warehouse and outlet locations, sturdy operations and structured, 
                trade finance capabilities, you gain the competitive edge of having a consistent and 
                secure supply of a variety of grades and sizes of structural steel at your disposal, 
                for the duration of any project. Our highly-trained and dedicated team ensures quick 
                response to enquiries and rapid delivery of small or large quantities, to the exact 
                specifications that you require.
              </p>
            </div>
          </div>

          {/* Director Profile with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="order-2 lg:order-1 animate-slide-left">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Director Profile
              </h2>
              <div className="w-24 h-1 bg-brand-orange mb-6" />
              
              <div className="space-y-4 text-brand-gray">
                <p>
                  Crystal Group was started by Mr. Abdul Rashid Ali Nawaz, who has a wide 
                  experience in the Bahrain market for over 25 years. He implemented the 
                  knowledge he gained in this industry for the growth and development of 
                  Crystal Group. His hardwork has brought the company to a noticeable position.
                </p>
                <p>
                  With quality product he leads his team and always maintains on time delivery 
                  of services and goods. Crystal Group has become one of the most trustable 
                  organizations in the country. With his dedication and ambition to succeed, 
                  Crystal Group recorded remarkable growth.
                </p>
                <p>
                  Well equipped with a team of experienced and talented employees, our company 
                  has been facing rapid growth and development. Over the years, Crystal Group 
                  has strived to reach out to clients all over Bahrain.
                </p>
                <p>
                  We at Crystal Group believe in Quality, Promptness of Service and the Best 
                  of Customer Relationship. Timely and steady supplies of best quality materials 
                  as per required specifications of customers with all precautions and care taken 
                  before dispatch are the hall marks of our operations. To supply proper material 
                  at the proper place in time to the satisfaction of our customer is our motto.
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-brand-orange/10 rounded-xl border-l-4 border-brand-orange animate-slide-up stagger-4">
                <p className="text-brand-dark font-semibold text-lg">
                  YOU NAME IT, WE HAVE IT.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-right">
              <div className="relative aspect-[4/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={OwnerImage}
                  alt="Mr. Abdul Rashid Ali Nawaz - Director"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-brand-dark/80">
                  <h3 className="text-white font-bold text-xl">
                    Mr. Abdul Rashid Ali Nawaz
                  </h3>
                  <p className="text-brand-orange">Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galvanizing & Powder Coating Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 animate-drop">
              Crystal International Galvanizing & Powder Coating Factory
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto animate-scale" />
            <p className="text-brand-gray mt-4 max-w-3xl mx-auto animate-slide-up stagger-1">
              Established in 2003, Crystal Factory is a Bahrain leading galvanizing and 
              powder coating company.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Galvanizing */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-left group">
              <div className="w-14 h-14 bg-brand-orange rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-dark transition-colors">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">
                Galvanizing
              </h3>
              <div className="space-y-3 text-brand-gray">
                <p>
                  Applying the appropriate protective coating reduces or eliminates maintenance 
                  and defers the replacement date of the structure. Galvanizing is an economic 
                  means of coating steel against corrosion.
                </p>
                <p>
                  It combines low initial cost, low mechanical damage to the structure, and most 
                  of all long term resistance to corrosion.
                </p>
              </div>
            </div>

            {/* Powder Coating */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-right group">
              <div className="w-14 h-14 bg-brand-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-dark transition-colors">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">
                Powder Coating
              </h3>
              <div className="space-y-3 text-brand-gray">
                <p>
                  Powder coating is a process which has a wide range of advantages like:
                </p>
                <ul className="space-y-2 mt-2">
                  {[
                    "Ready for use directly",
                    "Wide range of finishes are available",
                    "High utilization",
                    "Aesthetic appeal",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-orange rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-2">
                  This is a process of the suitable color of powder forced out of the jet with 
                  force to apply on the surface of the aluminum through electrostatic guns 
                  especially made for this purpose and then baked in the oven at the required 
                  temperatures. The coated material on cooling acquires the required finish.
                </p>
              </div>
            </div>
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
                className={`bg-brand-light rounded-lg p-4 text-center hover:bg-brand-orange transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-xl animate-pop-in`}
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
              >
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white transition-colors">
                  <Award className="text-white group-hover:text-brand-orange transition-colors" size={18} />
                </div>
                <h4 className="font-medium text-brand-dark text-sm group-hover:text-white transition-colors">
                  {product}
                </h4>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <div
                key={news.title}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-slide-up stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 rounded-lg p-3 text-center min-w-[70px]">
                    <div className="text-sm font-semibold text-brand-orange">
                      {news.date}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-brand-dark hover:text-brand-orange transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-brand-gray text-sm mt-2">
                      {news.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-drop">
            Learn More About Our Products
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up stagger-1">
            Explore our wide range of steel, aluminum, and building materials.
          </p>
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-black transition-all hover:scale-105 animate-slide-up stagger-2 group"
          >
            View Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
