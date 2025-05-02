import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { PostWithData } from "@/lib/query/post";

type PostListProps = {
  fetchData: () => Promise<PostWithData[]>;
};

const PostList: React.FC<PostListProps> = async ({ fetchData }) => {
  const posts = await fetchData();

  console.log(posts);

  
};


