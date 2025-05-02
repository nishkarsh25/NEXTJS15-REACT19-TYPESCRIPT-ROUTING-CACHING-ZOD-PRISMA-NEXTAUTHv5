import React from "react";
import CommentShow from "./comment-show";
import { fetchCommentByPostId } from "@/lib/query/comment";

type CoommentListProps = {
  postId: string;
};

const CommentList: React.FC<CoommentListProps> = async ({ postId }) => {
  const comments = await fetchCommentByPostId(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId == null
  );

  
};


