import type { PhotosType } from "../types";
import { del, get, post } from "./requester";

const BASE_URL = `http://localhost:3030/data/photos`;

export const getAllPhotos = () => get(BASE_URL);

export const getOnePhoto = (id: string) => get(`${BASE_URL}/${id}`);

export const createPhoto = (image: string) => post(BASE_URL, image);

export const deletePhoto = (id: string) => del(`${BASE_URL}/${id}`);
