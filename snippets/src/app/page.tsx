import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

// export const dynamic = "force-dynamic";//disabling the caching making it -> dynamic route or use the below method
// export const revalidate =0; //now u can npm run build to see it back a dynamic route hance ther will be no caching always fresh data will be available

const Home = async () => {
  const snippets = await prisma.snippet.findMany();
  console.log(snippets);
  

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between mb-4">
        <h1>Snippets</h1>
        <Link href="/snippet/new">
          <Button>New</Button>
        </Link>
      </div>
      {snippets.map((snippet) => (
        <div key={snippet.id} className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-2">
          <h1>{snippet.title}</h1>
          <Link href={`/snippet/${snippet.id}`}>
            <Button variant={'link'}>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};


