import { createContext } from "react";
import { Pokemon } from "../interfaces/Pokemon";

export const FavouritesContext = createContext<Pokemon[]>([])
