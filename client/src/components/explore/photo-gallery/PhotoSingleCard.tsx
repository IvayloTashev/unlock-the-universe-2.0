import { useActionState, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetOnePhoto } from "../../../hooks/usePhotos";
import { useAuthContext } from "../../../contexts/AuthContext";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useGetAllComments } from "../../../hooks/useComment";
import { useAddCommentAction } from "../../../hooks/useForm";
import type { CommentType } from "../../../types";

const PhotoSingleCard = () => {
  const { isAuthenticated } = useAuthContext();
  const { id } = useParams();
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
    setComments((prevComments: any) => [...prevComments, state.comment]);
  }
}, [state]);

  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen flex justify-center items-start px-4 py-10">
      <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative group">
          <img
            src={photo?.image}
            alt="photo"
            className="w-full max-w-[800px] rounded-t-2xl object-cover transition-transform duration-500"
          />
        </div>

        {photo?.description && (
          <div className="px-6 py-4 text-gray-300">
            <p className="text-lg leading-relaxed">{photo.description}</p>
          </div>
        )}

        <div className="border-t border-gray-700 px-6 py-4">
          <h2 className="text-xl font-semibold text-white mb-3">Comments</h2>
          <div className="space-y-3">
            {/* Map comments here */}
            {comments?.map((comment) => (
              <p key={comment._id} className="text-gray-400 italic">{comment.text}</p>
            ))}
          </div>

          {isAuthenticated && (
            <div>
              <div>
                <form
                  action={formAction}
                  className="text-white"
                >
                  <input
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full border border-amber-300"
                  />
                  <button type="submit">
                    <PaperAirplaneIcon className="w-5" />
                  </button>
                </form>
              </div>

              <button className="mt-20 text-xl font-semibold text-white mb-3">
                Add comment
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotoSingleCard;
