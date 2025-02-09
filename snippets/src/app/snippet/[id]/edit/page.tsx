import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";

const EditPageSnippet = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = Number((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) notFound();

  
  
};

