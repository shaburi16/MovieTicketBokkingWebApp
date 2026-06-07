import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { ArrowRightIcon, ClockIcon } from 'lucide-react'

import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import isoTimeFormat from '../lib/isoTimeFormat'
import Galaxy from '../components/Galaxy'
import ScrollReveal from '../components/ScrollReveal'
import BlurCircle from '../components/BlurCircle'
import ShinyText from '../components/ShinyText'

const groupRows = [
  ['A', 'B'],
  ['C', 'D'],
  ['E', 'F'],
  ['G', 'H'],
  ['I', 'J'],
]

const occupiedSeats = ['C4', 'C5', 'D5', 'E7', 'F2', 'G8', 'H1', 'I6', 'J3']

const SeatLayout = () => {
  const { id, date } = useParams()
  const navigate = useNavigate()

  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedTime, setSelectedTime] = useState(null)
  const [show, setShow] = useState(null)

  useEffect(() => {
    const found = dummyShowsData.find((movie) => movie._id === id)

    if (found) {
      setShow({
        movie: found,
        dateTime: dummyDateTimeData,
      })
    }
  }, [id])

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast('Please select time first')
    }

    if (occupiedSeats.includes(seatId)) {
      return toast('This seat is already booked')
    }

    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
      return toast('You can only select 5 seats')
    }

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    )
  }

  const handleProceed = () => {
    if (!selectedTime) {
      return toast('Please select time first')
    }

    if (selectedSeats.length === 0) {
      return toast('Please select at least one seat')
    }

    navigate('/my-bookings')
  }

  const renderSeats = (row, count = 9) => (
    <div key={row} className='flex items-center gap-3 mt-2'>
      <span className='w-4 text-xs text-gray-400'>{row}</span>

      <div className='flex flex-wrap items-center justify-center gap-2'>
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`
          const isSelected = selectedSeats.includes(seatId)
          const isOccupied = occupiedSeats.includes(seatId)

          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`h-8 w-8 rounded border cursor-pointer transition ${
                isOccupied
                  ? 'border-primary/30 bg-primary/40 opacity-50 cursor-not-allowed'
                  : isSelected
                  ? 'border-primary bg-primary text-white shadow-[0_0_10px_rgba(248,69,101,0.45)]'
                  : 'border-primary/60 hover:bg-primary/15'
              }`}
            >
              {seatId}
            </button>
          )
        })}
      </div>
    </div>
  )

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

      <div className='relative z-10 flex flex-col md:flex-row gap-8 px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
        <ScrollReveal delay={100} y={40}>
          <div className='w-full md:w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30 backdrop-blur-sm'>
            <p className='text-lg font-semibold px-6'>Available Timing</p>

            <div className='mt-5 space-y-1'>
              {show.dateTime?.[date]?.map((item, index) => (
                <button
                  key={`${item.time}-${index}`}
                  onClick={() => setSelectedTime(item)}
                  className={`flex items-center gap-2 px-6 py-2 w-full text-left cursor-pointer transition ${
                    selectedTime?.time === item.time
                      ? 'bg-primary text-white'
                      : 'hover:bg-primary/20'
                  }`}
                >
                  <ClockIcon className='w-4 h-4' />
                  <span className='text-sm'>{isoTimeFormat(item.time)}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} y={40}>
          <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
            <BlurCircle top='-100px' left='-100px' />
            <BlurCircle bottom='0' right='0' />

            <h1 className='text-2xl font-semibold mb-4'>
              <ShinyText
                text='Select your seat'
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

            <img src={assets.screenImage} alt='screen' />
            <p className='text-gray-400 text-sm mb-6'>SCREEN SIDE</p>

            <div className='flex flex-col items-center mt-10 text-xs text-gray-300'>
              <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
                {groupRows[0].map((row) => renderSeats(row))}
              </div>

              <div className='grid grid-cols-2 gap-11'>
                {groupRows.slice(1).map((group, idx) => (
                  <div key={idx}>
                    {group.map((row) => renderSeats(row))}
                  </div>
                ))}
              </div>

              <div className='flex flex-wrap items-center justify-center gap-4 mt-8 text-sm'>
                <div className='flex items-center gap-2'>
                  <span className='w-4 h-4 rounded border border-primary/60' />
                  Available
                </div>
                <div className='flex items-center gap-2'>
                  <span className='w-4 h-4 rounded bg-primary border border-primary' />
                  Selected
                </div>
                <div className='flex items-center gap-2'>
                  <span className='w-4 h-4 rounded bg-primary/40 border border-primary/30 opacity-50' />
                  Occupied
                </div>
              </div>

              <div className='mt-6 text-center'>
                <p className='text-sm text-gray-400'>
                  Selected Seats: {selectedSeats.length ? selectedSeats.join(', ') : 'None'}
                </p>
              </div>

              <button
                onClick={handleProceed}
                className='flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95'
              >
                Proceed to Checkout
                <ArrowRightIcon strokeWidth={3} className='w-4 h-4' />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}

export default SeatLayout