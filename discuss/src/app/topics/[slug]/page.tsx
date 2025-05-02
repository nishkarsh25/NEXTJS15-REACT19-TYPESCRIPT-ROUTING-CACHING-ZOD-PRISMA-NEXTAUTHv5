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
      <div className="col-span-3">
        <h1 className="font-bold text-2xl">{slug}</h1>
        <PostList fetchData={() => fetchPostbyTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;
