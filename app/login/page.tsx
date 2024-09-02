"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

type ResErrors = {
  message: string;
  errorContent: string;
};

type Auth = {
  email: string;
  password: string;
  role: boolean;
  token: string;
};

const dataForm = {
  email: "",
  password: "",
  role: true,
  token: "",
};

const Login: React.FC = () => {
  const [resErrors, setResErrors] = useState<ResErrors | null>(null);
  const [form, setForm] = useState<Auth>(dataForm);
  const { theme } = useTheme();
  const imageSrc =
    theme === "dark" ? "/image/ECOMAS-HORIZONTAL.png" : "/image/ecomas.png";

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    const { value } = target;
    setForm({ ...form, [textField]: value });
  };

  const saveToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const getToken = (): string | null => {
    return localStorage.getItem("token");
  };

  const redirectIfLoggedIn = () => {
    const token = getToken();
    if (token) {
      window.location.href = "student"; // Redirige a la siguiente página
    }
  };

  useEffect(() => {
    redirectIfLoggedIn(); // Verifica si el usuario ya está logueado al cargar la página
  }, []); // Se ejecuta solo una vez al cargar el componente

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "https://backend.ecomas.pe/api/v1/user/login",
        form
      );
      if (response.data.token) {
        const token = response.data.token;
        saveToken(token);
        window.location.href = "student";
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;

        if (data.error === "invalid_password") {
          setResErrors({
            message: "Credenciales incorrectas",
            errorContent: data.errorContent,
          });
        } else if (data.error === "user_not_found") {
          setResErrors({
            message: "Credenciales incorrectas",
            errorContent: data.errorContent,
          });
        } else {
          setResErrors({
            message: "Credenciales incorrectas",
            errorContent: "",
          });
        }
      } else {
        setResErrors({ message: "Error en el servidor", errorContent: "" });
      }

      // Restablecer los errores después de 3 segundos
      setTimeout(() => {
        setResErrors(null);
      }, 3000);
    }
  };

  return (
    <section
      className=""
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: "url(/image/bg_test7.jpg)",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="p-10  items-center">
        <div className="text-gray-600">
          <div className="rounded-3xl bg-white dark:bg-blackblue">
            <div className="md:px-0">
              <div className="p-10 md:p-8">
                <div className="text-center">
                  <Image
                    className="mx-auto mb-6"
                    src={imageSrc}
                    alt="logo"
                    width={300}
                    height={300}
                  />
                </div>
                {resErrors?.message && (
                  <p className="text-error text-medium font-bold text-[#c30e4d] text-center">
                    {resErrors.message}
                  </p>
                )}

                <form
                  className="w-full max-w-sm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  <div className="md:flex md:items-center mb-6 items-center justify-center">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Correo electrónico:
                      </label>
                    </div>

                    <div className="md:w-2/3">
                      <input
                        onChange={(event) => handleFormData(event, "email")}
                        className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primaryblue"
                        id="username"
                        type="email"
                        placeholder="Correo Electrónico"
                      ></input>
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Contraseña:
                      </label>
                    </div>
                    <div className="md:w-2/3 relative">
                      <input
                        type={isVisible ? "text" : "password"}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 pr-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primaryblue"
                        id="inline-password"
                        autoComplete="on"
                        placeholder="*******"
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleFormData(event, "password")}
                      />
                      <button
                        className="absolute right-0 top-0 mt-2 mr-4 focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <Button
                      className="w-full bg-primaryblue"
                      color="primary"
                      value="login"
                      type="submit"
                      onClick={() => onSubmit()}
                    >
                      Iniciar sesión
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
