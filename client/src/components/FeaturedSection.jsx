import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import Galaxy from "./Galaxy";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "./MovieCard";

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <Galaxy
          mouseInteraction={true}
          mouseRepulsion={true}
          density={1.2}
          glowIntensity={0.4}
          saturation={0.6}
          hueShift={220}
          twinkleIntensity={0.5}
          rotationSpeed={0.05}
          transparent={true}
        />
      </div>

      <BlurCircle top="0" right="-80px" />

      <div className="relative z-10 flex items-center justify-between mb-8">
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>

        <button
          onClick={() => navigate("/movies")}
          className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer"
        >
          View All
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="relative z-10 flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      <div className="relative z-10 flex justify-center mt-20">
        <button
          onClick={() => {
            navigate("/movies");
            window.scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer text-white"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;