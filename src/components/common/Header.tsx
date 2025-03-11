"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [userName, setUserName] = useState<{ firstName: string; lastName: string }>({ firstName: "", lastName: "" });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("userData");
            if (storedUser) {
                setUserName(JSON.parse(storedUser));
            }
        }
    }, []);
    return (
        <div className='flex justify-between items-center py-5'>
            <div className="container max-w-[1180px] mx-auto px-4">
                <div className="flex max-sm:flex-col max-sm:justify-center justify-between items-center ">
                    <Link href='/'>
                        <Image src="/assets/images/png/logo.png" alt='logo' width={296} height={33} />
                    </Link>
                    <div className='flex items-center gap-2 max-sm:mt-5'>
                        <Image src="/assets/images/png/jhon.png" alt='jhon' width={40} height={40} className='rounded-full' />
                        <div className='flex flex-col'>
                            <h4 className="text-base font-semibold ff-syne">{userName.firstName || "Jhon doe"} {userName.lastName}</h4>                            <p className='text-sm text-[#4D4D4D]'>Admin</p>
                        </div>
                        <Image src="/assets/images/svg/name-arrow.svg" alt='arrow-down' width={12} height={6} className='ml-2' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header