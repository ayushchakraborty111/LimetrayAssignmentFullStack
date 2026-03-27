import React from "react";
import { useTasks } from "../context/taskContext";

const TaskItem = ({ task, provided }) => {
  const { deleteTask, toggleStatus } = useTasks();

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="task"
      style={{
        borderLeft: `5px solid ${task.color}`,
        ...provided.draggableProps.style,
      }}
    >
      <h4>{task.name}</h4>
      <p>{task.description}</p>

      <button onClick={() => toggleStatus(task.id)}>
        {task.status === "completed" ? "Undo" : "Complete"}
      </button>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default React.memo(TaskItem);
