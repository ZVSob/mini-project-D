"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { HiMiniPause, HiMiniPlay } from "react-icons/hi2";

const slides = [
  {
    image: "/sobeysl.svg",
    alt: "Sobeys Logo",
    href: "https://www.sobeys.com/flyer?gad_source=1&gad_campaignid=23801439761&gbraid=0AAAAADQXkr518NSy9PZfoeexIWhVFWQfu&gclid=EAIaIQobChMItrSws-ftlAMVwjqHAx0pjyo-EAAYASAAEgI3IPD_BwE",
  },
  {
    image: "/igal.svg",
    alt: "IGA Logo",
    href: "https://www.iga.ca/",
  },
  {
    image: "/freshcol.svg",
    alt: "FreshCo Logo",
    href: "https://www.freshco.com/",
  },
  {
    image: "/foodlandl.svg",
    alt: "FoodLand Logo",
    href: "https://www.foodland.ca/",
  },
  {
    image: "/safewayl.svg",
    alt: "Safeway Logo",
    href: "https://www.safeway.ca/",
  },
  {
    image: "/thriftyfoodsl.svg",
    alt: "Thrifty Foods Logo",
    href: "https://www.thriftyfoods.com/",
  },

];

export default function SwiperComponent() {
  const swiperRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;

    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }

    setIsPlaying(!isPlaying);
    };
  return (
    <div className="relative">
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false}}
      onSwiper={(swiper) => {
      swiperRef.current = swiper;
      }}
      pagination={{ clickable: true }}
      loop
      modules={[Pagination, Navigation, Autoplay]}
      className="w-[100%] h-[50%]"
      style={
        {
          "--swiper-navigation-color": "#2E1B5C",
          "--swiper-pagination-color": "#2E1B5C",
          "--swiper-pagination-bottom": " 0px",
        } as React.CSSProperties
      }
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.href}>
          <a
            href={slide.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl"
          >
             <div className="bg-mauve-300 p-5">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={300}
              height={200}
              className="
                w-full
                h-auto
                cursor-pointer
                transition-transform
                duration-300
                hover:scale-105
              "
            />
             </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="relative flex items-center justify-center gap-3">
  
  <div className="swiper-pagination" />

  <button
    onClick={toggleAutoplay}
    className="opacity-70 hover:opacity-100 transition"
  >
    {isPlaying ? <HiMiniPause size={18} /> : <HiMiniPlay size={18} />}
  </button>
</div>
    </div>
  );
}