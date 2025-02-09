"use client"
import { createSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";

const CreateSnippetPage = () => {
  
  const [formStateData,action] = useActionState(createSnippet,{message:""}) 

  return (
    <form action={action}>
      <div>
        <Label>Title</Label>
        <Input type="text" name="title" id="title"></Input>
      </div>
      <div className="mb-4">
        <Label>Code</Label>
        <Textarea name="code" id="code"></Textarea>
      </div>
      {formStateData.message && <div className="p-2 bg-red-300 border-2 border-red-600">{formStateData.message}</div>}
      <Button type="submit" className="my-4">
        New
      </Button>
    </form>
  );
};


