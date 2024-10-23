import "./App.css";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskProvider>
        <TaskInput />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
