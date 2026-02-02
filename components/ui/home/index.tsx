import Homecontent1 from "./content1";
import HomeContent2 from "./content2";

export default function HomeContainer() {
  return (
   <> 
 <main className="h-screen pt-32 px-6 relative">
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white font-ibm text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
          CRYSTAL
          <br />
          <span className=" text-3xl"> TRADING W.L.L.</span>
        </h1>
        <h2 className="font-inter text-gray-300 text-2xl mt-6">
          A DIVISION OF CRYSTAL GROUP
        </h2>
      </div>
      {/* Bottom Text */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center px-6">
        <p className="bg-blue-900 p-4 font-inter text-white text-sm md:text-base max-w-3xl text-center leading-relaxed">
          IMPORT EXPORT OF STEEL | ALUMINIUM AND BUILDING MATERIAL <br />
          STEEL WELDING & FABRICATION | ALUMINIUM FABRICATION <br />
          STEEL GALVANIZING | ALUMINIUM COATING <br />
          STAINLESS STEEL FABRICATION
        </p>
      </div>
    </main>
    <Homecontent1 />
    <HomeContent2/>
</>
  );
}
