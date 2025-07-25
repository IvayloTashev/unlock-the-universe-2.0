import type { NasaPodType } from "../types";
import { get } from "./requester"

const NASA_API = `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`;

export const getNasaPodData = (): Promise<NasaPodType> => get(NASA_API);