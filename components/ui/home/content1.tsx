import Image from "next/image";
import RoundBar from "../../../assets/images/round_bars.jpg";
import ShaftingBar from "../../../assets/images/shafting.jpg";
import SquareBar from "../../../assets/images/squir.jpg";
import Extendedbar from "../../../assets/images/extended.jpg";
const Homecontent1 = () => {
    return (
        <section className="bg-gray-300 py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-5xl font-extrabold text-gray-900">
                        Our Products
                    </h2>
                    <div className="flex items-center gap-4 mt-4">
                        <span className="tracking-[0.5em] text-sm font-semibold text-gray-900">
                            AND TYPES
                        </span>
                        <span className="w-12 h-[2px] bg-orange-500"></span>
                    </div>
                    <p className="text-gray-700 mt-10 leading-relaxed max-w-md">
                        Crystal Trading W.L.L Established in 2010, is a Bahrain leading steel import, stockiest,
                        trade and distribution company, with the experience,
                        expertise and network to provide exceptional service and unsurpassed value to our clients throughout the country.
                    </p>
                    <p className="text-gray-700 mt-6 max-w-md">
                        Just call us and you’ll get highest quality service.
                    </p>
                    <button className="mt-14 px-10 py-4 border border-black text-sm tracking-widest font-semibold hover:bg-black hover:text-white transition">
                        ALL PRODUCTS
                    </button>
                </div>
                {/* RIGHT GRID */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <div className="bg-white p-10">
                        {/* <FaLayerGroup className="text-orange-500 text-4xl mb-6" /> */}
                        <h3 className="text-2xl font-bold mb-4">M.S. Round Bars</h3>
                        <Image
                            src={RoundBar}
                            alt="Glass Railing"
                            className="object-cover"
                        />
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white p-10">
                        {/* <FaSpiral className="text-orange-500 text-4xl mb-6" /> */}
                        <h3 className="text-2xl font-bold mb-4">M.S. Shafting bars</h3>
                        <Image
                            src={ShaftingBar}
                            alt="Glass Railing"
                            className="object-cover"
                        />
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white p-10">
                        {/* <FaStairs className="text-orange-500 text-4xl mb-6" /> */}
                        <h3 className="text-2xl font-bold mb-4">M.S. Square Bars</h3>
                        <Image
                            src={SquareBar}
                            alt="Glass Railing"
                            className="object-cover"
                        />
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white p-10">
                        {/* <FaGripLinesVertical className="text-orange-500 text-4xl mb-6" /> */}
                        <h3 className="text-2xl font-bold mb-4">
                            Expended Metals
                        </h3>
                        <Image
                            src={Extendedbar}
                            alt="Glass Railing"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Homecontent1;