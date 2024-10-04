"use client";
import React, { useEffect, useRef } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdPersonPin } from "react-icons/md";
import "./StyleCourses.css";
import ScrollAnimation from "./scrollAnimation";
import Image from "next/image";
import Link from "next/link";



const Comment = () => {
  const activeRef = useRef<number>(2);
  const itemsRef = useRef<NodeListOf<Element> | null>(null);
  const nextRef = useRef<HTMLElement | null>(null);
  const prevRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    itemsRef.current = document.querySelectorAll(".slider .item");
    nextRef.current = document.getElementById("next");
    prevRef.current = document.getElementById("prev");

    const intervalId = setInterval(() => {
      activeRef.current =
        activeRef.current + 1 < itemsRef.current!.length
          ? activeRef.current + 1
          : 0; // Volver al primer item si se llega al último
      loadShow();
    }, 10000);

    if (itemsRef.current && nextRef.current && prevRef.current) {
      loadShow();

      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        let startX: number;
        let startY: number;
        let endX: number;
        let endY: number;

        const handleGesture = () => {
          const deltaX = endX - startX;
          const deltaY = endY - startY;
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
              activeRef.current =
                activeRef.current - 1 >= 0
                  ? activeRef.current - 1
                  : activeRef.current;
              loadShow();
            } else {
              activeRef.current =
                activeRef.current + 1 < itemsRef.current!.length
                  ? activeRef.current + 1
                  : activeRef.current;
              loadShow();
            }
          }
        };

        document.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        });

        document.addEventListener("touchend", (e) => {
          endX = e.changedTouches[0].clientX;
          endY = e.changedTouches[0].clientY;
          handleGesture();
        });
      } else {
        nextRef.current.onclick = function () {
          activeRef.current =
            activeRef.current + 1 < itemsRef.current!.length
              ? activeRef.current + 1
              : activeRef.current;
          loadShow();
        };
        prevRef.current.onclick = function () {
          activeRef.current =
            activeRef.current - 1 >= 0
              ? activeRef.current - 1
              : activeRef.current;
          loadShow();
        };
      }
    }
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function loadShow() {
    if (itemsRef.current) {
      for (let i = 0; i < itemsRef.current.length; i++) {
        const item = itemsRef.current[i] as HTMLElement;
        if (i === activeRef.current) {
          item.classList.add("center");
          item.style.transform = "none";
          item.style.zIndex = "2";
          item.style.filter = "none";
          item.style.opacity = "1";
          item.style.display = "block";
          item.style.width = "320px";
          item.style.height = "420px";
          item.style.setProperty("--scale", "1");
        } else if (
          i === activeRef.current - 1 ||
          i === activeRef.current + 1 ||
          i === activeRef.current - 2 ||
          i === activeRef.current + 2
        ) {
          item.style.transform = `translateX(${
            120 * (i - activeRef.current)
          }px) scale(1) perspective(16px) perspective(1px)`;
          item.style.zIndex = "1";
          item.style.filter = "blur(5px)";
          item.style.opacity = "0.6";
          item.style.display = "block";
          item.style.width = "320px";
          item.style.height = "400px";
          item.style.setProperty("--scale", "0.9");
        } else {
          item.style.display = "none";
        }
      }
    }
  }
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80 bg-transparent"></div>
      <div className="relative z-10 text-customPurple800 text-center">
        <ScrollAnimation>
          <div className="bg-[url('/image/purple.jpg')] fade-in-right mx-auto max-w-screen-xl bg-center bg-fixed to-transparent rounded-lg mt-10">
            {/* ... */}
            <div className=" px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl">
              <h2 className="text-blue-50 text-4xl font-extrabold mb-1 text-center">
                Nuestros Cursos
              </h2>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="slider max-w-screen-xl mx-auto">

        <div className="item">
          <div className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl bg-violet-500/50 hover:cursor-pointer">
            <div className="flex justify-center">
              <Image
                src="/image/SSOMA.webp"
                alt="planet-01"
                width={800}
                height={200}
                className="w-auto rounded-3xl p-2 object-cover"
                priority={true}
              />
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <div className="flex-1 flex flex-col max-w-[650px]">
                <h1 className="uppercase underline text-white text-xs font-extrabold text-left">
                  Diplomados
                </h1>
                <h2 className="font-extrabold lg:text-[26px] text-[20px] text-white">
                  title
                </h2>
                <h3 className="mt-[16px] lg:mb-6 font-semibold lg:text-[15px] text-[13px] text-gray-200">
                  sub
                </h3>
                <Link
                  href="/graduate"
                  className="uppercase text-xs font-extrabold text-white border p-2 md:mt-2 mt-6 mb-4 w-32 rounded-lg hover:scale-110 duration-200 hover:bg-customPurple"
                >
                  Ver diplomado
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl bg-violet-500/50 hover:cursor-pointer">
            <div className="flex justify-center">
              <Image
                src="/image/SSOMA.webp"
                alt="planet-01"
                width={800}
                height={200}
                className="w-auto rounded-3xl p-2 object-cover"
                priority={true}
              />
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <div className="flex-1 flex flex-col max-w-[650px]">
                <h1 className="uppercase underline text-white text-xs font-extrabold text-left">
                  Diplomados
                </h1>
                <h2 className="font-extrabold lg:text-[26px] text-[20px] text-white">
                  title
                </h2>
                <h3 className="mt-[16px] lg:mb-6 font-semibold lg:text-[15px] text-[13px] text-gray-200">
                  sub
                </h3>
                <Link
                  href="/graduate"
                  className="uppercase text-xs font-extrabold text-white border p-2 md:mt-2 mt-6 mb-4 w-32 rounded-lg hover:scale-110 duration-200 hover:bg-customPurple"
                >
                  Ver diplomado
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl bg-violet-500/50 hover:cursor-pointer">
            <div className="flex justify-center">
              <Image
                src="/image/SSOMA.webp"
                alt="planet-01"
                width={800}
                height={200}
                className="w-auto rounded-3xl p-2 object-cover"
                priority={true}
              />
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <div className="flex-1 flex flex-col max-w-[650px]">
                <h1 className="uppercase underline text-white text-xs font-extrabold text-left">
                  Diplomados
                </h1>
                <h2 className="font-extrabold lg:text-[26px] text-[20px] text-white">
                  title
                </h2>
                <h3 className="mt-[16px] lg:mb-6 font-semibold lg:text-[15px] text-[13px] text-gray-200">
                  sub
                </h3>
                <Link
                  href="/graduate"
                  className="uppercase text-xs font-extrabold text-white border p-2 md:mt-2 mt-6 mb-4 w-32 rounded-lg hover:scale-110 duration-200 hover:bg-customPurple"
                >
                  Ver diplomado
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl bg-violet-500/50 hover:cursor-pointer">
            <div className="flex justify-center">
              <Image
                src="/image/SSOMA.webp"
                alt="planet-01"
                width={800}
                height={200}
                className="w-auto rounded-3xl p-2 object-cover"
                priority={true}
              />
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <div className="flex-1 flex flex-col max-w-[650px]">
                <h1 className="uppercase underline text-white text-xs font-extrabold text-left">
                  Diplomados
                </h1>
                <h2 className="font-extrabold lg:text-[26px] text-[20px] text-white">
                  title
                </h2>
                <h3 className="mt-[16px] lg:mb-6 font-semibold lg:text-[15px] text-[13px] text-gray-200">
                  sub
                </h3>
                <Link
                  href="/graduate"
                  className="uppercase text-xs font-extrabold text-white border p-2 md:mt-2 mt-6 mb-4 w-32 rounded-lg hover:scale-110 duration-200 hover:bg-customPurple"
                >
                  Ver diplomado
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl bg-violet-500/50 hover:cursor-pointer">
            <div className="flex justify-center">
              <Image
                src="/image/SSOMA.webp"
                alt="planet-01"
                width={800}
                height={200}
                className="w-auto rounded-3xl p-2 object-cover"
                priority={true}
              />
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <div className="flex-1 flex flex-col max-w-[650px]">
                <h1 className="uppercase underline text-white text-xs font-extrabold text-left">
                  Diplomados
                </h1>
                <h2 className="font-extrabold lg:text-[26px] text-[20px] text-white">
                  title
                </h2>
                <h3 className="mt-[16px] lg:mb-6 font-semibold lg:text-[15px] text-[13px] text-gray-200">
                  sub
                </h3>
                <Link
                  href="/graduate"
                  className="uppercase text-xs font-extrabold text-white border p-2 md:mt-2 mt-6 mb-4 w-32 rounded-lg hover:scale-110 duration-200 hover:bg-customPurple"
                >
                  Ver diplomado
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl bg-violet-500/50 hover:cursor-pointer">
            <div className="flex justify-center">
              <Image
                src="/image/SSOMA.webp"
                alt="planet-01"
                width={800}
                height={200}
                className="w-auto rounded-3xl p-2 object-cover"
                priority={true}
              />
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <div className="flex-1 flex flex-col max-w-[650px]">
                <h1 className="uppercase underline text-white text-xs font-extrabold text-left">
                  Diplomados
                </h1>
                <h2 className="font-extrabold lg:text-[26px] text-[20px] text-white">
                  title
                </h2>
                <h3 className="mt-[16px] lg:mb-6 font-semibold lg:text-[15px] text-[13px] text-gray-200">
                  sub
                </h3>
                <Link
                  href="/graduate"
                  className="uppercase text-xs font-extrabold text-white border p-2 md:mt-2 mt-6 mb-4 w-32 rounded-lg hover:scale-110 duration-200 hover:bg-customPurple"
                >
                  Ver diplomado
                </Link>
              </div>
            </div>
          </div>
        </div>



       

        <button id="next">
          {" "}
          <AiOutlineRight />{" "}
        </button>
        <button id="prev">
          {" "}
          <AiOutlineLeft />{" "}
        </button>
      </div>
    </section>
  );
};

export default Comment;
