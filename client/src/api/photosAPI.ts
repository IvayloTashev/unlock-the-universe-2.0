import type { PhotosType } from "../types";
import { del, get, post, put } from "./requester";

const BASE_URL = `http://localhost:3030/data/photos`;

export const getAllPhotos = () => get(BASE_URL);

export const getOnePhoto = (postId: string) => get(`${BASE_URL}/${postId}`);

export const createPhoto = (image: string) => post(BASE_URL, image);

export const deletePhoto = (postId: string) => del(`${BASE_URL}/${postId}`);

export const updatePhoto = (postId: string, postData: string) => put(`${BASE_URL}/${postId}`, postData);