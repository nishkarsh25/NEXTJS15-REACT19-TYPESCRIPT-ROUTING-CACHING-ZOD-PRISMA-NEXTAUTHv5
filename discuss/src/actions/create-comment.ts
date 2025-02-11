"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createCommentSchema = z.object({
  content: z.string().min(3),
});



