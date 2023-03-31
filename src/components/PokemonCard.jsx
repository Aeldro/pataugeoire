function PokemonCard({ pokemon }) {
  // console.log(props)
  return (
    <figure className="card">
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt="Image" className="card-img" />
      ) : (
        <p>????</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
