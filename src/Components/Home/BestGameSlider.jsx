import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GameCard from "./GameCard";

const BestGamesSlider = ({ bestGames }) => {
  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={20}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="px-4"
      >
        {bestGames.map((game) => (
          <SwiperSlide key={game.id} className="flex justify-center">
            <GameCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestGamesSlider;
