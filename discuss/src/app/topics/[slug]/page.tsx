import PostList from "@/components/posts/post-list";
import PostCreateForm from "@/components/posts/PostCreateForm";
import { fetchPostbyTopicSlug } from "@/lib/query/post";
import React from "react";

type TopicShowPageProps = {
  params: Promise<{ slug: string }>;
};

const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
  const slug = (await params).slug;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      
    </div>
  );
};


