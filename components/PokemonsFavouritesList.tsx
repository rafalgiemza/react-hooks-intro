import { useContext, useEffect } from "react";
import { FavouritesContext } from "./FavouritesContext";

export function PokemonsFavouritesList() {
  const favouritesContext = useContext(FavouritesContext);

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