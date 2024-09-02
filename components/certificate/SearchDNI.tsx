import React, { useState, FormEvent } from "react";
import { URL } from "@/components/utils/format/tokenConfig";
import axios from "axios";
import { SearchDNIProps, Student } from "@/interface/interface";
import Modal from "../share/Modal";
import "../../style/globals.css";
import { Button, Spinner } from "@nextui-org/react";
import Image from "next/image";

interface StudentCode extends Student {
  hour: string;
  institute: string;
}

const SearchName: React.FC<SearchDNIProps> = ({ onSearchDNI }) => {
  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>("");
  const [searchType, setSearchType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<Student[]>();
  const [closeTable, setCloseTable] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudentData, setSelectedStudentData] =
    useState<StudentCode | null>(null);
  const [openModals, setOpenModals] = useState<boolean[]>(
    Array(selectedStudentData ? 1 : 0).fill(false)
  );

  const openStudentModal = (selectedStudent: StudentCode, index: number) => {
    setSelectedStudentData(selectedStudent);
    const updatedOpenModals = [...openModals];
    updatedOpenModals[index] = true;
    setOpenModals(updatedOpenModals);
  };
  const closeStudentModal = (index: number) => {
    const updatedOpenModals = [...openModals];
    updatedOpenModals[index] = false;
    setOpenModals(updatedOpenModals);
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    /* console.log(event.target.value, 'onChange ejecutado');
    const valuee = event.target.value; */
    setQueryValue(event.target.value);
    setCloseTable(false);
    //setSearchType(valuee.trim() ? queryValue : null);
  };
  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchDNI = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }

    //const validToken = typeof token === "string" ? token: '';
    try {
      const value = queryValue.trim();
      const res = await axios.get(
        `${URL()}/student/dni/${value.trim()}/type/${searchType}`
      );
      console.log(res);
      setStudentData(res.data);
      onSearchDNI(res.data);
      setCloseTable(true);
    } catch (error) {
      console.error("Error: DNI invalido", error);
      openErrorModal();
    } finally {
      setLoading(false);
    }
  };
  const tableRows = [
    {
      imgSrc: "/icons/organizadopor.svg",
      label: "Organizado por:",
      value: selectedStudentData?.institute,
    },
    {
      imgSrc: "/icons/otorgado.svg",
      label: "Otorgado a:",
      value: selectedStudentData?.name,
    },
    {
      imgSrc: "/icons/nom_evento.svg",
      label: "Nombre del evento:",
      value: selectedStudentData?.activityAcademy,
    },
    {
      imgSrc: "/icons/creditos_horas.svg",
      label: "Creditos/Horas:",
      value: selectedStudentData?.hour,
    },
    {
      imgSrc: "/icons/fecha_emision.svg",
      label: "Fecha de emisión:",
      value: selectedStudentData?.date,
    },
  ];

  return (
    <div className="">
      <form onSubmit={searchDNI} className="w-full ">
        <div className="flex flex-row items-center justify-center">
          <div className=" flex-1">
            <input
              type="search"
              id="default-search"
              className=" font-normal text-sm text-gray-900 border-1 border-gray-300 rounded-lg bg-white  focus:border-primaryblue m-0"
              placeholder={`Buscar por DNI ${
                searchType === "documentNumber" ? "DNI" : ""
              }`}
              required
              onClick={toggleIsActive}
              onChange={onChange}
              value={queryValue}
            />
          </div>
          <div className=" ml-2 h-full">
            <Button color="primary" type="submit" className="bg-primaryblue">
              Buscar
            </Button>
          </div>
        </div>
      </form>
      {loading && <Spinner />}
      {closeTable && studentData && (
        <div className="relative overflow-x-auto shadow-xl sm:rounded-xl mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-semibold">
            <thead className="text-xs text-center text-gray-700 uppercase bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Actividad academica
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Accción
                </th>
              </tr>
            </thead>
            <tbody>
              {studentData?.map((student: Student, index: number) => (
                <tr
                  key={index}
                  className="bg-white border-b text-center hover:bg-gray-100"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap w-12"
                  >
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {index + 1}
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.activityAcademy}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.date}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        openStudentModal(student as StudentCode, index)
                      }
                      className="font-medium text-primaryblue dark:text-primaryblue hover:underline"
                    >
                      Ver
                    </button>
                  </td>
                  {selectedStudentData && (
                    <Modal
                      open={openModals[index]}
                      onClose={() => closeStudentModal(index)}
                    >
                      <div className="flex justify-center items-center mb-4 gap-2">
                        <Image
                          src={"/certificate/UNP.png"}
                          alt="ecomas"
                          className="md:w-20 w-16  object-contain mt-2"
                          width={200}
                          height={200}
                          priority={true}
                        />
                        <Image
                          src={"/certificate/LOGO-VERTICAL-COLOR.png"}
                          alt="ecomas"
                          className="block dark:hidden md:w-20  w-16 h-[125px] md:mt-[13px] mt-[11px] object-contain"
                          width={200}
                          height={200}
                          priority={true}
                        />
                        <Image
                          src={"/image/EcomasVert_dark.png"}
                          alt="ecomas"
                          className="hidden dark:block md:w-20  w-16 h-[125px] md:mt-[13px] mt-[11px] object-contain"
                          width={200}
                          height={200}
                          priority={true}
                        />{" "}
                        <Image
                          src={"/certificate/CAL.png"}
                          alt="ecomas"
                          className="md:w-20  w-16 object-contain mt-2"
                          width={200}
                          height={200}
                          priority={true}
                        />
                        <Image
                          src={"/certificate/CIP.png"}
                          alt="ecomas"
                          className="block dark:hidden md:w-20  w-16 object-contain mt-2"
                          width={200}
                          height={200}
                          priority={true}
                        />
                        <Image
                          src={"/image/CIP_dark.png"}
                          alt="ecomas"
                          className="hidden dark:block md:w-20  w-16 object-contain mt-2"
                          width={200}
                          height={200}
                          priority={true}
                        />
                      </div>
                      <div className="max-w-md text-center  rounded-md mx-auto">
                        {tableRows.map((row, index) => (
                          <div key={index} className="mb-4">
                            <div className="inline-flex items-center text-white text-sm p-1 md:w-80 w-72 rounded-lg bg-slate-600 font-semibold">
                              {row.imgSrc && (
                                <Image
                                  src={row.imgSrc}
                                  alt={row.label}
                                  className="flex lg:w-5 lg:h-5 w-5 h-5 object-contain ml-1"
                                  width={200}
                                  height={200}
                                />
                              )}
                              <div className="flex-1 text-center">
                                {row.label}
                              </div>
                            </div>

                            <div className="flex justify-center text-gray-600 dark:text-white mt-3 mb-5 md:text-sm text-xs md:w-[410px] px-[2px] font-semibold">
                              {row.label === "Organizado por:" ? (
                                <span>
                                  {row.value && (
                                    <span>
                                      {row.value
                                        .split(" ")
                                        .map((word, i, arr) => (
                                          <React.Fragment key={i}>
                                            {i !== arr.length - 1 ? (
                                              word + " "
                                            ) : (
                                              <>
                                                <br />
                                                {word}
                                              </>
                                            )}
                                          </React.Fragment>
                                        ))}
                                    </span>
                                  )}
                                </span>
                              ) : (
                                <span>{row.value}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Modal>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modal open={modalOpen} onClose={closeErrorModal}>
        <div className=" p-2 rounded-lg">
          <h2 className="text-md font-bold text-red-500 mb-4">
            DNI incorrecto
          </h2>
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-100">
            El DNI que ingresaste no se encuentra en nuestra base de datos.
          </h3>
        </div>
      </Modal>
    </div>
  );
};

export default SearchName;
