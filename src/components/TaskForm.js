import { useState } from "react";
import { useTasks } from "../context/taskContext";

const TaskForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Task name cannot be empty!");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      name,
      description,
      status: "pending",
      color: "orange",
      position: Date.now()
    };

    addTask(newTask);
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;