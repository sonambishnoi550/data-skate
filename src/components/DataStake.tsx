"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { AiOutlineFile } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
const DataStake = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles") || "[]");
        if (storedFiles.length > 0) {
            setFiles(storedFiles.map((fileName: string) => new File([], fileName)));
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "application/zip": [".zip"],
            "application/java-archive": [".war", ".ear"],
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            "image/webp": [".webp"]
        },
        maxSize: 10 * 1024 * 1024,
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length === 0) return;

            setFiles(acceptedFiles);
            setUploading(true);
            setProgress(0);

            const fileNames = acceptedFiles.map(file => file.name);
            localStorage.setItem("uploadedFiles", JSON.stringify(fileNames));
            localStorage.setItem("uploadedFileName", fileNames[0]);
            const interval = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            router.push(`/read-process/file-data`);
                        }, 1000);
                    }
                    return Math.min(oldProgress + 20, 100);
                });
            }, 500);
        },
    });

    return (
        <div className="relative min-h-screen">
            <Header />
            <Image className="absolute sm:block hidden left-0 top-[13%] pointer-events-none" src="/assets/images/png/data-left-image.png" alt="left-image" width={169.25} height={211.02} />
            <Image className="absolute sm:block hidden right-0 bottom-[26%] pointer-events-none" src="/assets/images/png/data-right-image.png" alt="left-image" width={169.25} height={211.02} />
            <div className="flex flex-col items-center mb-[69px] px-4">
                <h2 className="md:text-[32px] text-2xl font-semibold text-center mb-[34px] mt-9 ff-syne">
                    Read & process your files online
                </h2>
                <div className="bg-white p-4 max-w-[786px] w-full rounded-xl shadow-md">
                    {!uploading ? (
                        <div
                            {...getRootProps()}
                            className=" w-full mx-auto h-[326px] p-4 border-dashed border border-[#ED1C24] rounded-lg flex flex-col items-center justify-center bg-white cursor-pointer"
                        >
                            <input {...getInputProps()} />
                            <Image className="mx-auto" src="/assets/images/svg/image-icon.svg" alt="image-icon" width={24} height={24} />
                            <p className="text-black text-center pt-4 pb-1">Paste or drag and drop files here</p>
                            <p className="text-xs text-[#9E9E9E] text-center">
                                Supports ZIP, WAR, EAR, and Images (Max 10MB)
                            </p>
                            <button className="mt-3 bg-[#ED1C24] text-white size-[32px] rounded-[4px]">
                                <Image className="mx-auto cursor-pointer" src="/assets/images/svg/image-plus-icon.svg" alt="upload-icon" width={13.33} height={13.33} />
                            </button>
                        </div>
                    ) : (
                        <div className="w-full mx-auto h-[326px] border p-4 border-dashed border-red-400 rounded-lg flex flex-col items-center justify-center bg-white">
                            <div className="flex flex-col gap-3 w-full">
                                {files.map((file, index) => (
                                    <div key={index} className="flex justify-between gap-3 w-full p-2">
                                        <div className="flex items-center gap-2">
                                            {file.type.startsWith("image/") ? (
                                                <Image
                                                    src={URL.createObjectURL(file)}
                                                    alt="preview"
                                                    width={50}
                                                    height={50}
                                                    className="rounded-lg"
                                                />
                                            ) : (
                                                <AiOutlineFile className="text-2xl text-gray-700" />
                                            )}
                                            <p className="text-gray-700 font-medium text-base ff-syne">
                                                Uploading <span className="font-bold">{file.name}</span>
                                            </p>
                                        </div>
                                        <p className="text-base text-black mt-2 font-medium">{progress}%</p>
                                    </div>
                                ))}
                                <div className="bg-gray-200 h-[3px] w-full rounded-full">
                                    <div className="bg-red-500 h-[3px] rounded-full" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex max-md:flex-col !justify-between !max-w-[786px] w-full mx-auto pt-12 pb-16">
                    <p className="text-sm font-normal md:max-w-[355px] max-w-none w-full max-md:pb-5">Our accelerator allows you to upload, read, and process multiple file types (e.g., Python, JAR, ZIP), extracting key data like classes, methods, and structure for easy review.</p>
                    <div>
                        <div className="flex gap-2 mb-2">
                            <Image src="/assets/images/svg/right.svg" alt="right" width={18} height={18} />
                            <p className="font-normal text-sm">Works on any device—without installation</p>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <Image src="/assets/images/svg/right.svg" alt="right" width={18} height={18} />
                            <p className="font-normal text-sm">Supports more than 10 filetypes</p>
                        </div>
                        <div className="flex gap-2">
                            <Image src="/assets/images/svg/right.svg" alt="right" width={18} height={18} />
                            <p className="font-normal text-sm">Start reading now—no registration needed</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DataStake;