import { useEffect, useState } from "react";
import { createComment, getAllComments, getOneComment } from "../api/commentsAPI";
import type { CommentType } from "../types";

export function useCreateComment() {
    const commentCreateHandler = (id: string, comment: string) => createComment(id, comment);

    return commentCreateHandler;
}

export function useGetAllComments(id: string): [CommentType[] | null, (comments: CommentType[]) => void] {
    const [comments, setComments] = useState<CommentType[] | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAllComments(id) as CommentType[];
                setComments(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, [id]);

    return [comments, setComments];
}

export function useGetOneComment(commentId: string) {
    const [comment, setComment] = useState<CommentType | null>(null);

    useEffect(() => {
        (async () => {

            try {
                const result = await getOneComment(commentId) as CommentType;
                setComment(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return [comment];
}