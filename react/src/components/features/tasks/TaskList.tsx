import type { Task } from "./Tasks";
import TaskItem from "./Task";

interface Props {
  tasks: Task[];
  handleDeleteTask: (id: number) => void;
  handleEditTask: (task: Task) => void;
}

export default function TaskList(props: Props) {
  const tasks: JSX.Element[] = props.tasks.map((t) => (
    <TaskItem
      handleDeleteTask={props.handleDeleteTask}
      handleEditTask={props.handleEditTask}
      task={t}
      key={t.id}
    />
  ));

  return <ul>{tasks}</ul>;
}
