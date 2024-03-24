import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="flex items-center justify-between px-3 py-4 bg-red-400 bg-color min-h-8 max-lg:flex-col max-lg:gap-3 max-lg:items-center max-lg:py-2">
      <div className="text-3xl font-bold tracking-widest text-cyan-400">
        Moviestan
      </div>
      <ul className="flex items-center justify-center gap-2 text-xl lg:gap-5">
        <Link to="/">
          <li className="cursor-pointer hover:text-cyan-400">Home</li>
        </Link>
        <li className="cursor-pointer hover:text-cyan-400">Tv Shows</li>
        <li className="cursor-pointer hover:text-cyan-400">Movies</li>
        <li className="cursor-pointer hover:text-cyan-400">Upcoming</li>
      </ul>

      <SearchBar />
    </section>
  );
};

export default Header;
