import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
      <div className='bg-black py-[23px] px-4'>
          <div className="flex justify-between max-w-[1140px] mx-auto">
              <p className='font-normal text-sm leading-[150%] text-[#8D8D8D]'>Made with <span className='!text-[#8D8D8D]'>❤️</span> for the people of the internet.</p>
              <p className='font-normal text-sm text-[#8D8D8D] '>
                © {currentYear} Dataskate.io, All Rights Reserved
              </p>
          </div>
    </div>
  )
}

export default Footer