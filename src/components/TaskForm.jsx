import { useState } from "react";
import { useTasks } from "../context/taskContext";
import { toast } from "react-toastify";

const TaskForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Task name cannot be empty!");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      name,
      description,
      status: "pending",
      color: "orange",
      position: Date.now(),
    };

    addTask(newTask);
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="row g-2 mb-4">
      <div className="col-md-4">
        <input
          className="form-control"
          placeholder="Task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="col-md-5">
        <input
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="col-md-3 d-grid">
        <button className="btn btn-primary">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
