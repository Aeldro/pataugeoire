const PreviousNext = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
  const handlePreviousClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <>
      {pokemonList[pokemonIndex] > 0 && (
        <input type="button" value="Previous" onClick={handlePreviousClick} />
      )}
      {pokemonList[pokemonIndex] < pokemonList.length - 1 && (
        <input type="button" value="Next" onClick={handleNextClick} />
      )}
    </>
  );
};

export default PreviousNext;
