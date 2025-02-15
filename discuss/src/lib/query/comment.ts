import type { Comment } from "@prisma/client";
import { prisma } from "..";
import { cache } from "react";

type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};


