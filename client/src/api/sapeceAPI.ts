import { get } from "./requester";

const BASE_URL = `http://localhost:3030/data`;

export const getAllCelestialBodies = () => get(`${BASE_URL}/celestialbodies`);
export const getCelestialBodybyId = (id: string) => get(`${BASE_URL}/celestialbodies/${id}`);

export const getAllAstronauts = () => get(`${BASE_URL}/astronauts`);
export const getAstronautbyId = (id: string) => get(`${BASE_URL}/astronauts/${id}`);

