1. Where is bulbasaur? 
  - 1.1 you need hook useState in [PokemonsList](/components/PokemonsList.tsx)
  - 1.2 implement handleOnSearchChange

2. Choose Bulbasaur!
  - 2.1 you need hook useState in [PokemonsShowTime](/components/PokemonsShowTime.tsx)
  - 2.2 and use it in [PokemonsList](/components/PokemonsList.tsx) 

3. Catch all pokemons!
  - 3.1 you need hook useState to store all pokemons in [PokemonsShowTime](/components/PokemonsShowTime.tsx)
  - 3.2 you need hook useEffect to store fetched pokemons

4. Too much pokemons? 
  - 4.1 you need hook useState to store favourites pokemons in [PokemonsShowTime](/components/PokemonsShowTime.tsx)
  - 4.2 you need hook useContext to consume context from [FavouritesContext](/components/FavouritesContext.tsx)
  - 4.3 implement logic of function handleOnFavouriteChange in [PokemonsList](/components/PokemonsList.tsx) 

5. How about custom pokemon?
  - 5.1 create new file under hooks/ directory, e.g. usePokemonList.ts
   - 5.2 move hooks from PokemonList to custom hook
   - 5.3 consume result in PokemonList
 