import { useReducer } from "react";
import { tasksReducer } from "../../../stores/tasksReducer";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export default function Tasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({ type: "added", id: nextId++, text: text });
  }

  function handleChange(task: Task) {
    dispatch({ type: "changed", task: task });
  }

  function handleDete(id: number) {
    dispatch({ type: "deleted", id: id });
  }

  return (
    <>
      <h2>Tasks feature</h2>
      <AddTask handleAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleDeleteTask={handleDete}
        handleEditTask={handleChange}
      />
    </>
  );
}

let nextId = 3;

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
