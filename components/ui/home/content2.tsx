import React from 'react'
import Image from "next/image";
import ProductImage1 from "../../../assets/images/About.jpg";
import ProductImage2 from "../../../assets/images/HomepageImage1.jpg";
const HomeContent2 = () => {
    return (
        <section className="bg-[#ffffff] py-24 px-6">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* ITEM 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <Image
                            src={ProductImage1}
                            alt="Staircase Lighting"
                            className="object-cover"
                        />
                    </div>
                    <div className="text-left">
                        <h3 className="text-4xl font-extrabold text-[#184ea0]">
                            What We Do
                        </h3>
                        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mt-3">
                            Sale of Steel,
                            Building Materials
                        </p>
                        <p className="text-gray-900 mt-8 leading-relaxed max-w-md">
                            Crystal International Trading W.L.LEstablished in 2010, is a Bahrain leading steel import, stockiest, trade and distribution company, with the experience, expertise and network to provide exceptional service and unsurpassed value to our clients throughout the country.
                            Over the past years, we have built solid partnerships with the world’s premier suppliers and processors in the steel, Aluminum, Building materials& Wood industry, allowing us to offer a wide-range of competitively-priced products to serve the country construction, IWP (Infrastructure, Water & Power), Oil & Gas industries.
                            Due to our strategic warehouse and outlet locations, sturdy operations and structured, trade finance capabilities, you gain the competitive edge of having a consistent and secure supply of a variety of grades and sizes of structural steel at your disposal, for the duration of any project. Our highly-trained and dedicated team ensures quick response to enquiries and rapid delivery of small or large quantities, to the exact specifications that you require.
                        </p>
                        <button className="mt-10 px-8 py-3 border border-[#184ea0] text-[#184ea0] tracking-widest text-sm hover:bg-[#184ea0] hover:text-black transition">
                            KNOW MORE
                        </button>
                    </div>
                </div>
                {/* ITEM 2 (REVERSED) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="lg:order-2 relative">
                        <Image
                            src={ProductImage2}
                            alt="Glass Railing"
                            className="object-cover"
                        />
                    </div>
                    <div className="lg:order-1 text-left">
                        <h3 className="text-4xl font-extrabold text-[#184ea0]">
                            Latest News
                        </h3>
                        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mt-3">
                            June 28, 2018
                        </p>
                        <p className="text-gray-900 mt-8 leading-relaxed max-w-md">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button className="mt-10 px-8 py-3 border border-[#184ea0] text-[#184ea0] tracking-widest text-sm hover:bg-[#184ea0] hover:text-black transition">
                            KNOW MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeContent2;