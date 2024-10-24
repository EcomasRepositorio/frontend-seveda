"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import "./Style.css";

const SearchCode = dynamic(() => import("@/components/certificate/SearchCode"));
const SearchDNI = dynamic(() => import("@/components/certificate/SearchDNI"));
const SearchName = dynamic(() => import("@/components/certificate/SearchName"));

interface Props {
  // Define any props if needed
}

const TestingPage: React.FC<Props> = () => {
  const handleSearch = (data: any) => {
    console.log(data);
  };

  return (
    <section className=" bg-fixed  " style={{}}>
      <div className="relative">
        {/* Imagen para modo Light */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed dark:hidden"
          style={{
            backgroundImage: "url(/image/light02.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Imagen para modo Dark */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed hidden dark:block"
          style={{
            backgroundImage: "url(/image/blue_oficial.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative py-8 mx-auto max-w-screen-xl lg:py-10 ">
          <div className="" style={{ position: "relative", width: "100%" }}>
            <div
              className=" bg-white/20 dark:bg-transparent border border-white/20 rounded-lg p-8 md:p-12 mx-2"
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl md:mr-0 md:p-4">
                <div className="md:mr-12">
                  <div className="flex flex-col">
                    <h2 className="mb-4 text-2xl font-extrabold text-center text-white md:mb-6 lg:text-4xl">
                      VERIFICA TU CERTIFICADO
                    </h2>
                    <p className="text-white font-light text-center md:text-xl mb-8">
                      Verifica la autenticidad de tu certificado ingresando tu
                      DNI, nombres o código de certificación proporcionado al
                      obtenerlo. Nos aseguramos de proteger tu privacidad y la
                      confidencialidad de tus datos.
                    </p>

                    <Tabs
                      aria-label="Options"
                      color="primary"
                      classNames={{
                        tabList:
                          "w-full flex flex-col md:flex-row bg-transparent rounded-md border border-gray-300/40",
                        cursor:
                          "bg-transparent rounded-md border border-gray-50/50 text-gray-100",
                        tab: "py-2 px-4 rounded-t-lg text-gray-100",
                        tabContent:
                          "group-data-[selected=true]:text-gray-100 text-g-100 ",
                      }}
                    >
                      <Tab key="dni" title="Buscar por DNI" className="">
                        <div className="">
                          <div className="bg-transparent">
                            <div className="">
                              <SearchDNI onSearchDNI={handleSearch} />
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab key="name" title="Buscar por Código">
                        <div>
                          <div className="bg-transparent">
                            <div>
                              <SearchCode onSearchCode={handleSearch} />
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab key="code" title="Buscar por nombres">
                        <div>
                          <div className="bg-transparent dark:bg-transparent">
                            <div>
                              <SearchName onSearchName={handleSearch} />
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 md:mt-0 md:w-full md:grid-rows-2 md:gap-y-8 justify-items-center md:items-center">
                  <div className="row-span-2">
                    <Image
                      src="/image/logo_certs.png"
                      alt="seveda"
                      width={130}
                      height={130}
                      className=""
                    />
                  </div>

                  <div className="self-center">
                    <Image
                      src="/image/unp.png"
                      alt="seveda"
                      width={140}
                      height={140}
                    />
                  </div>
                  <div className="row-span-2">
                    <Image
                      src="/image/funde.png"
                      alt="seveda"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingPage;
