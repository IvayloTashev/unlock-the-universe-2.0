import { useActionState, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetOnePhoto } from "../../../hooks/usePhotos";
import { useAuthContext } from "../../../contexts/AuthContext";
import {
  PaperAirplaneIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import {
  useDeleteComment,
  useEditComment,
  useGetAllComments,
} from "../../../hooks/useComment";
import { useAddCommentAction } from "../../../hooks/useForm";
import type { CommentType } from "../../../types";
import { getAllComments } from "../../../api/commentsAPI";
import { motion } from "motion/react";

const PhotoSingleCard = () => {
  const { userId, isAuthenticated } = useAuthContext();
  const { id } = useParams();
  const { handleDelete } = useDeleteComment(id!);
  const { handleEdit } = useEditComment(id!);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState("");
  const photo = useGetOnePhoto(id!);
  const addComment = useAddCommentAction(id!);
  const [allComments] = useGetAllComments(id!);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [state, formAction, isPending] = useActionState(addComment, null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (allComments) {
      setComments(allComments);
    }
  }, [allComments]);

  useEffect(() => {
    if (state?.success && state.comment) {
      setComment("");
      (async () => {
        const freshComments = (await getAllComments(id!)) as CommentType[];
        setComments(freshComments);
      })();
    }
  }, [state]);

  return (
    <motion.section
      className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen flex justify-center items-start px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative group">
          <img
            src={photo?.image}
            alt="photo"
            className="w-full max-w-[800px] rounded-t-2xl object-cover transition-transform duration-500 relative"
          />
        </div>

        <div className="border-t border-gray-800 px-6 py-6">
          <h2 className="text-xl font-semibold text-white mb-3">Comments</h2>
          <div className="space-y-4">
            {comments?.map((comment) => (
              <div
                key={comment._id}
                className="flex items-start justify-between bg-gray-800/50 rounded-xl px-4 py-3 hover:bg-gray-800/70 transition-colors"
              >
                {editingCommentId === comment._id ? (
                  <div className="flex flex-1 gap-2">
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="flex-1 px-2 py-1 rounded bg-gray-700 text-white border border-gray-600"
                    />
                    <button
                      className="px-3 py-1 rounded bg-green-600 hover:scale-105 cursor-pointer font-bold text-white"
                      onClick={() =>
                        handleEdit(comment._id, editedText, setComments).then(
                          () => setEditingCommentId(null)
                        )
                      }
                    >
                      Save
                    </button>
                    <button
                      className="px-3 py-1 rounded bg-red-600/60 hover:scale-105 cursor-pointer font-bold text-white"
                      onClick={() => setEditingCommentId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-300 text-sm leading-relaxed flex-1 mr-4 break-words whitespace-normal">
                      <span className="font-medium text-amber-400">
                        {comment.author?.username}
                      </span>
                      : {comment.text}
                    </p>

                    {comment._ownerId === userId && (
                      <div className="flex gap-2">
                        <button
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          onClick={() => {
                            setEditingCommentId(comment._id);
                            setEditedText(comment.text);
                          }}
                        >
                          <PencilSquareIcon className="w-5 h-5" />
                        </button>
                        <button
                          className="text-red-400 hover:text-red-300 transition-colors"
                          onClick={() => handleDelete(comment._id, setComments)}
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {isAuthenticated && (
            <div className="mt-6">
              <form action={formAction} className="flex items-center gap-3">
                <input
                  type="text"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 px-4 py-2 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all break-words"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 transition-colors"
                >
                  <PaperAirplaneIcon className="w-5 h-5 text-black" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default PhotoSingleCard;
