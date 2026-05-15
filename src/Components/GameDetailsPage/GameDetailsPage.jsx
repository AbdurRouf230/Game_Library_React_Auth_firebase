import { Star, Download, Gamepad2 } from "lucide-react";
import { use } from "react";
import { useParams } from "react-router";

const gamePromise = fetch("/game_card_data.json").then((res) => res.json());
const GameDetailsPage = () => {
  const gameData = use(gamePromise);
  const { id } = useParams();
  const game = gameData.filter((game) => game.id == id)[0];
  console.log(game);
  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = game;

  return (
    <div className="min-h-screen bg-[#070014] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl rounded-[35px] overflow-hidden bg-[#120a24] shadow-2xl border border-[#2f234a] hover:scale-[1.01] transition-all duration-300">
        {/* Banner Image */}
        <div className="relative h-[420px]">
          <img
            src={coverPhoto}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120a24] via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative px-8 md:px-12 py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 -mt-20 z-10">
          {/* Left Side */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Thumbnail */}
            <div className="w-28 h-28 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg bg-black">
              <img
                src={coverPhoto}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
                <span className="font-medium">{developer}</span>

                <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                  {category}
                </span>

                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={18} fill="currentColor" />
                  <span>{ratings}</span>
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Download Button */}
            <a
              href={downloadLink}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-cyan-400 to-green-400 hover:scale-105 transition-all duration-300 text-black font-semibold px-8 py-4 rounded-2xl flex items-center gap-3 shadow-lg"
            >
              <Download size={20} />
              Download
            </a>

            {/* Extra Button */}
            <button className="bg-black text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-105 transition-all duration-300">
              <Gamepad2 size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;
