import React from "react";
import FavoriteContext from "./favoritesContext";


const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  

  return (
    <nav>
      <div />
      <div>
          <p className="navbar-p">PokeWiki</p>
      </div>
      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
