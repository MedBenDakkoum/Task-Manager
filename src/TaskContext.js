import { createContext, useReducer, useEffect } from "react";
import { TaskReducer } from "./TaskReducer";

// Lazy initialization function to load tasks from localStorage
const init = () => {
  const storedTasks = localStorage.getItem("dakkoum");
  return storedTasks ? { tasks: JSON.parse(storedTasks) } : { tasks: [] };
};

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, {}, init); //  When you provide the third argument, the second argument {} is only a placeholder because the third argument (init) will override it and compute the initial state.

  // Persist tasks to localStorage on state change
  useEffect(() => {
    localStorage.setItem("dakkoum", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
