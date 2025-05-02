import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import PostShow from "@/components/posts/post-show";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

type PostShowPageProps = {
  params: Promise<{ slug: true; postId: string }>;
};

const PostShowPage: React.FC<PostShowPageProps> = async ({ params }) => {
  const { slug, postId } = await params;

  
};


