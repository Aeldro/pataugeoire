function PokemonCard(props){
    // console.log(props)
    const {imgScr, name} = props
    return (
        <figure className="card">
            {imgSrc? <img src={imgSrc} alt="Image" className="card-img"/> : <p>????</p>}
            <figcaption>{name}</figcaption>
        </figure>
    )
    
}
export default PokemonCard;