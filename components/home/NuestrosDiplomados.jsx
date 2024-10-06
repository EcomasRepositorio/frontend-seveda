import React from "react";
import ScrollAnimation from "./scrollAnimation";

const NuestrosDiplomados = () => {
  return (
    <ScrollAnimation>
  <div
    className="
      bg-[url('/image/purple.jpg')] dark:bg-[url('/image/bg_dark.webp')] 
      fade-in-right mx-auto max-w-screen-xl bg-center bg-fixed to-transparent 
      rounded-lg mt-10"
  >
    <div className="px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl">
      <h2 className="text-blue-50 text-4xl font-extrabold mb-1 text-center">
        Nuestros Diplomados
      </h2>
    </div>
  </div>
</ScrollAnimation>

  );
};

export default NuestrosDiplomados;
