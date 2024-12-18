"use client";
import Curso from "./diplomadosAccordion";

const DiploAgronoma = () => {
  // Array de objetos que contienen los datos de cada curso
  const cursosData = [
    {
      area: "",
      titulo: "SISTEMAS  DE RIEGO TECNIFICADO",
      imagen: "/graduate/SISTEMASDERIEGOTECNIFICADO.png",
      fechaInicio: "Proximamente",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Gerentes de proyectos, residentes y supervisores de obras. Ingenieros agrícolas, agrónomos, civiles, hidráulicos y todos los profesionales que manejen proyectos y ejecución de obras con riego tecnificado. Bachilleres y estudiantes universitarios de los últimos ciclos de ingeniería agrícola, agronomía, civil, hidráulica, forestal.",
      modulos: [
        "Importancia del suelo en la agricultura.",
        "Hidráulica de tuberías.",
        "Descarga de data y parámetros geomorfológicos de la cuenca.",
        "Calidad del agua para riego.",
        "Oferta y demanda hídrica en cultivos.",
        "Sistemas de riego tecnificado por aspersión.",
        "Sistemas de riego tecnificado por goteo.",
        "Fertiirrigación.",
        "Análisis de suelo, agua y foliar.",
      ],
    },
    {
      area: "",
      titulo: "RIEGO Y FERTIRRIEGO",
      imagen: "/graduate/SISTEMASDERIEGOTECNIFICADO.png",
      fechaInicio: "Proximamente",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Gerentes de proyectos, residentes y supervisores de obras. Ingenieros agrícolas, agrónomos, civiles, hidráulicos y todos los profesionales que manejen proyectos y ejecución de obras con riego tecnificado. Bachilleres y estudiantes universitarios y técnicos de los últimos ciclos de ingeniería agrícola, agronomía, civil, hidráulica, forestal y carreras afines.",
      modulos: [
        '-'
        /*
        "Riego tecnificado por aspersión",
        "Riego tecnificado por goteo",
        "Fertirrigación",
        "Fertirriego de cultivos y monitoreo",
        "Producción de cultivos sin suelo",
        "Mantenimiento del sistema de riego",
        "Interpretación y análisis de suelos",
        "Calidad de agua para riego",
        "Nutrición vegetal y principios de fertirriego",*/
      ],
    },
    // Puedes agregar más cursos aquí si es necesario
  ];

  return (
    <div>
      {cursosData.map((curso, index) => (
        <Curso key={index} curso={curso} />
      ))}
    </div>
  );
};

export default DiploAgronoma;
