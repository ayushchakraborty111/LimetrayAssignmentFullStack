import { useTasks } from "../context/taskContext";
import { useMemo } from "react";

const Filter = () => {
  const { todos, filter, setFilter } = useTasks();

  const counts = useMemo(() => {
    return {
      all: todos.length,
      completed: todos.filter(t => t.status === "completed").length,
      pending: todos.filter(t => t.status === "pending").length
    };
  }, [todos]);

  const filters = [
    { key: "all", label: "All", icon: "📋" },
    { key: "completed", label: "Completed", icon: "✅" },
    { key: "pending", label: "Pending", icon: "⏳" }
  ];

  return (
    <div className="btn-group shadow-sm">
      {filters.map((f) => (
        <button
          key={f.key}
          className={`btn ${
            filter === f.key ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilter(f.key)}
        >
          {f.icon} {f.label} ({counts[f.key]})
        </button>
      ))}
    </div>
  );
};

export default Filter;