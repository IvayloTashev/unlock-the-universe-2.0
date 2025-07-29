import { get } from "./requester";

const BASE_URL = `http://localhost:3030/data`;

export const getAllbyType = (name: string) => get(`${BASE_URL}/${name}`);

export const getOnebyId = (id: string) => get(`${BASE_URL}/celestialbodies/${id}`);