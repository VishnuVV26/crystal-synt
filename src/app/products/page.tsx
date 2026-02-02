"use client";

import { useState } from "react";
import { Search, Star, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Image from "next/image";

// Import product images
import ProductImage1 from "@/assets/images/products/imgi_2_thumb-1.jpg";
import ProductImage2 from "@/assets/images/products/imgi_3_Italco.jpg";
import ProductImage3 from "@/assets/images/products/imgi_4_thumb.jpg";
import ProductImage4 from "@/assets/images/products/imgi_5_221.jpg";
import ProductImage5 from "@/assets/images/products/imgi_6_Untitled-1-3.jpg";
import ProductImage6 from "@/assets/images/products/imgi_7_National-Paint.jpg";
import ProductImage7 from "@/assets/images/products/imgi_8_Untitled-1-2.jpg";
import ProductImage8 from "@/assets/images/products/imgi_9_Untitled-1-1.jpg";
import ProductImage9 from "@/assets/images/products/imgi_10_Untitled-1.jpg";
import ProductImage10 from "@/assets/images/products/imgi_11_ALPS-C3010-2K-QQ-CLEAR.jpg";
import ProductImage11 from "@/assets/images/products/imgi_12_equal_angles.jpg";
import ProductImage12 from "@/assets/images/products/imgi_13_flat_bars.jpg";
import ProductImage13 from "@/assets/images/products/imgi_14_round_bars.jpg";
import ProductImage14 from "@/assets/images/products/imgi_15_shafting.jpg";
import ProductImage15 from "@/assets/images/products/imgi_16_ms_squir.jpg";
import ProductImage16 from "@/assets/images/products/imgi_17_ms_hollow.jpg";
import ProductImage17 from "@/assets/images/products/imgi_18_msplate.jpg";
import ProductImage18 from "@/assets/images/products/imgi_19_extended.jpg";
import ProductImage19 from "@/assets/images/products/imgi_20_gi-grating.jpg";
import ProductImage20 from "@/assets/images/products/imgi_23_MMFC0528.jpg";
import ProductImage21 from "@/assets/images/products/imgi_25_crystal.png";
import ProductImage22 from "@/assets/images/products/imgi_26_angle_right.png";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "steel", label: "Steel Products" },
    { id: "tools", label: "Power Tools" },
    { id: "chemicals", label: "Chemicals & Sealants" },
    { id: "fasteners", label: "Fasteners & Fixings" },
    { id: "paints", label: "Paints & Coatings" },
  ];

  const products = [
    {
      id: "round-pipe",
      name: "Round Pipe",
      category: "steel",
      image: ProductImage1,
      description:
        "High-quality round pipes suitable for various structural and industrial applications.",
      specs: ["Various diameters available", "Different thickness options", "Custom lengths"],
    },
    {
      id: "italco-products",
      name: "Italco Products",
      category: "tools",
      image: ProductImage2,
      description:
        "Professional grade Italian tools for construction and industrial use.",
      specs: ["High quality materials", "Ergonomic design", "Durable construction"],
    },
    {
      id: "industrial-tools",
      name: "Industrial Tools",
      category: "tools",
      image: ProductImage3,
      description:
        "Wide range of industrial tools for various applications.",
      specs: ["Precision engineered", "Long lasting", "Professional grade"],
    },
    {
      id: "221-products",
      name: "221 Series Products",
      category: "tools",
      image: ProductImage4,
      description:
        "Specialized tools from our 221 series collection.",
      specs: ["Advanced technology", "High performance", "Reliable"],
    },
    {
      id: "untitled-tools",
      name: "Professional Tools",
      category: "tools",
      image: ProductImage5,
      description:
        "Professional grade tools for demanding applications.",
      specs: ["Industrial strength", "Precision control", "Safety features"],
    },
    {
      id: "national-paint",
      name: "NATIONAL Paint Products",
      category: "paints",
      image: ProductImage6,
      description:
        "Quality paints and coatings for various surfaces.",
      specs: ["Weather resistant", "Easy application", "Long lasting finish"],
    },
    {
      id: "coating-products",
      name: "Coating Solutions",
      category: "paints",
      image: ProductImage7,
      description:
        "Advanced coating solutions for industrial applications.",
      specs: ["Protective coating", "Corrosion resistant", "Various finishes"],
    },
    {
      id: "industrial-paints",
      name: "Industrial Paints",
      category: "paints",
      image: ProductImage8,
      description:
        "High-performance industrial paint products.",
      specs: ["High durability", "Chemical resistant", "Fast drying"],
    },
    {
      id: "specialty-paints",
      name: "Specialty Paints",
      category: "paints",
      image: ProductImage9,
      description:
        "Specialized paint products for unique applications.",
      specs: ["Custom colors", "Various sheens", "Professional grade"],
    },
    {
      id: "alps-clear",
      name: "ALPS Clear Coat",
      category: "chemicals",
      image: ProductImage10,
      description:
        "Premium clear coat for professional finishing.",
      specs: ["High gloss finish", "UV resistant", "Easy application"],
    },
    {
      id: "equal-angles",
      name: "M.S. Equal Angles",
      category: "steel",
      image: ProductImage11,
      description:
        "Mild steel equal angles for structural applications.",
      specs: ["Various sizes", "International standards", "Consistent quality"],
    },
    {
      id: "flat-bars",
      name: "M.S. Flat Bars",
      category: "steel",
      image: ProductImage12,
      description:
        "Mild steel flat bars in various dimensions.",
      specs: ["Different widths", "Various thicknesses", "Custom lengths"],
    },
    {
      id: "round-bars",
      name: "M.S. Round Bars",
      category: "steel",
      image: ProductImage13,
      description:
        "Mild steel round bars for multiple applications.",
      specs: ["Various diameters", "Precision ground", "Good machinability"],
    },
    {
      id: "shafting",
      name: "Shafting Bars",
      category: "steel",
      image: ProductImage14,
      description:
        "High-quality shafting bars for industrial use.",
      specs: ["Precision machined", "High strength", "Various sizes"],
    },
    {
      id: "ms-squir",
      name: "M.S. Square Bars",
      category: "steel",
      image: ProductImage15,
      description:
        "Mild steel square bars for structural and industrial use.",
      specs: ["Square cross-section", "Various dimensions", "Uniform quality"],
    },
    {
      id: "ms-hollow",
      name: "M.S. Hollow Sections (SHS, RHS)",
      category: "steel",
      image: ProductImage16,
      description:
        "Mild steel hollow sections for structural use.",
      specs: ["Square & Rectangular", "Various wall thicknesses", "Galvanized options"],
    },
    {
      id: "ms-plate",
      name: "M.S. Checkered Plates",
      category: "steel",
      image: ProductImage17,
      description:
        "Mild steel checkered plates for anti-slip surfaces.",
      specs: ["Diamond pattern", "Different thicknesses", "Easy to clean"],
    },
    {
      id: "extended-metals",
      name: "Expanded Metals",
      category: "steel",
      image: ProductImage18,
      description:
        "Expanded metal sheets for various applications.",
      specs: ["Various patterns", "Different gauges", "Versatile use"],
    },
    {
      id: "gi-grating",
      name: "G.I. Gratings",
      category: "steel",
      image: ProductImage19,
      description:
        "Galvanized iron gratings for flooring and walkways.",
      specs: ["Hot dipped galvanized", "High load capacity", "Slip resistant"],
    },
    {
      id: "mmfc-products",
      name: "MMFC Products",
      category: "tools",
      image: ProductImage20,
      description:
        "Professional grade MMFC tools and equipment.",
      specs: ["Advanced features", "High performance", "Reliable"],
    },
    {
      id: "crystal-products",
      name: "Crystal Brand Products",
      category: "fasteners",
      image: ProductImage21,
      description:
        "Our premium Crystal brand of fasteners and fixings.",
      specs: ["High quality", "Various sizes", "Corrosion resistant"],
    },
    {
      id: "angle-right",
      name: "Angle Iron & Channels",
      category: "steel",
      image: ProductImage22,
      description:
        "Structural angle iron and channels for construction.",
      specs: ["Various dimensions", "High strength", "Multiple grades"],
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up stagger-1">
            Wide range of steel, building materials, power tools, and industrial
            supplies
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-brand-light sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 animate-slide-up stagger-${index + 1} group ${
                    activeCategory === category.id
                      ? "bg-brand-orange text-white"
                      : "bg-white text-brand-dark hover:bg-brand-orange hover:text-white hover:scale-105"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64 animate-slide-up stagger-4">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-brand-gray/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-zoom-in stagger-${(index % 6) + 1}`}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full capitalize group-hover:bg-brand-dark transition-colors">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Quick View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                      <Search className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-brand-gray mb-4 line-clamp-2 group-hover:text-brand-dark transition-colors">
                    {product.description}
                  </p>

                  {/* Expandable specs */}
                  <div className="border-t border-brand-gray/20 pt-4">
                    <button
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === product.id ? null : product.id
                        )
                      }
                      className="flex items-center gap-2 text-brand-orange font-medium text-sm hover:text-brand-orange/80 transition-colors group-hover:translate-x-1"
                    >
                      {expandedItem === product.id ? (
                        <>
                          <ChevronUp size={16} />
                          Hide Specifications
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          View Specifications
                        </>
                      )}
                    </button>

                    {expandedItem === product.id && (
                      <ul className="mt-3 space-y-2">
                        {product.specs.map((spec, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-brand-dark group-hover:translate-x-1 transition-transform"
                          >
                            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                
                {/* Animated border at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 animate-fade">
              <p className="text-brand-gray text-xl">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-drop">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-brand-gray mb-8 max-w-2xl mx-auto animate-slide-up stagger-1">
            Contact us for custom orders and special requirements. We carry a
            wide range of products not listed here.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all hover:scale-105 animate-slide-up stagger-2 group"
          >
            Contact Us
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
