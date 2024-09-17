"use client";
import React, { useState } from "react";
import SearchCode from "@/components/certificate/SearchCode";
import SearchDNI from "@/components/certificate/SearchDNI";
import SearchName from "@/components/certificate/SearchName";
import { BsQrCodeScan } from "react-icons/bs";
import { BsPersonVcard, BsPersonSquare } from "react-icons/bs";
import Image from "next/image";
import Whatsapp from "@/components/whatsapp/Index";

const Certificate: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchType, setSearchType] = useState<string | null>(null);

  const handleButton = (type: string) => {
    setSearchType(type);
    setIsActive(true);
  };

  const handleSearch = (data: string) => {
    console.log(data);
  };

  return (
    <section
      id="/certs"
      className="relative pt-48 pb-20 p-2 items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-no-repeat bg-center ">
        <Image
          src="/image/background_light.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="w-full h-full object-cover dark:hidden"
          priority
        />
        <Image
          src="/image/background_dark.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="w-full h-full object-cover hidden dark:block"
          priority
        />
        F
      </div>

      {/* Main Content */}
      <div className="max-w-screen-lg mx-auto rounded-3xl shadow-2xl text-center p-6 relative backdrop-blur-xl bg-gradient-to-b from-purple-900/80 via-purple-700/60 to-purple-800/80">
        {/* Header */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          <Image
            src={"/image/uni.png"}
            className="w-24 h-24 md:w-48 md:h-48 object-contain dark:hidden"
            width={800}
            height={800}
            alt="logo_seveda_light"
            priority={true}
          />
          <Image
            src={"/image/uni_dark.png"}
            className="w-24 h-24 md:w-48 md:h-48 object-contain hidden dark:block"
            width={800}
            height={800}
            alt="logo_seveda_dark"
            priority={true}
          />
          <Image
            src={"/image/logo_certs.png"}
            className="w-24 h-24 md:w-48 md:h-48 object-contain dark:hidden"
            width={800}
            height={800}
            alt="logo_certs"
            priority={true}
          />
          <Image
            src={"/image/logo_certs_dark.png"}
            className="w-24 h-24 md:w-48 md:h-48 object-contain hidden dark:block"
            width={800}
            height={800}
            alt="logo_certs_dark"
            priority={true}
          />
        </div>

        {/* Certificate Section */}
        <h2 className="text-4xl font-extrabold text-white uppercase mb-6">
          Certificados
        </h2>
        <p className="font-semibold text-white text-lg lg:px-36 mb-6">
          En este módulo podrá realizar la búsqueda de certificados de los
          diferentes eventos ofrecidos por Seveda.
        </p>
        <p className="text-xl font-semibold text-white mb-8">Buscar por:</p>

        {/* Search Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <button
            onClick={() => handleButton("documentNumber")}
            className={`px-6 py-3 font-bold border-2 rounded-lg text-white hover:text-purple-900 hover:bg-gray-200 transition transform hover:scale-105 ${
              searchType === "documentNumber" ? "bg-purple-600" : ""
            }`}
          >
            <BsPersonVcard className="text-xl inline-block mr-2" />
            Buscar por DNI
          </button>
          <button
            onClick={() => handleButton("name")}
            className={`px-6 py-3 font-bold border-2 rounded-lg text-white hover:text-purple-900 hover:bg-gray-200 transition transform hover:scale-105 ${
              searchType === "name" ? "bg-purple-600" : ""
            }`}
          >
            <BsPersonSquare className="text-xl inline-block mr-2" />
            Buscar por nombre
          </button>
          <button
            onClick={() => handleButton("code")}
            className={`px-6 py-3 font-bold border-2 rounded-lg text-white hover:text-purple-900 hover:bg-gray-200 transition transform hover:scale-105 ${
              searchType === "code" ? "bg-purple-600" : ""
            }`}
          >
            <BsQrCodeScan className="text-xl inline-block mr-2" />
            Buscar por código
          </button>
        </div>

        {/* Search Form */}
        {isActive && (
          <div className="mt-8">
            {searchType === "documentNumber" && (
              <SearchDNI onSearchDNI={handleSearch} />
            )}
            {searchType === "name" && (
              <SearchName onSearchName={handleSearch} />
            )}
            {searchType === "code" && (
              <SearchCode onSearchCode={handleSearch} />
            )}
          </div>
        )}
      </div>

      {/* Whatsapp Contact */}
      <Whatsapp />
    </section>
  );
};

export default Certificate;
