import { fetchCommentByPostId } from "@/lib/query/comment";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import CommentCreateForm from "./comment-create-form";

type CommentShowProps = {
  postId: string;
  commentId: string;
};

const CommentShow: React.FC<CommentShowProps> = async ({
  postId,
  commentId,
}) => {
  const comments = await fetchCommentByPostId(postId);

  const comment = comments.find((c) => c.id === commentId);
  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);

  return (
    <div className="m-4 p-4 border">
      
    </div>
  );
};


