import { useState } from "react";
import { ArrowRight } from "lucide-react";
import earthImage from "../images/Earth Model.png";
import animatedImage from "../images/animated.jpg";

const HeroSection = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={isFirstImage ? earthImage : animatedImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Vertical Switch Buttons */}
      <div className="absolute left-2 xs:left-3 sm:left-4 top-36 sm:top-1/4 transform -translate-y-1/2 flex flex-col gap-1.5 z-30">
        <div
          onClick={() => setIsFirstImage(true)}
          className={`w-1 xs:w-2 h-8 xs:h-10 sm:h-12 cursor-pointer transition ${
            isFirstImage ? "bg-blue-600" : "bg-gray-600"
          }`}
        />
        <div
          onClick={() => setIsFirstImage(false)}
          className={`w-1 xs:w-2 h-8 xs:h-10 sm:h-12 cursor-pointer transition ${
            !isFirstImage ? "bg-blue-600" : "bg-gray-600"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between min-h-screen px-4 xs:px-6 sm:px-10 lg:px-20 pt-24 xs:pt-32 sm:pt-40 lg:pt-52 xl:pt-64 pb-6 sm:pb-10">
        {/* Hero Text */}
        <div className="max-w-6xl w-full space-y-4 text-center sm:text-left">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Simplify and Optimize Global Procurement
          </h1>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed">
            Your partner in finding suppliers, reducing costs, and simplifying logistics
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-4 xs:py-3 xs:px-6 rounded shadow-md transition transform hover:scale-105 flex items-center w-max mx-auto sm:mx-0 text-xs xs:text-sm sm:text-base">
            TRY 11GS FOR FREE
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 xs:h-4 xs:w-4" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 mt-8 sm:mt-10 w-full px-0 sm:pl-0 sm:pr-6 lg:pl-0 lg:pr-12">
          {[
            {
              title: "No Middlemen",
              desc: "11GS delivers global supply chain solutions, helping businesses find suppliers, optimize logistics, and focus on cost savings and sustainable growth,11GS delivers global supply chain solutions, helping businesses find suppliers, optimize logistics, and focus on cost savings and sustainable growth",
              btn: "Let's Create",
            },
            {
              title: "Streamline Your Procurement",
              desc: "11GS optimizes global supply chains with customized strategies to cut costs, boost efficiency, and reduce risks. Reach out for a tailored cost-saving plan11GS delivers global supply chain solutions, helping businesses find suppliers, optimize logistics, and focus on cost savings and sustainable growth",
              btn: "Expert on demand",
            },
            {
              title: "One-Stop Shop",
              desc: "11GS provides custom supply chain solutions to streamline operations, cut waste, and improve efficiency, letting you focus on growth with effortless strategies11GS delivers global supply chain solutions, helping businesses find suppliers, optimize logistics, and focus on cost savings and sustainable growth",
              btn: "11GS STRATEGY",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 xs:p-6 w-full min-h-[180px] xs:min-h-[200px] sm:min-h-[220px] lg:min-h-[260px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1.5 xs:mb-2">
                  {card.title}
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-200 mb-3 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <button className="text-orange-400 hover:text-cyan-300 text-xs xs:text-sm font-medium flex items-center transition">
                {card.btn}
                <ArrowRight className="ml-1 h-3.5 w-3.5 xs:h-4 xs:w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;