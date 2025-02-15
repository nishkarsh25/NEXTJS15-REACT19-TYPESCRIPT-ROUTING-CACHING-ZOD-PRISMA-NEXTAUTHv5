import type { Post } from "@prisma/client";
import { prisma } from "..";

export type PostWithData = Post & {
  topic: { slug: string };
  _count: { comments: number };
  user: { name: string | null };
};






