"use client";
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'
import { BiWorld } from "react-icons/bi";
import { HiIdentification } from "react-icons/hi2";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { BsFillHouseUpFill, BsBank2, BsFillEnvelopeAtFill, BsBuildingsFill, BsFillPersonBadgeFill, BsFillTelephoneFill } from "react-icons/bs";
import Image from 'next/image';
import Whatsapp from '@/components/whatsapp/Index';

const Book = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [sending, setSending] = useState(false);

  const [reclamoChecked, setReclamoChecked] = useState(false);
  const [sugerenciaChecked, setSugerenciaChecked] = useState(false);

  const handleReclamoChange = () => {
    setReclamoChecked(!reclamoChecked);
    setSugerenciaChecked(false);
  };

  const handleSugerenciaChange = () => {
    setSugerenciaChecked(!sugerenciaChecked);
    setReclamoChecked(false);
  };

  const refForm = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault();
    console.log(data);
    setSending(true);
    const serviceID = "service_8dt0m0j";
    const templateID = "template_rgpxuhc";
    const apiKey = "fuFabeBauLKR6c-V7";
    if (refForm.current) {
      try {
        await emailjs.sendForm(serviceID, templateID, refForm.current, apiKey);
        alert('¡Mensaje Enviado!');
      } catch (err) {
        alert(JSON.stringify(err));
      } finally {
        setSending(false);
      }
    }
  }

  const validateCheckbox = () => {
    if (!reclamoChecked && !sugerenciaChecked) {
      return "Selecciona al menos una opción";
    }
    return true;
  };

  return (
    <section className='mt-'>
      <div className='max-w-screen-lg mx-auto'>
        <Image
          src="/logo/logo-navbar.png"
          alt='logo_rizo'
          width={800}
          height={800}
          className='flex justify-center mx-auto mb-10 pt-28 p-2'
          priority={true}/>

      <div className='p-2'>
        <h1 className='uppercase text-customPurple300 text-center md:text-3xl text-2xl font-extrabold'>Hoja de Reclamación</h1>
        <p className='text-center mb-2 text-customOrange font-semibold'>Corporación Rizo</p>
        <h2 className='bg-customOrange p-3 text-lg font-semibold text-gray-50 rounded-xl'>Identificación del consumidor</h2>
      </div>
    <form ref={refForm} onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>
        <div className='text-gray-500 md:mt-4'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Apellido paterno:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <FaUserPlus />
            </div>
          <input
            type="text" {...register('lastName', { required: true })}
            id='apellidoPaterno'
            name='lastName'
            //autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
          </div>
          </div>

          <div className='text-gray-500 md:mt-4'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Apellido materno:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <FaUserPlus />
            </div>
          <input
            type="text" {...register('firstName', { required: true })}
            id='apellidoMaterno'
            name='firstName'
            //autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Nombres:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BsFillPersonBadgeFill />
            </div>
          <input
            type="text" {...register('name', { required: true })}
            id='nombres'
            name='name'
            //autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
          {errors.nombres && <p>El campo nombre es obligatorio</p>}
          {errors.nombres && <p>El campo nombre debe contener menos de 20 caracteres</p>}
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Teléfono:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BsFillTelephoneFill />
            </div>
          <input
            type="text" {...register('phone', { required: true })}
            id='telefono'
            name='phone'
            //autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Tipo de documento:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <PiIdentificationBadgeFill />
            </div>
          <select {...register('typeDocument', { required: true })} name='typeDocument'
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5">
            <option value="dni">DNI</option>
            <option value="ce">Carnet de extranjeria</option>
            <option value="pass">Pasaporte</option>
          </select>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              N° de documento:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <HiIdentification />
            </div>
          <input
            type="text" {...register('numberDocument', { required: true })}
            id='numeroDocumentoInput'
            name='numberDocument'
            //autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Departamento:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <SiHomeassistantcommunitystore />
          </div>
          <input
            type="text" {...register('department', { required: true })}
            id='departamento'
            name='department'
            //autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Provincia:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <BsBank2 />
          </div>
          <input
            type="text" {...register('province', { required: true })}
            id='provincia'
            name='province'
            //autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Distrito:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BsBuildingsFill />
            </div>
          <input
            type="text" {...register('district', { required: true })}
            id='distrito'
            name='district'
            //autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Dirección:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BsFillHouseUpFill />
            </div>
          <input
            type="text" {...register('address', { required: true })}
            id='direccion'
            name='address'
            //autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
        <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Email:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
              <BsFillEnvelopeAtFill />
            </div>
            <input
              type="text" {...register('email', { required: true })}
              id='email'
              name='email'
              //autoFocus
              className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
          </div>
        </div>

          <div className='text-gray-500 mb-6'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Pais:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BiWorld />
          </div>
            <select {...register('country', { required: true })} name='country'
              className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5">
              <option value="Peru">Perú</option>
              <option value="Argentica">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Colombia">Colombia</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Chile">Chile</option>
              <option value="España">España</option>
              <option value="Mexico">Mexico</option>
            </select>
        </div>
        </div>

      <div className='md:col-span-2'>
        <h2 className='bg-customOrange p-3 text-lg font-semibold text-gray-50 rounded-xl'>Detalle de la reclamación y pedido del consumidor</h2>

        <div className='grid grid-cols-2 gap-4 mt-8 mb-6 p-3'>
        <div className="flex items-center me-4">
          <input
            id="purple-checkbox-reclamo"
            type="checkbox"
            //{...register('reclamo', {required: true})}
            {...register('reclamo', { validate: validateCheckbox })}
            name='reclamo'
            checked={reclamoChecked}
            onChange={handleReclamoChange}
            className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="purple-checkbox-reclamo" className="ms-2 font-bold text-gray-600">Reclamo</label>
        </div>
        <div className="flex items-center me-4">
          <input
            id="purple-checkbox-sugerencia"
            type="checkbox"
            //{...register('sugerencia', {required: true})}
            {...register('sugerencia', { validate: validateCheckbox })}
            name='sugerencia'
            checked={sugerenciaChecked}
            onChange={handleSugerenciaChange}
            className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="purple-checkbox-sugerencia" className="ms-2 font-bold text-gray-600">Sugerencia</label>
        </div>
      </div>

          {/* <label className='font-bold absolute text-gray-600 text-lg duration-500 scale-75 origin-[0]'>
            Mensaje:
          </label>
          <div className='relative'>
            <textarea id="message" rows={10} className="block mt-12 p-2.5 w-full text-gray-900 bg-gray-100 rounded-lg border-2 border-gray-300"
              placeholder="Mensaje">
            </textarea>
          </div> */}

      <label className='font-bold absolute text-gray-600 text-lg duration-500 scale-75 origin-[0]'>
        Mensaje:
      </label>
      <div className='relative'>
        <textarea
          id="mensaje"
          rows={10}
          {...register('message', {required: true})}
          name='message'
          className="block mt-12 p-2.5 w-full text-gray-900 bg-gray-100 rounded-lg border-2 border-gray-300"
          placeholder={reclamoChecked ? "Mensaje de reclamo" : sugerenciaChecked ? "Mensaje de sugerencia" : "Mensaje"}
        >
        </textarea>
      </div>
      </div>
        <input type="submit" value={sending ? 'Enviando...' : 'Enviar'} className='border-2 p-2 mb-6 rounded-xl bg-customOrange text-gray-200 text-xl font-bold cursor-pointer'/>
      </form>
      </div>
      <Whatsapp />
    </section>
  )
}

export default Book