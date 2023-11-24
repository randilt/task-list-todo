import { useState } from "react";
import Task from "./Task";
import taskList from "./data";

export default function TaskList() {
  const [tasks, setTasks] = useState(taskList);
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <div className="functions">
            <Task name={task.name} done={task.done} />

            <button
              className="btn delete-btn"
              onClick={() => handleDelete(task.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
