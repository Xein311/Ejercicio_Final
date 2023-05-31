import React from "react";
const { useState } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container" class="flex m-10  align-items-center">
      <div className="searchbar">
        <input class="bg-red-50" placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full shadow text-align-center">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
