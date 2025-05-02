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

  



  
};


