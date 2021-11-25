import styled from "styled-components";
import { useState } from "react";
import { TaskType, SubtaskType } from "../../../types";
import TaskDoneButton from "./TaskDoneButton";
import TaskSubs from "./TaskSubs";
import TaskMoveHandle from "./TaskMoveHandle";

interface TaskProps {
  className?: string;
  task: TaskType;
  addSubtask: (task: TaskType, subtask: string) => void;
  toggleCompleteTask: (task: TaskType) => void;
  toggleSubtaskCompletion: (task: TaskType, subtask: SubtaskType) => void;
}

const Task = ({
  className,
  task,
  addSubtask,
  toggleCompleteTask,
  toggleSubtaskCompletion,
}: TaskProps) => {
  const [subtask, setSubtask] = useState("");
  console.log(task.isCompleted);
  return (
    <div className={className}>
      <TaskMoveHandle setDisableDrag={() => console.log('blah')} />
      <div>
        <h3>{task.taskName}</h3>
        <TaskDoneButton
          isChecked={task.isCompleted}
          disabled={task.subtasks.length > 0}
          onClick={() => toggleCompleteTask(task)}
        />
      </div>
      <TaskSubs>
        {task.subtasks.map((sub) => (
          <li key={sub.id}>
            {sub.name}{" "}
            <TaskDoneButton
              isChecked={sub.isCompleted}
              onClick={() => toggleSubtaskCompletion(task, sub)}
            />
          </li>
        ))}
      </TaskSubs>
      {!task.isCompleted && (
        <input
          type="text"
          value={subtask}
          onChange={(e) => setSubtask(e.target.value)}
          placeholder="Enter subtask"
          onKeyDown={(e) => {
            if (e.key === "Enter" && subtask !== "") {
              addSubtask(task, subtask);
              setSubtask("");
            }
          }}
        />
      )}
    </div>
  );
};

const StyledTask = styled(Task)`
  background-color: ${(props) => props.task.color};
  color: white;
  border-radius: 15px;
  padding: var(--px26);
  transition: var(--transition);
  position: relative;
  padding-left: 50px;

  ${TaskMoveHandle} {
    position: absolute;
    left: 0;
  }

  ${(props) =>
    !props.task.isCompleted &&
    `
    &:hover {
      padding-bottom: calc(var(--px26) * 2.5);

      > input[type="text"] {
        opacity: 1;
      }
    }
  `}

  > div:not(${TaskSubs}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      font-size: var(--px23);
    }
  }

  > input[type="text"] {
    font-size: var(--px18);
    color: white;
    position: absolute;
    bottom: var(--px26);
    opacity: 0;
    transition: var(--transition);

    &::placeholder {
      color: white;
    }
  }

  ${(props) =>
    props.task.subtasks.length > 0 &&
    `
    padding-bottom: calc(var(--px26) * 2.5);

    > input[type="text"] {
      opacity: 1;
    }
  `}
`;

export default StyledTask;
