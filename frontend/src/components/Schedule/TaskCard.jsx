import { useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import TaskCardDetails from "./TaskCardDetails";

const TaskCard = ({ task }) => {
  return (
    <>
      <div
        key={task.id}
        className={`
        ${task.priority === 0 ? "border-red-700" : ""}
        ${task.priority === 1 ? "border-yellow-600" : ""}
        ${task.priority === 2 ? "border-gray-500" : ""}
        flex rounded-md overflow-hidden border mb-1 scale-95 transition-all hover:bg-gray-300 hover:cursor-pointer hover:scale-100`}
      >
        <div
          className={`
        ${task.priority === 0 ? "bg-red-700" : ""}
        ${task.priority === 1 ? "bg-yellow-600" : ""}
        ${task.priority === 2 ? "bg-gray-500" : ""}
        w-2`}
        ></div>
        <div className="flex-col">
          <div className="py-2 px-2">{task.title}</div>
          <div className="text-xs text-gray-400">
            <AiFillCaretDown />
          </div>
        </div>
      </div>

      <TaskCardDetails task={task} />
    </>
  );
};

export default TaskCard;
