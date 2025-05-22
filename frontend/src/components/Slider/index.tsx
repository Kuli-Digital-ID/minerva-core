'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://cdn.xcashshop.com/media/file-1743195076-37rmt2gu-2503-xbanner-wdp.webp?w=1080&q=75',
  'https://cdn.xcashshop.com/media/file-1747036722-uujeae68-2503-xbanner-naruto-1-1.webp?w=1080&q=75',
  'https://cdn.xcashshop.com/media/file-1743195076-37rmt2gu-2503-xbanner-wdp.webp?w=1080&q=75',
  'https://cdn.xcashshop.com/media/file-1747036722-uujeae68-2503-xbanner-naruto-1-1.webp?w=1080&q=75',
];

export default function Slider() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => {
      const nextIndex =
        (prevIndex + newDirection + images.length) % images.length;
      return [nextIndex, newDirection];
    });
    resetTimer();
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const offsetX = info.offset.x;
    if (offsetX < -100) paginate(1);
    else if (offsetX > 100) paginate(-1);
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setIndex(([prevIndex]) => [(prevIndex + 1) % images.length, 1]);
    }, 8000);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full overflow-hidden shadow-lg pb-8">
      <div className="absolute inset-0 z-10 flex">
        <div className="w-1/2 h-full" onClick={() => paginate(-1)} />
        <div className="w-1/2 h-full" onClick={() => paginate(1)} />
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="w-screen h-full sm:w-full object-cover sm:rounded-2xl cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>
    </div>
  );
}
