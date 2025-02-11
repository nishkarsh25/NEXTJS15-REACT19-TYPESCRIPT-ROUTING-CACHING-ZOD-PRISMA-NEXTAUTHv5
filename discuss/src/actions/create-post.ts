"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createPostSchema = z.object({
    title:z.string().min(3),
    content:z.string().min(10),
})

type CreatePostFormState = {
    errors:{
        title?:string[],
        content?:string[],
        formError?:string[]
    }
}


