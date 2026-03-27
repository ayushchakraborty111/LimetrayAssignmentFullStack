import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Filter from "./components/Filter";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/Theme";
import { TaskProvider } from "./context/taskContext";

function App() {
  return (
    <TaskProvider>
      <ToastContainer position="top-center" autoClose={5000}/>
      <div className="container py-4">
        <h1 className="text-center mb-4">Task Manager</h1>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <ThemeToggle />
          <Filter />
        </div>

        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
