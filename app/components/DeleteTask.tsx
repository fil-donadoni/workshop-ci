"use client";

import { AiOutlineMinus } from "react-icons/ai";
import { FormEventHandler, useState } from "react";
import { deleteTodo } from "@/api";
import { useRouter } from "next/navigation";


const DeleteTask = () => {
  const router = useRouter();

  const handleDeleteTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await deleteTodo('');
    router.refresh();
  };

  return (
    <div>
      <button
        data-testid="delete-todo"
        onClick={() => {}}
        className='btn btn-primary w-full'
      >
        Delete task <AiOutlineMinus className='ml-2' size={18} />
      </button>
    </div>
  );
};

export default DeleteTask;
