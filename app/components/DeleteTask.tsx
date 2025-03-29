"use client";

import { AiOutlineMinus } from "react-icons/ai";
import { deleteTodo } from "@/api";
import { useRouter } from "next/navigation";

interface DeleteTaskProps {
  id: string;
}

const DeleteTask : React.FC<DeleteTaskProps> = ({id}) => {
  const router = useRouter();

  const handleDeleteTodo = async () => {
    await deleteTodo(id);
    router.refresh();
  };

  return (
    <div>
      <button
        data-testid="delete-todo"
        onClick={handleDeleteTodo}
        className='btn btn-primary w-full'
      >
        Delete task <AiOutlineMinus className='ml-2' size={18} />
      </button>
    </div>
  );
};

export default DeleteTask;
