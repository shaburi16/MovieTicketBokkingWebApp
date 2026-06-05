import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from "../components/BlurCircle"
import Galaxy from "../components/Galaxy"
import ShinyText from "../components/ShinyText"

const Favorite = () => {
  return dummyShowsData.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
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

      <BlurCircle top='150px' left='0px' />
      <BlurCircle bottom='50px' right='50px' />

      <div className='relative z-10 my-4'>
        <h1 className='text-lg font-medium'>
          <ShinyText
            text="Your Favorite Movies"
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
        </h1>
      </div>

      <div className='relative z-10 flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>
        NO Movies Available
      </h1>
    </div>
  )
}

export default Favorite