"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
  console.log(id, code);

  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  revalidatePath(`/snippet/${id}`);
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  redirect("/");
};

export const createSnippet = async (
  prevState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title != "string" || title.length < 4) {
      return { message: "Title is required and must be longer" };
    }

    if (typeof code != "string" || code.length < 8) {
      return { message: "Code is required and must be longer" };
    }

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    revalidatePath("/");
    console.log("Snippet created", snippet);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }

    return { message: "Some internal server error" };
  }
  
  redirect("/");
};
