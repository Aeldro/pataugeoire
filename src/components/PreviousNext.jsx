const PreviousNext = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
  const handlePreviousClick = () => {
    setPokemonIndex(pokemonIndex - 1);
    console.log("PreviousNext :", pokemonIndex);
  };

  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex + 1);
    console.log("PreviousNext :", pokemonIndex);
  };

  return (
    <>
      {pokemonIndex > 0 && (
        <input type="button" value="Previous" onClick={handlePreviousClick} />
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <input type="button" value="Next" onClick={handleNextClick} />
      )}
    </>
  );
};

export default PreviousNext;
