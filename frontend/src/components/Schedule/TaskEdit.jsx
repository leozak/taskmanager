import { useContext, useEffect, useState } from "react";

const TaskEdit = ({ task, setTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const [pin, setPin] = useState(false);
  const [done, setDone] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setPin(task.pin);
      setDone(task.done);
      setDate(task.date);
      console.log("aqui", task.date);
    } else {
      setTitle("");
      setDescription("");
      setPriority(0);
      setPin(false);
      setDone(false);
      const _date = new Date();
      setDate(
        _date.getFullYear() +
          "-" +
          (_date.getMonth() + 1) +
          "-" +
          _date.getDate()
      );
    }
  }, []);
  return (
    <>
      <div>
        {/* TITLE: input */}
        <div className="mt-4">
          <label
            htmlFor="title"
            className="uppercase text-sm text-gray-600 font-bold hover:cursor-pointer"
          >
            Título
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* DESCRIPTION: textarea */}
        <div className="mt-4">
          <label
            htmlFor="description"
            className="uppercase text-sm text-gray-600 font-bold hover:cursor-pointer"
          >
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            className="w-full h-32 bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        {/* PRIORITY: select */}
        <div className="mt-4">
          <label
            htmlFor="priority"
            className="uppercase text-sm text-gray-600 font-bold"
          >
            Prioridade
          </label>
          <select
            id="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg hover:cursor-pointer focus:outline-none focus:shadow-outline"
          >
            <option value="0">Obrigatória</option>
            <option value="1">Opcional</option>
            <option value="2">Talvez</option>
          </select>
        </div>

        {/* DATE: input */}
        <div className="mt-4">
          <label
            htmlFor="date"
            className="uppercase text-sm text-gray-600 font-bold mr-4"
          >
            Data
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* PIN: checkbox */}
        <div className="mt-7">
          <label
            htmlFor="pin"
            className="uppercase text-sm text-gray-600 font-bold flex items-center hover:cursor-pointer"
          >
            <input
              id="pin"
              name="pin"
              type="checkbox"
              checked={pin}
              onChange={(e) => setPin(e.target.checked)}
              className="accent-cyan-800 w-5 h-5 mr-3 hover:cursor-pointer"
            />
            Fixar tarefa
          </label>
        </div>

        {/* DONE: checkbox */}
        <div className="mt-4">
          <label
            htmlFor="done"
            className="uppercase text-sm text-gray-600 font-bold flex items-center hover:cursor-pointer"
          >
            <input
              id="done"
              name="done"
              type="checkbox"
              checked={done}
              onChange={(e) => setDone(e.target.checked)}
              className="accent-cyan-800 w-5 h-5 mr-3 hover:cursor-pointer"
            />
            Concluida
          </label>
        </div>
      </div>
      <div className="mt-10">{JSON.stringify(task)}</div>
      <div className="mt-10">{date}</div>
    </>
  );
};

export default TaskEdit;
