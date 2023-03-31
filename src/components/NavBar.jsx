const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {

    const handleClick = (index) => {
        setPokemonIndex(index)
      }
    return (
        <nav>
            {pokemonList.map((pokemon, index) => {
                <button onClick={() => handleClick(index)}>{pokemon.name}</button>
                })}
        </nav>
    )

};

export default NavBar;
