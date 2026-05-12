import { use, useState } from "react";
import RightAside from "./RightAsside";
import Banner from "./Banner";
import GameCard from "./GameCard";
import BestGamesSlider from "./BestGameSlider";
import NewsSetller from "./NewsSetller";

const gamesPromise = fetch("/game_card_data.json").then((res) => res.json());

const Home = () => {
  const gameData = use(gamesPromise);
  // filtered game to show in card
  const [filterCatagory, setFilterCatagory] = useState("Show All");
  let filteredGamesToShow = [...gameData];
  if (filterCatagory !== "Show All") {
    filteredGamesToShow = gameData.filter(
      (game) => game.category === filterCatagory,
    );
  }

  // best game to show in slider
  const sortedGames = [...gameData].sort(
    (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings),
  );

  const best3Games = sortedGames.filter((game, index) => index < 6);

  // unique category to send in right asside
  const uniqueCategories = [
    "Show All",
    ...new Set(gameData.map((game) => game.category)),
  ];
  return (
    <div className="grid grid-cols-8 items-start lg:grid-cols-12 gap-4 w-11/12 mx-auto min-h-[650px]  mt-4 mb-4 bg-black p-6 rounded-xl">
      <div className="col-span-10 md:col-span-10 lg:col-span-2 bg-base-300 p-2 rounded-lg">
        <RightAside
          categories={uniqueCategories}
          setFilterCatagory={setFilterCatagory}
        ></RightAside>
      </div>
      <div className="col-span-10">
        <Banner bset3games={best3Games}></Banner>
      </div>
      <div className="col-span-12">
        <h1 className="font-bold text-2xl mb-2">Most Popular Game</h1>
        <BestGamesSlider bestGames={best3Games}></BestGamesSlider>

        <h1 className="font-bold text-2xl mb-2">
          Games available ({filteredGamesToShow.length})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {filteredGamesToShow.map((game) => (
            <GameCard game={game}></GameCard>
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 lg:col-span-12 bg-base-300 p-2 rounded-lg items-center">
        <NewsSetller></NewsSetller>
      </div>
    </div>
  );
};
export default Home;
