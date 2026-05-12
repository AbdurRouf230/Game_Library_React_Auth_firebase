import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = ({ bset3games }) => {
  return (
    <div className="px-4 py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="max-w-[1400px] rounded-xl overflow-hidden"
      >
        {bset3games.map((game, index) => (
          <SwiperSlide key={index}>
            {/* <h1 className="relative top-60 md:top-140 lg:top-140 left-5 md:left-20 lg:left-20 font-bold md:text-4xl lg:text-4xl">
              {game.title}
            </h1> */}
            <img
              src={game.coverPhoto}
              alt=""
              className="w-full h-[250px] sm:h-[400px] md:h-[600px]"
            />
            <div className="absolute bottom-6 left-5 md:left-5 z-10 flex flex-col gap-4">
              <h1 className="font-bold text-2xl md:text-4xl">{game.title}</h1>
              <p>{game.description}</p>
              <button className="btn btn-base w-[120px] h-[40px]">
                Log in Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
