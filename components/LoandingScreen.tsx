import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-customPurple800"></div>
      {/* Personaliza la animación según tus preferencias */}
    </div>
  );
};

export default LoadingScreen;
