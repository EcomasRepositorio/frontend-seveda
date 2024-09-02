"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

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
    <section className=" bg-fixed " style={{}}>
      <div
        className=""
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: "url(/image/bg_test7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-8  mx-auto max-w-screen-xl lg:py-10">
          <div className="" style={{ position: "relative", width: "100%" }}>
            <div
              className="bg-white dark:bg-blackblue rounded-lg p-8 md:p-12 mb-50 mx-2"
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl  md:mr-0 md:p-4  ">
                <div className="md:mr-12">
                  <div className="flex flex-col">
                    <h2 className=" mb-4 text-2xl font-bold text-primaryblue dark:text-blue-100 md:mb-6 lg:text-4xl">
                      Vertifica tu certificado
                    </h2>
                    <p className="text-blackblue2 dark:text-gray-300 md:text-xl mb-4 text-justify ">
                      Verifica la autenticidad de tu certificado ingresando tu
                      DNI, nombres o código de certificación proporcionado al
                      obtenerlo. Nos aseguramos de proteger tu privacidad y la
                      confidencialidad de tus datos.
                    </p>

                    <Tabs
                      aria-label="Options"
                      color="primary"
                      classNames={{
                        tabList: " w-full dark:bg-blackblue2 bg-blue-100",
                        cursor: "bg-primaryblue",
                        tab: "",
                        tabContent:
                          "group-data-[selected=true]:text-white dark:text-white ",
                      }}
                    >
                      <Tab key="dni" title="Buscar por DNI" className="">
                        <Card>
                          <CardBody className="bg-blue-100 dark:bg-blackblue2">
                            <div>
                              <SearchDNI onSearchDNI={handleSearch} />
                            </div>
                          </CardBody>
                        </Card>
                      </Tab>
                      <Tab key="name" title="Buscar por Código">
                        <Card>
                          <CardBody className="bg-blue-100 dark:bg-blackblue2">
                            <div>
                              <SearchCode onSearchCode={handleSearch} />
                            </div>
                          </CardBody>
                        </Card>
                      </Tab>
                      <Tab key="code" title="Buscar por nombres">
                        <Card>
                          <CardBody className="bg-blue-100 dark:bg-blackblue2">
                            <div>
                              <SearchName onSearchName={handleSearch} />
                            </div>
                          </CardBody>
                        </Card>
                      </Tab>
                    </Tabs>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 md:mt-0 md:w-full  md:grid-cols-2 md:grid-rows-2 md:gap-y-8  justify-items-center md:items-center ">
                  <div>
                    <Image
                      src="/certificate/CAL.png"
                      alt="ecomas"
                      width={150}
                      height={150}
                      className=""
                    />
                  </div>
                  <div>
                    <Image
                      src="/certificate/CIP.png"
                      alt="ecomas"
                      width={150}
                      height={150}
                      className="block dark:hidden"
                    />
                    <Image
                      src="/image/CIP_dark.png"
                      alt="ecomas"
                      width={150}
                      height={150}
                      className="hidden dark:block"
                    />
                  </div>
                  <div>
                    <Image
                      src="/certificate/UNP.png"
                      alt="ecomas"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div>
                    <Image
                      src="/image/LOGO-VERTICAL-COLOR.png"
                      alt="ecomas"
                      width={150}
                      height={150}
                      className="block dark:hidden"
                    />
                    <Image
                      src="/image/EcomasVert_dark.png"
                      alt="ecomas"
                      width={150}
                      height={150}
                      className="hidden dark:block"
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
