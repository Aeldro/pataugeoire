import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import PreviousNext from "./components/PreviousNext";
import { useState } from "react";




PokemonCard.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,

  const pokemonList = [
    {
      name: "bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {
      name: "salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
  ];

};
function App() {
  
   const [pokemonIndex, setPokemonIndex] = useState(0)
  const pokemon = pokemonList[pokemonIndex]
  const pokemonListLength = pokemonList.length;


  return (
    <div className="AppContainer">
      ;<div ClassName="navbar "></div>
      <div className="content"></div>
      <div className="card">
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </div>
  );
}

export default App;
