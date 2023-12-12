'use client'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
      </Link>
      {/* For Desktop */}
      <ul className='hidden h-full gap-12 lg:flex'>
        {
          NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
              {link.label}
            </Link>
          ))
        }
      </ul>
      <div className='lg:flexCenter hidden'>
        <Button
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>
      {/* For Mobile */}
      <button onClick={() => setToggle(!toggle)}>
        <Image
          src='menu.svg'
          alt='menu'
          width={32}
          height={32}
          className='inline-block cursor-pointer lg:hidden'
        />
      </button>
      {/* {
        toggle && (
          <div
            className='flex flex-col p-3 absolute top-20 right-5'
            style={{
              backdropFilter: 'blur(12px) saturate(167%)',
              WebkitBackdropFilter: 'blur(12px) saturate(167%)',
              backgroundColor: 'rgba(255, 255, 255, 0.24)',
            }}
          >
            {
              NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                  {link.label}
                </Link>
              ))
            }
          </div>
        )
      } */}
    </nav>
  )
}

export default Navbar