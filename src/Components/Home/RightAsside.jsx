import { useState } from "react";

const RightAside = ({ categories, setFilterCatagory }) => {
  const [activeCategory, setActiveCategory] = useState("Show All");
  const [showCategories, setShowCategories] = useState(false);

  const handleCatagory = (category) => {
    setActiveCategory(category);
    setFilterCatagory(category);

    // hide menu after click on mobile
    setShowCategories(false);
  };

  return (
    <aside>
      <h1 className="font-bold mb-2">Categories ({categories.length})</h1>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setShowCategories(!showCategories)}
        className="btn btn-primary w-full mb-3 lg:hidden"
      >
        {showCategories ? "Hide Categories" : "Show Categories"}
      </button>

      {/* Categories */}
      <div className={`${showCategories ? "block" : "hidden"} lg:block`}>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCatagory(category)}
            className={`btn w-full mb-2 ${
              activeCategory === category
                ? "bg-black text-white"
                : "btn-base-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default RightAside;
