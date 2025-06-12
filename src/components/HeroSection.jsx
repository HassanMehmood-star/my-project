import { useState } from "react";
import { ArrowRight } from "lucide-react";
import earthImage from "../images/Earth Model.png";
import animatedImage from "../images/animated.jpg";

const HeroSection = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Log imported image paths to verify
  console.log("Imported earthImage path:", earthImage);
  console.log("Imported animatedImage path:", animatedImage);

  // Handler for the first carousel dot (shows earthImage)
  const showEarthImage = (e) => {
    console.log("You clicked on the first carousel at:", new Date().toLocaleTimeString());
    console.log("Event target:", e.target);
    console.log("Setting isFirstImage to true (Earth Image)");
    setIsFirstImage(true);
    console.log("Post-click state (immediate):", true);
  };

  // Handler for the second carousel dot (shows animatedImage)
  const showAnimatedImage = (e) => {
    console.log("You clicked on the second carousel at:", new Date().toLocaleTimeString());
    console.log("Event target:", e.target);
    console.log("Setting isFirstImage to false (Animated Image)");
    setIsFirstImage(false);
    console.log("Post-click state (immediate):", false);
  };

  // Log current state and image source on every render
  console.log("Rendering HeroSection. Current isFirstImage state:", isFirstImage);
  console.log("Current background image source:", isFirstImage ? earthImage : animatedImage);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background Image */}
      <img
        src={isFirstImage ? earthImage : animatedImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
        onError={() => console.error("Error loading background image:", isFirstImage ? "Earth Image" : "Animated Image")}
        onLoad={() => console.log("Background image loaded:", isFirstImage ? "Earth Image" : "Animated Image")}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Vertical Navigation Controls */}
   <div className="absolute left-1 sm:left-4 md:left-6 lg:left-8 top-1/4 -mt-6 sm:mt-0 sm:top-1/3 transform -translate-y-1/3 flex flex-col items-center space-y-2 sm:space-y-4 z-30">


        <div
          onClick={showEarthImage}
          className={`w-1.5 h-12 md:h-16 cursor-pointer pointer-events-auto transition ${
            isFirstImage ? "bg-blue-600 hover:bg-blue-800" : "bg-gray-600 hover:bg-gray-800"
          }`}
        />
        <div
          onClick={showAnimatedImage}
          className={`w-1.5 h-12 md:h-16 cursor-pointer pointer-events-auto transition ${
            !isFirstImage ? "bg-blue-600 hover:bg-blue-800" : "bg-gray-600 hover:bg-gray-800"
          }`}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col justify-between min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-12">
        {/* Hero Text */}
        <div className="flex flex-col justify-center text-left space-y-4 sm:space-y-6 max-w-5xl w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight sm:leading-snug">
            Simplify and Optimize Global Procurement
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
            Your partner in finding suppliers, reducing costs, and simplifying logistics
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 sm:py-2 sm:px-4 text-sm sm:text-xs rounded shadow transition transform hover:scale-105 flex items-center w-max mt-2">
            TRY 11GS FOR FREE
            <ArrowRight className="ml-2 h-4 w-4 sm:ml-1 sm:h-3 sm:w-3" />
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 max-w-7xl w-full mb-4">
          {[
            {
              title: "No Middlemen",
              desc: "11GS delivers global supply chain solutions, helping businesses find suppliers, optimize logistics, and focus on cost savings and sustainable growth.",
              btn: "Let's Create",
            },
            {
              title: "Streamline Your Procurement",
              desc: "11GS optimizes global supply chains with customized strategies to cut costs, boost efficiency, and reduce risks. Reach out for a tailored cost-saving plan.",
              btn: "Expert on demand",
            },
            {
              title: "One-Stop Shop",
              desc: "11GS provides custom supply chain solutions to streamline operations, cut waste, and improve efficiency, letting you focus on growth with effortless strategies.",
              btn: "11GS STRATEGY",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gray-500/30 backdrop-blur-sm border border-gray-400/20 rounded-md p-3 sm:p-4"
            >
              <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-200 mb-2 leading-snug">
                {card.desc}
              </p>
              <button className="text-orange-400 text-xs md:text-sm flex items-center hover:text-cyan-300 transition-colors font-medium">
                {card.btn}
                <ArrowRight className="ml-1 h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;