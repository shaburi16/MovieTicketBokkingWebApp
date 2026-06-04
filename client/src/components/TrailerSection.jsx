import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from "./BlurCircle"

const TrailerSection = () => {
    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
            <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

            <div className='relative mt-6 max-w-[960px] mx-auto'>
                <BlurCircle top='-100px' right='-100px' />
                <iframe
                    src={currentTrailer.videoUrl}
                    width='100%'
                    height='540px'
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className='rounded-xl'
                />
            </div>

            <div className='flex gap-4 mt-6 max-w-[960px] mx-auto overflow-x-auto'>
                {dummyTrailers.map((trailer, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentTrailer(trailer)}
                        className={`group relative w-32 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                            currentTrailer.videoUrl === trailer.videoUrl
                                ? 'border-red-500 scale-105'
                                : 'border-transparent hover:border-red-400'
                        }`}
                    >
                        <img
                            src={trailer.image}
                            alt={`Trailer ${index + 1}`}
                            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                        />

                        <div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300'></div>

                        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded'>
                                Play
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrailerSection