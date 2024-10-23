import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

function TaskInput() {
  const [newTask, setNewTask] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
    }
    setNewTask("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <div>
      <input
        name="dakkoum"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
