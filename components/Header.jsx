import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import {
  AiOutlineHome,
  AiOutlineRead,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineContacts,
} from 'react-icons/ai';
import Link from 'next/link';


const Header = ({ user, loading }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        {/* wrapper for the whole nav bar */}
        <nav className='bg-green-backgroundtext pt-0.5'>

          {/* logo */}
          <Link href="/">
          <Image
            className='h-8 float-left mt-2 ml-3'
            src='/images/logo.png'
            alt='logo'
            width='250px'
            height='50px'
          />
          </Link>

          {/* login/logout button terniery operator to show conditionally */}
          {!loading &&
            user ?
            <p className=' h-6 float-right bg-white-cardbackground hover:bg-red-700 black-text font-bold px-1.5 m-3.5 rounded-3xl hover:cursor-pointer'>
              <Link href="/api/logout">Logout</Link>
            </p>
            :
            <p className=' h-6 float-right bg-white-cardbackground hover:bg-gray-500 black-text font-bold px-1.5 m-3.5 rounded-3xl hover:cursor-pointer'>
              <Link href="/api/login">Login</Link>
            </p>
          }
          {/* wrapper for the whole navbar */}
          <div className='flex items-center max-w-fit mx-auto'>

            {/* links in the middle of the navbar */}
            <div className='flex items-center justify-between h-30'>
              <div className='flex items-center'>
                {/* styles for the mobile menu */}
                <div className=' flex-shrink-0 ml-0 flex items-baseline space-x-6 text-white px-0 py-2 rounded-md text-sm font-medium'>
                  {/* individual mobile links wrapper */}
                  <div className='md:hidden ml-0 flex items-baseline space-x-9'>
                    {/* wrapper for individual mobile link */}
                    <Link href='/'>
                      <div className='block items-center justify-center sm:px-7 px-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                        {/* wrapper for navbar icon and the icon */}
                        <div className='block h-5 w-5 ml-1 text-3xl mb-2'>
                          <AiOutlineHome />
                        </div>
                        <p>Home</p>
                      </div>
                    </Link>
                    {/* wrapper for individual mobile link */}
                    <Link href='/tutorials'>
                      <div className='block items-center justify-center sm:px-7 px-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                        <div className='block h-6 w-6 pl-3 text-3xl mb-1'>
                          <AiOutlineRead />
                        </div>
                        <p>Tutorials</p>
                      </div>
                    </Link>
                    {/* wrapper for individual mobile link */}
                    {(user === null) ?
                      <Link href='/api/login'>
                        <div className='block items-center justify-center sm:px-7 px-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                          <div className='block h-6 w-6 ml-2 text-3xl mb-1'>
                            <AiOutlinePlus />
                          </div>
                          <p>Create</p>
                        </div>
                      </Link>
                      :
                      <Link href='/createtutorials'>
                        <div className='block items-center justify-center sm:px-7 px-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                          <div className='block h-6 w-6 ml-2 text-3xl mb-1'>
                            <AiOutlinePlus />
                          </div>
                          <p>Create</p>
                        </div>
                      </Link>}
                  </div>
                </div>

                <div className='hidden md:block '>
                  {/* wrapper for desktop view middle link items */}
                  {/* TODO need to space out these links for the mobile site */}

                  <div className='flex px-20 justify-around max-w-full w-screen '>

                    <Link href='/'>
                      <div
                        className='hover:bg-green-700  text-white px-3 py-2 rounded-md text-lg font-medium'>
                        Home
                      </div>
                    </Link>
                    <Link href='/tutorials'>
                      <div
                        className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium'>
                        Tutorials
                      </div>
                    </Link>
                    {(user === null) ?
                      <Link href='/api/login'>
                        <div
                          className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium'>
                          Create
                        </div>
                      </Link>
                      :
                      <Link href='/createtutorials'>
                        <div
                          className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium'>
                          Create
                        </div>
                      </Link>}
                    <Link href='/tutorials'>
                      <div
                        className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium'>
                        Search
                      </div>
                    </Link>
                    {(user === null) ?
                      <Link href='/api/login'>
                        <div
                          className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium'>
                          Profile
                        </div>
                      </Link>
                      :
                      <Link href='/profile'>
                        <div
                          className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium'>
                          Profile
                        </div>
                      </Link>}
                    <Link href='/favourites'>
                      <div
                        className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium'>
                        Favourites
                      </div>
                    </Link>
                    {/* <Link href='/'>
                      <a
                        href='#'
                        className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
                        Events
                      </a>
                    </Link> */}
                  </div>
                </div>
              </div>
              {/* wrapper around the more button */}

              <div className='pl-10 md:hidden'>

                {/* mobile more button */}
                {/* TODO need to align this button with icons */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type='button'

                  className='inline-flex items-center justify-center pt-1 h-12 w-19.8 px-2 rounded-md text-white hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white'

                  aria-controls='mobile-menu'
                  aria-expanded='false'>
                  <span className='sr-only'>Open main menu</span>
                  <div>
                    {!isOpen ? (
                      <svg

                        className='block h-7 w-8'

                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4 6h16M4 12h16M4 18h16'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='block h-8 w-8'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    )}
                    <p className="text-white rounded-md text-sm font-medium">

                      More
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter='transition ease-out duration-100 transform'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-75 transform'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            {(ref) => (
              <div className='md:hidden' id='mobile-menu '>
                <div ref={ref} className='px-2 pt-2 space-y-1 sm:px-3'>
                  <Link href='tutorials'>
                    <div
                      className='hover:bg-green-700 text-white block px-3 py-2 rounded-md text-base font-medium'>
                      {/* TODO size the icons */}{' '}
                      <div className='block h-6 w-6 text-3xl mb-2'>
                        <AiOutlineSearch />
                      </div>
                      Search
                    </div>
                  </Link>
                  {(user === null) ?
                    <Link href='/api/login'>
                      <div
                        className='text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                        {' '}
                        <div className='block h-6 w-6 text-3xl mb-2'>
                          <AiOutlineUser />
                        </div>
                        Profile
                        </div>
                        </Link>
                        :
                        <Link href='/profile'>
                          <div
                            className='text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                            {' '}
                            <div className='block h-6 w-6 text-3xl mb-2'>
                              <AiOutlineUser />
                            </div>
                            Profile
                          </div>
                        </Link>}
                        <Link href='/favourites'>
                          <div
                            className='text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                            {' '}
                            <div className='block h-6 w-6 text-3xl mb-2'>
                              <AiOutlineHeart />
                            </div>
                            Favourites
                          </div>
                        </Link>
                        {/* <Link href='/'>
                    <a
                      href='#'
                      className='text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                      {' '}
                      <div className='block h-6 w-6 text-3xl mb-2'>
                        <AiOutlineContacts />
                      </div>
                      Events
                    </a>
                  </Link> */}
                      </div>
                    </div>
            )}
                </Transition>
              </nav>
      </div>
      </div>
      );
};
      export default Header;
