"use client"

import { memo, useEffect, useLayoutEffect, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export type CertificateInfo = {
  image: string;
  title: string;
  description: string;
  credentialUrl: string;
};

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query:string): boolean => {
    if (IS_SERVER) return defaultValue;
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) return getMatches(query);
    return defaultValue
  })

  const handleChange = () => setMatches(getMatches(query));

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()
    matchMedia.addEventListener("change", handleChange)
    return () => matchMedia.removeEventListener("change", handleChange)
  }, [query])

  return matches
}

const transition = { duration: 0.15, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    handleClick,
    controls,
    certificates,
    isCarouselActive,
    rotation,
  }: {
    handleClick: (cert: CertificateInfo, index: number) => void
    controls: any
    certificates: CertificateInfo[]
    isCarouselActive: boolean
    rotation: any, // MotionValue<number>
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = certificates.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`)

    const dragTransition = {
      type: "spring",
      stiffness: 80,
      damping: 40,
      mass: 0.2,
    };

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{ perspective: "1000px", transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{ transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
          onDrag={(_, info) => isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.03)}
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({ rotateY: rotation.get() + info.velocity.x * 0.03, transition: dragTransition })
          }
          animate={controls}
        >
          {certificates.map((cert, i) => (
            <motion.div
              key={`key-${cert.image}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-1 border border-white/10"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(cert, i)}
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                layoutId={`img-${cert.image}`}
                className="pointer-events-none w-full rounded-lg object-cover aspect-square"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

function ThreeDPhotoCarousel({ certificates }: { certificates: CertificateInfo[] }) {
  const [activeCertificate, setActiveCertificate] = useState<CertificateInfo | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const rotation = useMotionValue(0);

  const rotationTransition = {
      type: "spring",
      stiffness: 100,
      damping: 30,
      mass: 0.1,
  };

  const rotate = (direction: 'left' | 'right') => {
    if (!isCarouselActive) return;
    const angle = 360 / certificates.length;
    const newRotation = rotation.get() + (direction === 'left' ? angle : -angle);
    controls.start({ rotateY: newRotation, transition: rotationTransition });
  }

  const handleClick = (cert: CertificateInfo) => {
    setActiveCertificate(cert)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveCertificate(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative group">
      <AnimatePresence>
        {activeCertificate && (
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
              layoutId={`card-${activeCertificate.image}`}
            >
              <motion.img
                layoutId={`img-${activeCertificate.image}`}
                src={activeCertificate.image}
                className="w-full h-64 object-cover"
                style={{ willChange: "transform" }}
              />
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                >
                  {activeCertificate.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                >
                  {activeCertificate.description}
                </motion.p>
                <motion.a
                  href={activeCertificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                >
                  View Credential <ExternalLink size={14} className="ml-1" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative h-[500px] w-full overflow-hidden">
         {isCarouselActive && (
          <>
            <button 
              onClick={() => rotate('left')} 
              className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => rotate('right')} 
              className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <Carousel
          handleClick={handleClick}
          controls={controls}
          certificates={certificates}
          isCarouselActive={isCarouselActive}
          rotation={rotation}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
