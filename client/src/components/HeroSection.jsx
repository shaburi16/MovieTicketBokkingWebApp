import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShinyText from "../components/ShinyText"

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
  className="relative flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: 'url("/backgroundImage.png")' }}
>
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col items-start gap-4 mt-20">
        <img
          src={assets.JioStudioLogo}
          alt="JioStudios Logo"
          className="h-10 lg:h-11"
        />

        <h1 className="text-5xl md:text-[70px] md:leading-[80px] font-semibold text-white">
         <ShinyText
            text="Dhurandhar"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            
          />
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-300">
          <span>Violence | Gore | Suicide | Tobacco</span>

          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>2025</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>3h 25m</span>
          </div>
        </div>

        <p className="max-w-md text-gray-300 leading-relaxed">
          Over a decade-long mission, stoic yet lethal Hamza (Ranveer Singh) climbs the rank of Karachi's underworld to tear down a ruthless extremist network.
        </p>

        <button
          onClick={() => navigate("/movies")}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:opacity-90 transition cursor-pointer"
        >
          <ShinyText
            text="Explore Now"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            className="text-lg font-medium"
          />
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;