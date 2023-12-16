"use client";

import { deleteArticles } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React from "react";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {

    await deleteArticles(id);

    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5"
    >
      削除
    </button>
  );
};

export default DeleteButton;