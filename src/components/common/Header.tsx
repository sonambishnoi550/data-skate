import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
      <div>
          <div className="flex max-w-[1140px] mx-auto py-4 px-4">
          <Link href="#" className='pr-[10px] flex items-center'><Image src="/assets/images/png/logo.png" alt='logo' width={144.39} height={33.62} /></Link>
          <div className="flex justify-between w-full">
              <div className='flex justify-center items-center gap-[10px]'>
                  <p className='border-l w-0.5 h-[19px]'></p>
                  <p className='font-medium text-base text-black'>TMM Accelerator</p>
              </div>
              <div className="flex items-center">
                  <Image className='h-10' src="/assets/images/png/jhon.png" alt='jhon' width={40} height={40} />
                  <div className='mx-2'>
                      <p className='font-medium text-base text-black'>Jhon doe</p>
                      <p className='font-normal text-sm text-[#4D4D4D]'>Admin</p>
                  </div>
                  <Image className='cursor-pointer' src="/assets/images/svg/name-arrow.svg" alt='arrow' width={12} height={6} />
              </div>
          </div>
      </div></div>
  )
}

export default Header