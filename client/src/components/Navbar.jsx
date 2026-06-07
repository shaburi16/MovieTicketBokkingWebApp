import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Search, TicketPlus, X } from 'lucide-react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  const handleCloseMenu = () => {
    window.scrollTo(0, 0)
    setIsOpen(false)
  }

  return (
    <div className='fixed top-0 left-0 z-50 w-full px-6 py-5 md:px-10 lg:px-16'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to='/home' className='max-md:flex-1'>
          <img src={assets.logo} alt='Logo' className='w-32 h-auto' />
        </Link>

        <div
          className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur-md bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
            isOpen ? 'max-md:w-full' : 'max-md:w-0'
          }`}
        >
          <X
            className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white'
            onClick={() => setIsOpen(false)}
          />

          <Link onClick={handleCloseMenu} to='/home' className='text-white'>
            Home
          </Link>
          <Link onClick={handleCloseMenu} to='/movies' className='text-white'>
            Movies
          </Link>
          <Link onClick={handleCloseMenu} to='/favorite' className='text-white'>
            Favorites
          </Link>
          <Link onClick={handleCloseMenu} to='/my-bookings' className='text-white'>
            YourBookings
          </Link>
        </div>

        <div className='flex items-center gap-5 md:gap-8 z-50'>
          <Search className='max-md:hidden w-6 h-6 cursor-pointer text-white' />

          {!user ? (
            <button
              onClick={openSignIn}
              className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-white'
            >
              Login
            </button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label='My Booking'
                  labelIcon={<TicketPlus width={15} />}
                  onClick={() => navigate('/my-bookings')}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}

          <Menu
            size={32}
            className='md:hidden cursor-pointer text-white'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar