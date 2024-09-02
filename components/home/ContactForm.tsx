import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Button } from "@nextui-org/react";
emailjs.init('UgIciLgmKy6Akg6-Z');


const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    setSending(true);

    const serviceID = 'service_94bs7oi';
    const templateID = 'template_sryp9ce';

    const form = formRef.current;
    if (form) {
      emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
          setSending(false);
          setShowAlert(true);

          // Después de 3 segundos, ocultar la alerta
          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        })
        .catch((err) => {
          setSending(false);
          alert(JSON.stringify(err));
        });
    }
  };


  return (
    <section id='contacto'>
      <div className="relative z-10 text-gray-600 sm:px-4 md:px-8" style={{ backgroundAttachment: "fixed", backgroundImage: "url(/image/contacto.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black opacity-50">
        </div>
        <div className="relative z-10  text-gray-600 sm:px-4 md:px-8 mt-10" >
          <div className="max-w-lg space-y-1 px-4 sm:mx-auto sm:text-center sm:px-0 ">
            <h2 className="text-white dark:text-white text-4xl font-semibold sm:text-5xl pt-10">
              ¡Nosotros te llamamos!
            </h2>
            <p className="text-white dark:text-white">
              ¡Nos encantaría saber de usted! Por favor complete el formulario a continuación.
            </p>
          </div>
          <div className="mt-2 mx-auto px-4 p-8  sm:max-w-lg sm:px-8 sm:rounded-xl">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-2 "
            >
              <div>
                <label className="font-medium text-white dark:text-white">
                  Nombres completos
                </label>
                <input
                  {...register('nombres', { required: true })}
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-white outline-none border-2 focus:border-primaryblue shadow-sm rounded-lg"
                  placeholder="Nombres y apellidos"
                />
              </div>
              <div>
                <label className="font-medium text-white dark:text-white">
                  Correo electrónico
                </label>
                <input
                  {...register('correo', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                  type="email"
                  required
                  className="w-full mb-2 mt-2 px-3 py-2 text-gray-500 bg-white outline-none border-2 focus:border-primaryblue shadow-sm rounded-lg"
                  placeholder="Ej: ejemplo@gmail.com"
                />
                {errors.correo && <span className="p-2  rounded-xl bg-white text-sm text-red-500">Por favor, introduce un correo electrónico válido</span>}
              </div>
              <div>
                <label className="font-medium text-white dark:text-white">
                  Número de teléfono
                </label>
                <input
                  {...register('celular', { required: true, pattern: /^\d{9}$/ })}
                  type="number"
                  placeholder="999 999 999"
                  required
                  className="w-full my-2 px-3 py-2 text-gray-500 bg-white outline-none border-2 focus:border-primaryblue shadow-sm rounded-lg"
                />
                {errors.celular && <span className="p-2 mt-2 rounded-xl bg-white text-sm text-red-500">Por favor, introduce un número de teléfono válido (9 cifras)</span>}
              </div>
              <div>
                <label className="font-medium text-white dark:text-white">
                  Mensaje (Opcional)
                </label>
                <textarea  {...register('mensaje')} placeholder="Escribe tu mensaje aquí..." className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-white outline-none border-2 focus:border-primaryblue shadow-sm rounded-lg"></textarea>
              </div>
              <Button type='submit' color="primary" className="w-full px-4 py-2 bg-blue-100 dark:bg-blackblue2 dark:text-white dark:border-blackblue border-blue-200 border text-primaryblue hover:scale-105 hover:bg-blue-200" >
                {sending ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
          </div>
          {/* Alerta de éxito */}
          {showAlert && (
            <div id="alert-border-3" className="flex items-center p-4  text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
              <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div className="ms-3 text-normal font-medium">
                ¡Correo enviado con éxito!
              </div>
              <button type="button" className="-mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" onClick={() => setShowAlert(false)} aria-label="Cerrar">
                <span className="sr-only">Cerrar</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
