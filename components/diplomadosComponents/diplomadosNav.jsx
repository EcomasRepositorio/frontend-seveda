"use client";
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import DiploCivil from "./diplomadosCivil";
import DiploAmbiental from "./diplomadosAmbient";
import DiploAlimentarias from "./diplomadosAlimentarias";
import DiploAgronoma from "./diplomadosAgronoma";
import DiploDerecho from "./diplomadosDerecho";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Llama a la función una vez al montar el componente para establecer el estado inicial

    window.addEventListener("resize", handleResize); // Agrega un event listener para detectar cambios en el tamaño de la ventana

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="flex flex-col px-4">
      <div className="flex w-full flex-col">
        <Tabs
          disabledKeys={["anothers"]}
          color="primary"
          aria-label="Options"
          className="w-full md:max-w-max "
          placement={isMobile ? "top" : "start"}
          classNames={{
            tabList: " w-full dark:bg-blackblue2 bg-blue-50",
            cursor: "bg-primaryblue",
            tab: "",
            tabContent:
              "group-data-[selected=true]:text-white dark:text-white ",
          }}
        >
          <Tab key="civil" title="Ing. Civil" className="text-primaryblue">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploCivil />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="ambient" title="Ing. Ambiental">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploAmbiental />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="agrono" title="Ing. Agrónoma">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploAgronoma />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="alimentaria" title="Ingeniería en alimentos">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploAlimentarias />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="derecho" title="Derecho">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploDerecho />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="anothers" title="Otras Profesiones">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50"></CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
