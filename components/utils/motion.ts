import { Variants } from 'framer-motion';

export function slideInFromLeft(delay: number) {
  }

  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }

  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };
  export const navVariants = {
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        type: 'spring',
        stiffness: 30,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.5,
      },
    },
  };

  export const staggerContainer = (staggerChildren: string, delayChildren: string): Variants => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren: parseFloat(staggerChildren),
        delayChildren: parseFloat(delayChildren),
      },
    },
  });

  export const staggerContainerInitial = (staggerChildren: string, delayChildren: string): Variants => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren: parseFloat(staggerChildren),
        delayChildren: parseFloat(delayChildren),
      },
    },
    initial: { // Define la animación inicial
      opacity: 0, // Por ejemplo, podrías establecer la opacidad en 0
      transition: {
        opacity: { duration: 1 }, // Asegúrate de que la transición sea instantánea
      },
    },
  });

  export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };

  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  export const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: {
      opacity: 0,
      scale: 0.8, // Opcional: puedes agregar una escala inicial para hacer un efecto de zoom al aparecer
      ...(direction === 'left' && { x: -100 }), // Mueve el componente hacia la izquierda
      ...(direction === 'right' && { x: 100 }), // Mueve el componente hacia la derecha
      ...(direction === 'up' && { y: -100 }), // Mueve el componente hacia arriba
      ...(direction === 'down' && { y: 100 }), // Mueve el componente hacia abajo
    },
    show: {
      opacity: 1,
      scale: 1, // Restaura la escala original
      x: 0, // Reinicia la posición en el eje x
      y: 0, // Reinicia la posición en el eje y
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2, // Duración de la animación de salida
        ease: 'easeInOut', // Función de facilidad de la animación de salida
      },
    },
  });


  //NUEVAS ANIMACIONES

  
  export const slideFromLeft = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  export const slideFromTop = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  export const slideFromRight = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  export const fadeInFrom = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  export const textVariants: Variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
  };

  export const zoomInFrom = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2  
      }
    }
  }