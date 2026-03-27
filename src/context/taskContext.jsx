import { createContext, useContext, useCallback } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useLocalStorage("filter", "all");

  const addTask = useCallback((task) => {
    setTodos((prev) => [...prev, task]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toggleStatus = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === "completed" ? "pending" : "completed",
              color: t.status === "completed" ? "orange" : "green",
            }
          : t,
      ),
    );
  }, []);

  const reorderTasks = useCallback((newList) => {
    setTodos(newList);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        todos,
        addTask,
        deleteTask,
        toggleStatus,
        filter,
        setFilter,
        reorderTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
