import { useState } from "react";
import { ListItem } from "./components/ListItem";
import { InputTask } from "./components/InputTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Create Todo",
      complete: true,
    },
    {
      text: "Create/delete tasks",
      complete: true,
    },
    {
      text: "Animation",
      complete: false,
    },
  ]);

  const onToggleComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              complete: !task.complete,
            }
          : task
      )
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prev) => prev.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = (text) => {
    setTasks((prev) => [
      ...prev,
      {
        text,
        complete: false,
      },
    ]);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>My ToDo</h4>
      </div>
      <InputTask onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            complete={task.complete}
            onToggleComplete={onToggleComplete}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
