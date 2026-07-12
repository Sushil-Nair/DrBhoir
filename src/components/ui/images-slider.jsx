/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export const ImagesSlider = ({
  images = [],
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + 1 >= loadedImages.length ? 0 : prev + 1
    );
  }, [loadedImages.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? loadedImages.length - 1 : prev - 1
    );
  }, [loadedImages.length]);

  // Preload images
  useEffect(() => {
    if (!images.length) return;

    const loadImages = async () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = () => reject(image);
        });
      });

      const results = await Promise.allSettled(imagePromises);

      const successfulImages = results
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);

      setLoadedImages(successfulImages);

      if (successfulImages.length === 0) {
        console.error("No slider images could be loaded.");
      }
    };

    loadImages();
  }, [images]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNext, handlePrevious]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || loadedImages.length <= 1) return;

    const sliderInterval = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [autoplay, interval, handleNext, loadedImages.length]);

  const slideVariants = {
    initial: {
      opacity: 0,
      scale: 1.08,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
    upExit: {
      y: "-100%",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    downExit: {
      y: "100%",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const currentImage = loadedImages[currentIndex];

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {/* Background Image */}
      {currentImage && (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentImage}
            alt=""
            aria-hidden="true"
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="
              absolute inset-0
              h-full w-full
              object-cover object-center
              z-0
              will-change-transform
            "
          />
        </AnimatePresence>
      )}

      {/* Overlay */}
      {currentImage && overlay && (
        <div
          className={cn(
            "absolute inset-0 z-10",
            overlayClassName
          )}
        />
      )}

      {/* Content */}
      {currentImage && (
        <div className="relative z-20 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
};