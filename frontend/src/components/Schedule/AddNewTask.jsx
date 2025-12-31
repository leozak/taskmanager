import { useState, useContext } from "react";
import { FaPlus } from "react-icons/fa";

import Modal from "../Modal/Modal";
import TaskEdit from "./TaskEdit";

import { DateContext } from "../../context/DateContext";

const AddNewTask = () => {
  const [openForm, setOpenForm] = useState(false);

  const { year, month, day } = useContext(DateContext);

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: 0,
    pin: false,
    done: false,
    date: `${year}-${month + 1}-${day}`,
  });

  const handleAddNewTodo = () => {
    setOpenForm(true);
  };

  return (
    <>
      <button
        title="Add New Todo"
        onClick={handleAddNewTodo}
        className="absolute bottom-8 active:bottom-7 right-8 hover:cursor-pointer"
      >
        <FaPlus className="w-16 h-16 p-4 bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 text-cyan-200 transition-colors rounded-full shadow-md active:shadow shadow-gray-900" />
      </button>

      {openForm && (
        <Modal
          title="Adicionar Nova Tarefa"
          callbackClose={() => setOpenForm(false)}
        >
          <TaskEdit task={task} setTask={setTask} />
        </Modal>
      )}
    </>
  );
};

export default AddNewTask;
