"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useActionState } from "react";
import { createPost } from "@/actions/create-post";

type CreatePostFormProps = {
  slug: string;
};

const PostCreateForm: React.FC<CreatePostFormProps> = ({ slug }) => {
  const [formState, action] = useActionState(createPost.bind(null,slug), { errors: {} });
  
};


