import { DragDropContext } from "@hello-pangea/dnd";
import { useMemo } from "react";
import Column from "./Column";
import { useTasks } from "../context/taskContext";

const TaskList = () => {
  const { todos, reorderTasks, filter } = useTasks();

  const filteredTodos = useMemo(() => {
    if (filter === "completed")
      return todos.filter((t) => t.status === "completed");
    if (filter === "pending")
      return todos.filter((t) => t.status === "pending");
    return todos;
  }, [todos, filter]);

  const pendingTasks = useMemo(
    () => filteredTodos.filter((t) => t.status === "pending"),
    [filteredTodos],
  );

  const completedTasks = useMemo(
    () => filteredTodos.filter((t) => t.status === "completed"),
    [filteredTodos],
  );

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const list =
        source.droppableId === "pending"
          ? [...pendingTasks]
          : [...completedTasks];

      const [moved] = list.splice(source.index, 1);
      list.splice(destination.index, 0, moved);

      const updatedTodos = [
        ...(source.droppableId === "pending" ? list : pendingTasks),
        ...(source.droppableId === "completed" ? list : completedTasks),
      ];

      reorderTasks(updatedTodos);
      return;
    }

    const sourceList =
      source.droppableId === "pending"
        ? [...pendingTasks]
        : [...completedTasks];

    const destList =
      destination.droppableId === "pending"
        ? [...pendingTasks]
        : [...completedTasks];

    const [moved] = sourceList.splice(source.index, 1);

    moved.status = destination.droppableId;
    moved.color = moved.status === "completed" ? "green" : "orange";

    destList.splice(destination.index, 0, moved);

    const updatedTodos = [
      ...(destination.droppableId === "pending" ? destList : sourceList),
      ...(destination.droppableId === "completed" ? destList : sourceList),
    ];

    reorderTasks(updatedTodos);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="row mt-4">
        {(filter === "all" || filter === "pending") && (
          <Column title="Pending" tasks={pendingTasks} droppableId="pending" />
        )}

        {(filter === "all" || filter === "completed") && (
          <Column
            title="Completed"
            tasks={completedTasks}
            droppableId="completed"
          />
        )}
      </div>
    </DragDropContext>
  );
};

export default TaskList;
