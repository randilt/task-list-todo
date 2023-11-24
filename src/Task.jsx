import { useState } from "react";

export default function Task(props) {
  const [completed, setCompleted] = useState(props.done);
  const handleOnClick = () => {
    setCompleted(!completed);
  };

  return (
    <div className="card-bg">
      <div>
        <h3>{props.name}</h3>
      </div>
      <div>
        <p
          onClick={handleOnClick}
          className={completed ? "done status" : "not-done status"}
        >
          {completed ? "Completed" : "Incomplete"}
        </p>
      </div>
    </div>
  );
}
