"use client";
import React, { useState, DragEvent } from "react";
import Image from "next/image";
import Header from "./common/Header";

const DataStake: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            uploadFile(file);
        }
    };

    const handleImageClick = () => {
        document.getElementById("fileInput")?.click();
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        if (file) {
            uploadFile(file);
        }
    };

    const uploadFile = (file: File) => {
        setIsLoading(true);
        setSelectedFile(file);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen px-4 relative">
            <Header />
            <Image className="absolute sm:block hidden left-0 top-[13%] pointer-events-none" src="/assets/images/png/data-left-image.png" alt="left-image" width={169.25} height={211.02} />
            <Image className="absolute sm:block hidden right-0 bottom-[13%] pointer-events-none" src="/assets/images/png/data-right-image.png" alt="left-image" width={169.25} height={211.02} />
            <p className="font-semibold text-2xl text-black text-center pt-9">Read & process your files online</p>
            <div className="shadow-xl rounded-lg p-4 max-w-[786px] mx-auto mt-8">
                <div
                    className={`border-dotted border border-red-600 rounded-lg transition-all ${isDragging ? 'bg-gray-100' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="py-24 px-6 text-center">
                        {isLoading ? (
                            <div className="animate-spin h-10 w-10 border-4 border-red-600 border-t-transparent rounded-full mx-auto"></div>
                        ) : (
                            <>
                                <Image className="mx-auto" src="/assets/images/svg/image-icon.svg" alt="image-icon" width={24} height={24} />
                                <p className="font-normal text-base leading-6 pt-4 pb-1">Paste or drag and drop files here</p>
                                <p className="font-normal text-sm leading-6 text-gray-500 pb-4">WAR, ZIP or EAR, file size no more than 10MB</p>
                                <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
                                <button onClick={handleImageClick}>
                                    <Image className="mx-auto cursor-pointer" src="/assets/images/svg/image-plus-icon.svg" alt="upload-icon" width={32} height={32} />
                                </button>
                                {selectedFile && <p className="mt-2 text-sm text-gray-700">Selected File: {selectedFile.name}</p>}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex max-md:flex-col justify-between max-w-[786px] mx-auto pt-12 pb-16">
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
    );
};

export default DataStake;
