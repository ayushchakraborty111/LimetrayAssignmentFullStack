import React from "react";
import { useTasks } from "../context/taskContext";

const TaskItem = ({ task, provided }) => {
  const { deleteTask, toggleStatus } = useTasks();

  return (
    <div
      className="card shadow-sm h-100"
      style={{ borderLeft: `5px solid ${task.color}` }}
    >
      <div className="card-body">
        <h5 className="card-title">{task.name}</h5>
        <p className="card-text">{task.description}</p>

        <span
          className={`badge ${
            task.status === "completed" ? "bg-success" : "bg-warning text-dark"
          }`}
        >
          {task.status}
        </span>

        <div className="mt-3 d-flex justify-content-between">
          <button
            className="btn btn-sm btn-outline-success"
            onClick={() => toggleStatus(task.id)}
          >
            {task.status === "completed" ? "Undo" : "Complete"}
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TaskItem);
