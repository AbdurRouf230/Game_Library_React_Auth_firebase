import { Link } from "react-router";
import star from "../../assets/star.svg";

const GameCard = ({ game }) => {
  const { id, title, coverPhoto, category, description, ratings, developer } =
    game;

  const fullStars = Math.floor(parseFloat(ratings));

  return (
    <div className="bg-[#0f0f14] rounded-3xl overflow-hidden border border-gray-800 shadow-lg hover:scale-105 transition-all duration-300 w-full max-w-[320px]">
      {/* Cover Image */}
      <div className="relative">
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-52 object-cover"
        />

        {/* Category Badge */}
        <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 text-white">
        <h2 className="text-2xl font-bold mb-2 line-clamp-1">{title}</h2>

        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Developer */}
        <p className="text-xs text-gray-500 mb-3">By {developer}</p>

        {/* Ratings */}
        <div className="flex items-center gap-1 mb-5">
          {[...Array(fullStars)].map((_, index) => (
            <img key={index} src={star} alt="star" className="w-5 h-5" />
          ))}

          <span className="ml-2 text-sm text-gray-300">{ratings}</span>
        </div>

        {/* Button */}
        <Link to={`/game/${id}`}>
          <button className="w-full border-2 border-blue-500 text-blue-500 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
