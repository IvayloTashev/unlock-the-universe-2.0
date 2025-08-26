import { useEffect, useState } from "react";
import { createComment, deleteComment, getAllComments, getOneComment, updateComment } from "../api/commentsAPI";
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

export function useDeleteComment(photoId: string) {
    const handleDelete = async (
        commentId: string,
        setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
    ) => {
        const confirmation = confirm(`Do you want to delete this comment?`);

        if (!confirmation) {
            return;
        }

        try {
            setComments((prev) => prev.filter((c) => c._id !== commentId));

            await deleteComment(commentId);

        } catch (err: any) {
            console.error(err.message);
        }
    };

    return { handleDelete };
}

export function useEditComment(photoId: string) {
    const handleEdit = async (
      commentId: string,
      newText: string,
      setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
    ) => {
      try {
        setComments((prev) =>
          prev.map((c) =>
            c._id === commentId ? { ...c, text: newText } : c
          )
        );
  
        await updateComment(commentId, newText);
  
      } catch (err: any) {
        console.error(err.message);
      }
    };
  
    return { handleEdit };
  }
