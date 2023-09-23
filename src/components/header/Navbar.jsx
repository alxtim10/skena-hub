import React from "react";
import { Link } from "react-router-dom";

const headerItems = [
  {
    id: 2,
    name: "Men",
  },
  {
    id: 3,
    name: "Women",
  },
  {
    id: 4,
    name: "Sale",
  },
];

function Navbar({ showPhoto, scrollToSection, featured }) {

  const handleMouseOver = (event) => {
    var id = event.target.id;
    showPhoto(id, true);
  };

  const handleMouseOut = () => {
    showPhoto(0, false);
  };


  return (
    <>
      <div className="flex">
        <div className="flex flex-col mt-8 gap-1">
          <p
            id={1}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => scrollToSection(featured)}
            className="py-2 flex text-lg font-outfit hover:text-blue-700 hover:translate-x-2 hover:translate-y-2 transition-all duration-400 cursor-pointer"
          >
            New & Featured
          </p>
          {headerItems.map((item) => {
            return (
              <Link to={`/${item.name}`} key={item.id}>
                <p
                  id={item.id}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="py-2 flex text-lg font-outfit hover:text-blue-700 hover:translate-x-2 hover:translate-y-2 transition-all duration-400 cursor-pointer"
                >
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
