import { post, get, put, del } from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments'

export const createComment = (id: string, text: string) => post(BASE_URL, { id, text });

export const getAllComments = (id: string) => {
    const params = new URLSearchParams({
        where: `id="${id}"`,
        load: `author=_ownerId:users`
    })
    
    return get(`${BASE_URL}?${params.toString()}`);
}

export const getOneComment = (commentId: string) => get(`${BASE_URL}/${commentId}`);

export const updateComment = (commentId: string, text: string) => put(`${BASE_URL}/${commentId}`, text);

export const deleteComment = (commentId: string) => del(`${BASE_URL}/${commentId}`);