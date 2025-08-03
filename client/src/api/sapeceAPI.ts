import { get } from "./requester";

const BASE_URL = `http://localhost:3030/data`;

export const getAllCelestialBodies = () => get(`${BASE_URL}/celestialbodies`);
export const getCelestialBodybyId = (id: string) => get(`${BASE_URL}/celestialbodies/${id}`);

export const getAllAstronauts = () => get(`${BASE_URL}/astronauts`);
export const getAstronautById = (id: string) => get(`${BASE_URL}/astronauts/${id}`);

export const getAllMissions = () => get(`${BASE_URL}/missions`);
export const getMissionById = (id: string) => get(`${BASE_URL}/missions/${id}`);

