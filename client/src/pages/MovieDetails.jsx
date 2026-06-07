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

const MovieDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)

  const getShow = () => {
    const found = dummyShowsData.find(movie => movie._id === id)

    if (found) {
      setShow({
        movie: found,
        dateTime: dummyDateTimeData,
      })
    }
  }

  useEffect(() => {
    getShow()
  }, [id])

  return show ? (
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
          <ScrollReveal delay={100} y={50}>
            <img
              src={show.movie.poster_path}
              alt={show.movie.title}
              className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover shadow-2xl'
            />
          </ScrollReveal>

          <div className='relative flex flex-col gap-3'>
            <BlurCircle top='-100px' left='-100px' />

            <ScrollReveal delay={150} y={20}>
              <p className='text-primary tracking-widest text-xs font-semibold uppercase'>
                HINDI
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250} y={40}>
              <h1 className='text-5xl md:text-[70px] md:leading-[80px] font-semibold text-white'>
                <ShinyText
                  text={show.movie.title}
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
            </ScrollReveal>

            <ScrollReveal delay={350} y={20}>
              <div className='flex items-center gap-2 text-gray-300'>
                <StarIcon className='w-5 h-5 text-primary fill-primary' />
                <span>{show.movie.vote_average.toFixed(1)} User Rating</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450} y={20}>
              <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
                {show.movie.overview}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={550} y={20}>
              <p className='text-gray-300 text-sm'>
                {timeFormat(show.movie.runtime)} •{' '}
                {show.movie.genres.map(genre => genre.name).join(', ')} •{' '}
                {show.movie.release_date.split('-')[0]}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={650} y={20}>
              <div className='flex items-center flex-wrap gap-4 mt-4'>
                <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'>
                  <PlayCircleIcon className='w-5 h-5' />
                  Watch Trailer
                </button>

                <a
                  href=''
                  className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'
                >
                  Buy Ticket
                </a>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
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
            </ScrollReveal>
          </div>
        </div>

        <p className='text-lg font-medium mt-20'>Your Favorite Cast</p>
        <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
          <div className='flex items-center gap-4 w-max px-4'>
            {show.movie.casts.slice(0, 11).map((cast, index) => (
              <div key={index} className='flex flex-col items-center text-center'>
                <img
                  src={cast.profile_path}
                  alt=''
                  className='rounded-full h-20 md:h-20 aspect-square object-cover'
                />
                <p className='font-medium text-xs mt-3'>{cast.name}</p>
              </div>
            ))}
          </div>
        </div>

        <DateSelect dateTime={show.dateTime} id={id} />

        <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>
        <div className='flex flex-wrap max-sm:justify-center gap-8'>
          {dummyShowsData.slice(0, 4).map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>

        <div className='flex justify-center mt-20'>
          <button
            onClick={() => {
              navigate('/movies')
              scrollTo(0, 0)
            }}
            className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
          >
            Show more
          </button>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  )
}

export default MovieDetails