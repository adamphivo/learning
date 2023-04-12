import { Task } from "./Tasks";
import { useState } from "react";

interface Props {
  task: Task;
  handleDeleteTask: (id: number) => void;
  handleEditTask: (task: Task) => void;
}

export default function TaskItem(props: Props): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>("");
  let taskContent;

  if (!isEditing) {
    taskContent = (
      <div>
        <p>{props.task.text}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  } else {
    taskContent = (
      <div>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        ></input>
        <button
          onClick={() => {
            setIsEditing(false);
            props.handleEditTask({ ...props.task, text: newText });
          }}
        >
          Save
        </button>
      </div>
    );
  }

  return (
    <li key={props.task.id}>
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={(e) =>
          props.handleEditTask({ ...props.task, done: e.target.checked })
        }
      ></input>
      {taskContent}
      <button onClick={() => props.handleDeleteTask(props.task.id)}>
        DELETE
      </button>
    </li>
  );
}
