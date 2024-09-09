"use client";
import React, { useState, useEffect } from 'react';
import { motion, Variants } from "framer-motion";
import { slideInFromLeft, fadeInFrom, textVariants, slideInFromTop, slideFromRight } from '@/components/utils/motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./StylesHome.css"
import Link from 'next/link';
import { title } from 'process';

const texts = [
  {text1:"Para profesionales y público en general", colorText: "text-customOrange dark:text-customOrange"},
  {text1:"La mejor opción para tu desarrollo profesional",
    
    
    colorText: "text-customOrange dark:text-customOrange"},
];

const slides = [
  { title: "Diplomados y cursos", color: "from-customPurple800 to-customPurple300 dark:bg-blackblue2" },
  { title: "Aprendizaje virtual", color: "from-customPurple800 to-customPurple300 dark:bg-blackblue2" },

  
]

const icons = [
  {img1: <FaFacebookF className='text-white ' />, img2: <FaInstagram className='text-white' />, img3: <FaTiktok className='text-white' />, img4: <FaWhatsapp className='text-white' />, img5: <FaYoutube />, color: ""},
  {img1: <FaFacebookF className='text-white' />, img2: <FaInstagram className='text-white'/>, img3: <FaTiktok className='text-white' />, img4: <FaWhatsapp className='text-white' />, img5: <FaYoutube />, color: ""},
]
const PrincipalHome = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const slides = document.querySelectorAll('.slide');
    const slideIcons = document.querySelectorAll('.slide-icon');
    const numberOfSlides = slides.length;
    let playSlider: ReturnType<typeof setInterval>;
    let slideNumber = 0;

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        slides[slideNumber].classList.remove("active");
        slideNumber = (slideNumber + 1) % numberOfSlides;
        slides[slideNumber].classList.add("active");
        setIndex(slideNumber);
      })
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        slides[slideNumber].classList.remove("active");
        slideNumber = (slideNumber - 1 + numberOfSlides) % numberOfSlides;
        slides[slideNumber].classList.add("active");
        setIndex(slideNumber);
      })
    };

    const repeat = () => {
      playSlider = setInterval(() => {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });

        slideNumber--;

        if(slideNumber < 0){
          slideNumber = numberOfSlides - 1;
        }

        if (slides[slideNumber] !== undefined) {
          slides[slideNumber].classList.add("active");
        }
        if (slideIcons[slideNumber] !== undefined) {
          slideIcons[slideNumber].classList.add("active");
        }

        setIndex(slideNumber);
      }, 7000);
    }
    repeat();

    if (slider !== null) {
      slider.addEventListener("mouseover", () => {
        clearInterval(playSlider);
      });

      slider.addEventListener("mouseout", () => {
        repeat();
      });
    }
  }, []);

  return (
    <section className="">
      <div className='slider'>
        {slides.map((slide, i) => (
          <motion.div
          key={i}
          className={`slide ${i === index ? 'active' : ''}`}>
            <Image src={`/image/banners0${i + 1}.jpg`} alt="seveda" width={1200} height={1200} className=''/>
            <div
              className="relative mx-auto text-right max-w-screen-xl p-4 xl:mt-[200px] lg:mt-[200px] md:mt-40 mt-20">
              {icons.map((icon, i) => (
                i === index && (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromTop}
                className={`py-1 lg:text-right px-1 opacity-[0.9] ${icon.color}`}>
                <h1 className='lg:text-2xl text-2xl text-center inline-flex lg:gap-6 gap-3'>
                  <Link key={`link-${i}`} href='https://web.facebook.com/corp.rizo' target="_blank"
                    className="border bg-blue-600 dark:bg-customOscure p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ">
                    {icon.img1}
                  </Link>
                  <Link key={`link-${i+1}`} href='https://www.instagram.com/corporacion.rizo/' target="_blank"
                    className="border bg-customPurple300 dark:bg-customOscure p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ">
                    {icon.img2}
                  </Link>
                  <Link key={`link-${i+2}`} href='https://www.tiktok.com/@corporacion.rizo' target="_blank"
                    className="border bg-gray-500 dark:bg-customOscure p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ">
                    {icon.img3}
                  </Link>
                  <Link key={`link-${i+3}`} href='https://wa.me/51961646248?text=Hola, deseo más información sobre los diplomados y cursos...' target="_blank"
                    className="border bg-green-600 dark:bg-customOscure p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl ">
                    {icon.img4}
                  </Link>
                </h1>
              </motion.div>
              )
              ))}
              <motion.h1
                initial="hidden"
                animate={i === index ? "visible" : "hidden"}
                exit="hidden"
                variants={textVariants}
                className="font-extrabold text-[31px] md:text-6xl lg:text-7xl xl-text-9xl mb-4 relative">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${slide.color}`}>
                {slide.title.split(' ').map((word, j, array) => (
                  <React.Fragment key={j}>
                    {j > 0 && j % 3 === 0 && <br />}
                    {word}{' '}
                  </React.Fragment>
                  ))}
                  </span>
              </motion.h1>
              {texts.map((text, i) => (
                i === index && (
              <motion.h2
                key={i}
                initial="hidden"
                animate={i === index ? 'visible' : 'hidden'}
                exit="hidden"
                variants={slideFromRight}
                className={`font-extrabold text-lg lg:text-3xl ${text.colorText}`}>
                {text.text1.split(' ').map((word, j, array) => (
                  <React.Fragment key={j}>
                    {j > 0 && j % 7 === 0 && <br />}
                    {word}{' '}
                  </React.Fragment>
                  ))}
              </motion.h2>
              )
            ))}
        </div>
        </motion.div>
        ))}
        <div className="navigation md:text-2xl font-extrabold">
          <BsChevronLeft className="prev-btn"/>
          <BsChevronRight className="next-btn"/>
        </div>
      </div>
    </section>
  )
}

export default PrincipalHome;