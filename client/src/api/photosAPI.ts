import { del, get, post, put } from "./requester";

const BASE_URL = `http://localhost:3030/data/posts`;

export const getAllPosts = () => get(BASE_URL);

export const getOnePost = (postId: string) => get(`${BASE_URL}/${postId}`);

export const createPosts = (image: string) => post(BASE_URL, image);

export const deletePosts = (postId: string) => del(`${BASE_URL}/${postId}`);

export const updatePosts = (postId: string, postData: string) => put(`${BASE_URL}/${postId}`, postData);