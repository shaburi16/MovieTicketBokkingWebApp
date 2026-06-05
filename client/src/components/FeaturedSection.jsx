import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import Galaxy from "./Galaxy";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "./MovieCard";
import ShinyText from "../components/ShinyText";

const FeaturedSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const [sectionVisible, setSectionVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);

    return () => {
      sectionObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden"
    >
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

      <div
        className={`relative z-10 flex items-center justify-between mb-8 transition-all duration-1000 ease-out ${
          sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-gray-300 font-medium text-lg">
          <ShinyText
            text="Now Showing"
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
        </p>

        <button
          onClick={() => navigate("/movies")}
          className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer transition-all duration-300 hover:text-white"
        >
          View All
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div
        ref={cardsRef}
        className="relative z-10 flex flex-wrap max-sm:justify-center gap-8 mt-8"
      >
        {dummyShowsData.slice(0, 4).map((show, index) => (
          <div
            key={show._id}
            className={`transition-all duration-1000 ease-out ${
              cardsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              transitionDelay: `${index * 150}ms`
            }}
          >
            <MovieCard movie={show} />
          </div>
        ))}
      </div>

      <div
        className={`relative z-10 flex justify-center mt-20 transition-all duration-1000 ease-out ${
          sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <button
          onClick={() => {
            navigate("/movies");
            window.scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer text-white hover:scale-105"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;