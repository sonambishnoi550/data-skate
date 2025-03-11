"use client";
import React from 'react';
import { useSearchParams, useRouter } from "next/navigation";
import Header from './common/Header';
import { useEffect, useState } from "react";
import Image from 'next/image';
import Footer from './common/Footer';
import {MERTICES_LIST } from '@/utils/helper';

const Details = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        const storedFileName = localStorage.getItem("uploadedFileName");
        if (storedFileName) {
            setFileName(storedFileName);
        }
    }, []);

    const metricCount = searchParams.get("metric") || "";

    const handleMetricClick = (count: number, title: string) => {
        const params = new URLSearchParams(searchParams.toString());

        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");

        params.set("metric", count.toString());
        params.set("title", formattedTitle);

        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className='bg-[#F6F6F6]'>
            <Header />
            <div className="container max-w-[1180px] mx-auto px-4">
                <h2 className="text-2xl font-semibold pb-[34px] lg:text-left text-center">
                    {fileName ? fileName : "No file uploaded"}
                </h2>
                <div className="flex max-lg:flex-wrap justify-between max-md:justify-center">
                    <div className='bg-white py-[19px] px-4 flex items-center gap-4 max-w-[558px] rounded-[8px] max-lg:mb-4'>
                        <Image src="/assets/images/svg/code.svg" alt='code' width={60} height={60} />
                        <p className='font-medium md:text-xl text-base max-w-[365px] xl:mr-36 ff-syne'>Complexity of the code</p>
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
                <h4 className='font-semibold text-2xl pt-[31.93px] pb-[24.07px] md:text-left text-center ff-syne'>Detailed metrices</h4>
                <div className="flex max-lg:flex-wrap xl:gap-6 items-center pb-[46px] lg:justify-between justify-center">
                    <div className="xl:!w-[558px] lg:w-[420px] w-full">
                        {MERTICES_LIST.map((item, index) => (
                            <div
                                key={index}
                                className="flex bg-white py-3 px-4 mb-4 rounded-[8px] items-center gap-4 max-w-[558px] max-md:mx-auto w-full cursor-pointer hover:shadow-xl transition-all duration-700"
                                onClick={() => handleMetricClick(item.count, item.title)}
                            >
                                <p className="font-medium md:text-2xl ff-syne text-lg bg-[#FFF1F2] size-10 flex items-center justify-center rounded-full">
                                    {item.count}
                                </p>
                                <div className="flex justify-between w-full">
                                    <p className="font-normal text-sm whitespace-nowrap">{item.title}</p>
                                    <Image src="/assets/images/svg/detail-arrow.svg" alt="detail-arrow" width={12} height={6} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='bg-white rounded-[8px]'>
                        <Image className='pointer-events-none' src="/assets/images/png/circle.png" alt='circle' width={558} height={464} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Details;