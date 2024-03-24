import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../context";
import { useState } from "react";

const SearchBar = () => {
  const { query, setQuery } = useGlobalContext();

  const [search, setSearch] = useState("titanic");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <input
        type="text"
        className="py-2 text-2xl text-white rounded-md px-14 bg-slate-800"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className="translate -translate-x-9" onClick={handleSubmit}>
        <FontAwesomeIcon
          size="xl"
          className="text-cyan-400"
          icon={faMagnifyingGlass}
        />
      </button>
    </form>
  );
};

export default SearchBar;
