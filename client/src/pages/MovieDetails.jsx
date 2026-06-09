import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import ShinyText from '../components/ShinyText'
import Galaxy from '../components/Galaxy'
import ScrollReveal from '../components/ScrollReveal'
import DateSelect from '../components/DateSelect'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'
import toast from 'react-hot-toast'

const MovieDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const found = dummyShowsData.find((movie) => movie._id === id)

    if (found) {
      setShow({
        movie: found,
        dateTime: dummyDateTimeData,
      })

      const favorites = JSON.parse(localStorage.getItem('favorites')) || []
      const exists = favorites.some((item) => item._id === found._id)
      setIsFavorite(exists)
    }
  }, [id])

  const handleFavoriteClick = () => {
    if (!show?.movie) return

    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const exists = favorites.some((item) => item._id === show.movie._id)

    let updatedFavorites

    if (exists) {
      updatedFavorites = favorites.filter((item) => item._id !== show.movie._id)
      setIsFavorite(false)
      toast('Removed from favorites')
    } else {
      updatedFavorites = [...favorites, show.movie]
      setIsFavorite(true)
      toast('Added to favorites')
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    navigate('/favorite')
  }

  if (!show) return <Loading />

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

      <div className='relative z-10 px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
        <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
          <img
            src={show.movie.poster_path}
            alt={show.movie.title}
            className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover shadow-2xl'
          />

          <div className='relative flex flex-col gap-3'>
            <BlurCircle top='-100px' left='-100px' />

            <p className='text-primary tracking-widest text-xs font-semibold uppercase'>
              HINDI
            </p>

            <h1 className='text-5xl md:text-[70px] md:leading-[80px] font-semibold text-white'>
              <ShinyText
                text={show.movie.title}
                speed={2}
                delay={0}
                color='#b5b5b5'
                shineColor='#ffffff'
                spread={120}
                direction='left'
                yoyo={false}
                pauseOnHover={false}
              />
            </h1>

            <div className='flex items-center gap-2 text-gray-300'>
              <StarIcon className='w-5 h-5 text-primary fill-primary' />
              <span>{show.movie.vote_average.toFixed(1)} User Rating</span>
            </div>

            <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
              {show.movie.overview}
            </p>

            <p className='text-gray-300 text-sm'>
              {timeFormat(show.movie.runtime)} •{' '}
              {show.movie.genres.map((genre) => genre.name).join(', ')} •{' '}
              {show.movie.release_date.split('-')[0]}
            </p>

            <div className='flex items-center flex-wrap gap-4 mt-4'>
              <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'>
                <PlayCircleIcon className='w-5 h-5' />
                Watch Trailer
              </button>

              <button
                className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'
              >
                Buy Ticket
              </button>

              <button
                onClick={handleFavoriteClick}
                className='transition cursor-pointer active:scale-95'
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <DateSelect dateTime={show.dateTime} id={id} />

        <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>
        <div className='flex flex-wrap max-sm:justify-center gap-8'>
          {dummyShowsData.slice(0, 4).map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MovieDetails