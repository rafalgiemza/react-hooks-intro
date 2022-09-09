export function PokemonsFavouritesList() {
  // TODO 4.2
  const favouritesContext = Array();

  if (favouritesContext.length === 0) return <h2>No favourites :(</h2>

  return (
    <div>
      <h2>Favourites: </h2>
      {favouritesContext.map(pokemon => (
        <div key={pokemon.id}>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  )
}