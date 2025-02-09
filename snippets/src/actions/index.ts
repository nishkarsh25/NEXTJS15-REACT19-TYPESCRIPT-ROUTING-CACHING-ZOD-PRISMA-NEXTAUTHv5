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




