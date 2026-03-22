import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { ProjectMedia } from '../../../types/content.types';
import * as S from './styles';

interface MediaCarouselProps {
  thumbnail: string;
  media?: ProjectMedia[];
  title: string;
}

export const MediaCarousel: React.FC<MediaCarouselProps> = ({ thumbnail, media, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Build items list: thumbnail first, then media
  const items: ProjectMedia[] = [
    { type: 'image', url: thumbnail },
    ...(media || []),
  ];

  const hasMultiple = items.length > 1;

  const goTo = useCallback((newIndex: number, dir: number) => {
    setDirection(dir);
    setCurrentIndex(newIndex);
  }, []);

  const goPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goTo(newIndex, -1);
  }, [currentIndex, items.length, goTo]);

  const goNext = useCallback(() => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    goTo(newIndex, 1);
  }, [currentIndex, items.length, goTo]);

  useEffect(() => {
    if (!hasMultiple) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasMultiple, goPrev, goNext]);

  const current = items[currentIndex];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <S.CarouselWrapper>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        >
          {current.type === 'video' ? (
            <S.CarouselVideo controls>
              <source src={current.url} />
            </S.CarouselVideo>
          ) : (
            <S.CarouselImage src={current.url} alt={current.caption || title} />
          )}
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <>
          <S.CarouselArrow $position="left" onClick={goPrev}>
            <FiChevronLeft size={24} />
          </S.CarouselArrow>
          <S.CarouselArrow $position="right" onClick={goNext}>
            <FiChevronRight size={24} />
          </S.CarouselArrow>
          <S.CarouselCounter>
            {currentIndex + 1} / {items.length}
          </S.CarouselCounter>
        </>
      )}
    </S.CarouselWrapper>
  );
};
