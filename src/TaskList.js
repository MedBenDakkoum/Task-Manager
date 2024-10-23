import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function TaskList() {
  const { state, dispatch } = useContext(TaskContext);
  const { tasks } = state;
  return (
    <ul>
      {tasks.length === 0 ? (
        <p>No Tasks</p>
      ) : (
        tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              name="dakkoum"
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                dispatch({ type: "TOGGLE_TASK", payload: index });
              }}
            />
            {task.text}
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_TASK", payload: index });
              }}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;
