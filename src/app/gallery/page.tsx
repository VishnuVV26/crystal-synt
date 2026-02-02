"use client";

import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

// Import all images
import GalleryImage1 from "@/assets/images/HomepageImage1.jpg";
import GalleryImage2 from "@/assets/images/HomepageImage2.jpg";
import GalleryImage3 from "@/assets/images/HomepageImage3.jpg";
import GalleryImage4 from "@/assets/images/HomepageImage5.jpg";
import GalleryImage5 from "@/assets/images/About.jpg";
import GalleryImage6 from "@/assets/images/imgi_23_074C2664-1.jpg";
import GalleryImage7 from "@/assets/images/imgi_24_17609704_cb2ee98f-d079-4d27-9cd8-4520eba5c4de_1000_667.jpg";
import GalleryImage8 from "@/assets/images/imgi_25_29873589-steel-pipes-bunch-on-the-rack-in-warehouse.jpg";
import GalleryImage9 from "@/assets/images/imgi_26_ALUMINIUM-CHEQUARD-PLATE.jpg";
import GalleryImage10 from "@/assets/images/imgi_27_angle-1.jpg";
import GalleryImage11 from "@/assets/images/imgi_28_Carbon_Steel_Bars_05.jpg";
import GalleryImage12 from "@/assets/images/imgi_29_coragated-sheet.jpg";
import GalleryImage13 from "@/assets/images/imgi_30_CRYSTAL-2-.jpg";
import GalleryImage14 from "@/assets/images/imgi_31_czym-jest-stal-i-do-czego-jest-wykorzystywana.jpg";
import GalleryImage15 from "@/assets/images/imgi_32_galvanized-wire-1562259.jpg";
import GalleryImage16 from "@/assets/images/imgi_33_gi-pipe (1).jpg";
import GalleryImage17 from "@/assets/images/imgi_34_i-beam-20140903.jpg";
import GalleryImage18 from "@/assets/images/imgi_36_metal-diamond-plate.jpg";
import GalleryImage19 from "@/assets/images/imgi_38_pipa1.jpg";
import GalleryImage20 from "@/assets/images/imgi_39_pl13420392-jis_g3454_cold_drawn_seamless_carbon_steel_boiler_tubes_random_length.jpg";
import GalleryImage21 from "@/assets/images/imgi_40_plywood.jpg";
import GalleryImage22 from "@/assets/images/imgi_41_Sell_flat_bar_M.S_flat.jpg";
import GalleryImage23 from "@/assets/images/imgi_42_Stainless-steel-seamless-Tubes-pipes-2.jpg";
import GalleryImage24 from "@/assets/images/imgi_44_MMFC0528.jpg";
import GalleryImage25 from "@/assets/images/extended.jpg";
import GalleryImage26 from "@/assets/images/homepage4.jpg";
import GalleryImage27 from "@/assets/images/round_bars.jpg";
import GalleryImage28 from "@/assets/images/shafting.jpg";
import GalleryImage29 from "@/assets/images/squir.jpg";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      src: GalleryImage1,
      title: "Steel Warehouse",
      category: "Warehouse",
      description: "Our extensive steel inventory warehouse",
    },
    {
      id: 2,
      src: GalleryImage2,
      title: "Distribution",
      category: "Operations",
      description: "Efficient distribution and logistics operations",
    },
    {
      id: 3,
      src: GalleryImage3,
      title: "Industrial Facility",
      category: "Facilities",
      description: "State-of-the-art industrial facility",
    },
    {
      id: 4,
      src: GalleryImage4,
      title: "Company Overview",
      category: "Facilities",
      description: "Crystal International Trading overview",
    },
    {
      id: 5,
      src: GalleryImage5,
      title: "About Us",
      category: "Company",
      description: "Learn more about Crystal Trading",
    },
    {
      id: 6,
      src: GalleryImage6,
      title: "Construction Site",
      category: "Projects",
      description: "Steel supply for major construction project",
    },
    {
      id: 7,
      src: GalleryImage7,
      title: "Steel Storage",
      category: "Warehouse",
      description: "Organized steel storage facility",
    },
    {
      id: 8,
      src: GalleryImage8,
      title: "Steel Pipes Rack",
      category: "Products",
      description: "Bunch of steel pipes on the rack in warehouse",
    },
    {
      id: 9,
      src: GalleryImage9,
      title: "Aluminum Chequered Plate",
      category: "Products",
      description: "Premium aluminum chequered plates",
    },
    {
      id: 10,
      src: GalleryImage10,
      title: "Steel Angles",
      category: "Products",
      description: "M.S. Angles in various sizes",
    },
    {
      id: 11,
      src: GalleryImage11,
      title: "Carbon Steel Bars",
      category: "Products",
      description: "High-quality carbon steel bars",
    },
    {
      id: 12,
      src: GalleryImage12,
      title: "Corrugated Sheets",
      category: "Products",
      description: "Corrugated sheets for roofing",
    },
    {
      id: 13,
      src: GalleryImage13,
      title: "Crystal Operations",
      category: "Operations",
      description: "Our daily operations at Crystal",
    },
    {
      id: 14,
      src: GalleryImage14,
      title: "Steel Industry",
      category: "Industry",
      description: "Overview of steel industry applications",
    },
    {
      id: 15,
      src: GalleryImage15,
      title: "Galvanized Wire",
      category: "Products",
      description: "High-quality galvanized wire",
    },
    {
      id: 16,
      src: GalleryImage16,
      title: "GI Pipes",
      category: "Products",
      description: "Galvanized iron pipes",
    },
    {
      id: 17,
      src: GalleryImage17,
      title: "I-Beam",
      category: "Products",
      description: "Structural I-beams for construction",
    },
    {
      id: 18,
      src: GalleryImage18,
      title: "Metal Diamond Plate",
      category: "Products",
      description: "Metal diamond plate for anti-slip surfaces",
    },
    {
      id: 19,
      src: GalleryImage19,
      title: "Steel Pipes",
      category: "Products",
      description: "Various steel pipes available",
    },
    {
      id: 20,
      src: GalleryImage20,
      title: "Seamless Boiler Tubes",
      category: "Products",
      description: "JIS G3454 cold drawn seamless carbon steel boiler tubes",
    },
    {
      id: 21,
      src: GalleryImage21,
      title: "Plywood",
      category: "Products",
      description: "Quality plywood materials",
    },
    {
      id: 22,
      src: GalleryImage22,
      title: "M.S. Flat Bars",
      category: "Products",
      description: "M.S. flat bars for various applications",
    },
    {
      id: 23,
      src: GalleryImage23,
      title: "Stainless Steel Tubes",
      category: "Products",
      description: "Stainless steel seamless tubes and pipes",
    },
    {
      id: 24,
      src: GalleryImage24,
      title: "Industrial Equipment",
      category: "Operations",
      description: "Modern industrial equipment",
    },
    {
      id: 25,
      src: GalleryImage25,
      title: "Extended Products",
      category: "Products",
      description: "Extended metal products",
    },
    {
      id: 26,
      src: GalleryImage26,
      title: "Project Work",
      category: "Projects",
      description: "On-site project work",
    },
    {
      id: 27,
      src: GalleryImage27,
      title: "Round Bars",
      category: "Products",
      description: "M.S. round bars in various diameters",
    },
    {
      id: 28,
      src: GalleryImage28,
      title: "Shafting",
      category: "Products",
      description: "Steel shafting materials",
    },
    {
      id: 29,
      src: GalleryImage29,
      title: "Square Bars",
      category: "Products",
      description: "Square steel bars for structural use",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "products", label: "Products" },
    { id: "warehouse", label: "Warehouse" },
    { id: "projects", label: "Projects" },
    { id: "facilities", label: "Facilities" },
    { id: "operations", label: "Operations" },
    { id: "company", label: "Company" },
    { id: "industry", label: "Industry" },
  ];

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

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
            Our Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up stagger-1">
            Explore our facilities, products, and completed projects
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 animate-slide-up stagger-${index + 1} group ${
                  activeCategory === category.id
                    ? "bg-brand-orange text-white"
                    : "bg-brand-light text-brand-dark hover:bg-brand-orange hover:text-white hover:scale-105"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 animate-zoom-in stagger-${(index % 6) + 1}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-brand-dark transition-colors">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                    <ZoomIn className="text-white" size={24} />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-dark/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors hover:scale-110"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-brand-orange transition-colors hover:scale-110"
          >
            <ChevronLeft size={48} />
          </button>

          <div
            className="max-w-5xl mx-auto px-4 animate-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white font-bold text-xl">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="text-brand-gray">
                {filteredItems[selectedImage].description}
              </p>
              <span className="inline-block mt-2 bg-brand-orange/20 text-brand-orange text-sm px-3 py-1 rounded-full">
                {filteredItems[selectedImage].category}
              </span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-brand-orange transition-colors hover:scale-110"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {selectedImage + 1} / {filteredItems.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 animate-drop">
            Want to See More?
          </h2>
          <p className="text-brand-gray mb-8 max-w-2xl mx-auto animate-slide-up stagger-1">
            Contact us to schedule a visit to our facilities or discuss your
            project requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all hover:scale-105 animate-slide-up stagger-2 group"
          >
            Contact Us Today
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
