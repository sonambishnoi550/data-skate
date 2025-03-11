import React from 'react'
import Header from './common/Header'
import Image from 'next/image'
const Details = () => {
    return (
        <div className='bg-[#F6F6F6]'>
            <Header />
            <div className="container max-w-[1140px] mx-auto px-4">
                <div className="flex max-lg:flex-wrap justify-between">
                    <div className='bg-white py-[19px] px-4 flex items-center gap-4 max-w-[558px] rounded-[8px] max-lg:mb-4'>
                        <Image src="/assets/images/svg/code.svg" alt='code' width={60} height={60} />
                        <p className='font-medium md:text-xl text-base max-w-[365px] xl:mr-36'>Complexity of the code</p>
                        <button className='text-[#ED1C24] font-medium text-sm border border-[#ED1C24] rounded-[49px] bg-[#FFF1F2] py-2 px-4'>HIGH</button>
                    </div>
                    <div className='bg-white py-[19px] px-4 flex items-center gap-4 max-w-[267px] rounded-[8px] max-lg:mb-4'>
                        <Image src="/assets/images/svg/machines.svg" alt='code' width={60} height={60} />
                        <div>
                            <p className='text-black w-[13px] bg-black h-1'></p>
                            <p className='font-normal md:text-xl text-base max-w-[365px] xl:mr-16 whitespace-nowrap mt-2'>No of Machines</p>
                        </div>
                    </div>
                    <div className='bg-white py-[19px] px-4 flex items-center gap-4 max-w-[267px] rounded-[8px] max-lg:mb-4'>
                        <Image src="/assets/images/svg/pars.svg" alt='code' width={60} height={60} />
                        <div className=''>
                            <p className='text-black w-[13px] bg-black h-1'></p>
                            <p className='font-normal md:text-xl text-base max-w-[365px] xl:mr-16 whitespace-nowrap flex mt-2'>No of Pars</p>
                        </div>
                    </div>
                </div>
                <h4 className='font-semibold text-2xl pt-[31.93px] pb-[24.07px]'>Detailed metrices</h4>
                <div className="flex max-lg:flex-wrap gap-6 items-center pb-[46px] lg:justify-between justify-center">
                    <div className='xl:!w-[558px] lg:w-[420px] w-full'>
                        <div className="flex bg-white py-3 px-4 mb-4 rounded-[8px] items-center gap-4">
                            <p className='font-medium md:text-2xl text-lg bg-[#FFF1F2] rounded-full size-10 flex items-center justify-center'>11</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-normal text-sm  whitespace-nowrap'>No of starter processes</p>
                                <Image src="/assets/images/svg/detail-arrow.svg" alt='detail-arrow' width={12} height={6} />
                            </div>
                        </div>
                        <div className="flex bg-white py-3 px-4 mb-4 rounded-[8px] items-center gap-4">
                            <p className='font-medium md:text-2xl text-lg bg-[#FFF1F2] size-10 flex items-center justify-center rounded-full'>2</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-normal text-sm'>No of Connections</p>
                                <Image src="/assets/images/svg/detail-arrow.svg" alt='detail-arrow' width={12} height={6} />
                            </div>
                        </div>
                        <div className="flex bg-white py-3 px-4 mb-4 rounded-[8px] items-center gap-4">
                            <p className='font-medium md:text-2xl text-lg bg-[#FFF1F2] size-10 flex items-center justify-center rounded-full'>11</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-normal text-sm'>No of process</p>
                                <Image src="/assets/images/svg/detail-arrow.svg" alt='detail-arrow' width={12} height={6} />
                            </div>
                        </div>
                        <div className="flex bg-white py-3 px-4 mb-4 rounded-[8px] items-center gap-4">
                            <p className='font-medium md:text-2xl text-lg bg-[#FFF1F2] size-10 flex items-center justify-center rounded-full'>27</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-normal text-sm'>No of Activities</p>
                                <Image src="/assets/images/svg/detail-arrow.svg" alt='detail-arrow' width={12} height={6} />
                            </div>
                        </div>
                        <div className="flex bg-white py-3 px-4 mb-4 rounded-[8px] items-center gap-4">
                            <p className='font-medium md:text-2xl text-lg bg-[#FFF1F2] size-10 flex items-center justify-center rounded-full'>5</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-normal text-sm '>No of Variables</p>
                                <Image src="/assets/images/svg/detail-arrow.svg" alt='detail-arrow' width={12} height={6} />
                            </div>
                        </div>
                        <div className="flex bg-white py-3 px-4 rounded-[8px] items-center gap-4">
                            <p className='font-medium md:text-2xl text-lg bg-[#FFF1F2] size-10 flex items-center justify-center rounded-full'>2</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-normal text-sm '>No of Functions</p>
                                <Image src="/assets/images/svg/detail-arrow.svg" alt='detail-arrow' width={12} height={6} />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-[8px]'>
                        <Image className='pointer-events-none' src="/assets/images/png/circle.png" alt='circle' width={558} height={464} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details