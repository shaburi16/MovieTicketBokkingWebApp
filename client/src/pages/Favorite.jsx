import React, { useEffect, useState } from 'react'
import { Heart, StarIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Galaxy from '../components/Galaxy'
import BlurCircle from '../components/BlurCircle'
import timeFormat from '../lib/timeFormat'

const Favorite = () => {
  const navigate = useNavigate()
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorites(storedFavorites)
  }, [])

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie._id !== movieId)
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  const handleNavigate = (movieId) => {
    navigate(`/movies/${movieId}`)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className='fixed inset-0 z-0'>
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

      <div className='relative z-10 px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-screen'>
        <BlurCircle top='100px' left='100px' />
        <BlurCircle bottom='0px' right='100px' />

        <h1 className='text-2xl font-semibold mb-8 text-white'>Favorite Movies</h1>

        {favorites.length === 0 ? (
          <p className='text-gray-400'>No favorite movies added yet.</p>
        ) : (
          <div className='flex flex-wrap gap-8 max-sm:justify-center'>
            {favorites.map((movie) => (
              <div
                key={movie._id}
                className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66'
              >
                <img
                  onClick={() => handleNavigate(movie._id)}
                  src={movie.backdrop_path || movie.poster_path}
                  alt={movie.title}
                  className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'
                />

                <div className='flex items-start justify-between gap-3 mt-2'>
                  <p className='font-semibold truncate text-white'>{movie.title}</p>

                  <button
                    onClick={() => removeFavorite(movie._id)}
                    className='shrink-0 cursor-pointer'
                  >
                    <Heart className='w-5 h-5 fill-red-500 text-red-500' />
                  </button>
                </div>

                <p className='text-sm text-gray-400 mt-2'>
                  {new Date(movie.release_date).getFullYear()} •{' '}
                  {movie.genres?.slice(0, 2).map((genre) => genre.name).join(' | ')} •{' '}
                  {timeFormat(movie.runtime)}
                </p>

                <div className='flex items-center justify-between mt-4 pb-3'>
                  <button
                    onClick={() => handleNavigate(movie._id)}
                    className='px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-white'
                  >
                    View Details
                  </button>

                  <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
                    <StarIcon className='w-4 h-4 text-primary fill-primary' />
                    {movie.vote_average?.toFixed(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Favorite