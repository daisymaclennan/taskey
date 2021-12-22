import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header/Header";
import NewTaskMenu from "../components/NewTaskMenu/NewTaskMenu";
import Task from "../components/TaskGrid/Task/Task";
import TaskColumnHeader from "../components/TaskGrid/TaskColumnHeader";
import TaskColumns from "../components/TaskGrid/TaskColumns";
import TaskGrid from "../components/TaskGrid/TaskGrid";
import { SubtaskType, TaskType } from "../types";

const Home: NextPage = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [newTaskMenuActive, setNewTaskMenuActive] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (taskName: string, color: string) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), taskName, color, subtasks: [], isCompleted: false },
    ]);
  };

  const addSubtask = (task: TaskType, subtaskName: string) => {
    const subs = task.subtasks || [];
    let copyArr = [...tasks];
    const myItemIndex = tasks.findIndex((element) => element.id === task.id);

    copyArr[myItemIndex] = {
      ...task,
      subtasks: [
        ...subs,
        {
          id: uuidv4(),
          name: subtaskName,
          isCompleted: false,
        },
      ],
    };

    setTasks(copyArr);
  };

  const toggleCompleteTask = (task: TaskType) => {
    // const subs = task.subtasks || [];
    let copyArr = [...tasks];
    const myItemIndex = tasks.findIndex((element) => element.id === task.id);

    copyArr[myItemIndex] = {
      ...task,
      isCompleted: !task.isCompleted,
      // subtasks: subs,
    };

    setTasks(copyArr);
  };

  const toggleSubtaskCompletion = (task: TaskType, subtask: SubtaskType) => {
    let copySubs = [...task.subtasks];

    const subtaskIndex = task.subtasks.findIndex(
      (element) => element.id === subtask.id
    );

    copySubs[subtaskIndex] = {
      id: subtask.id,
      name: subtask.name,
      isCompleted: !subtask.isCompleted,
    };

    const unCompletedSubs = copySubs.filter((sub) => sub.isCompleted === false);

    if (unCompletedSubs.length < 1) toggleCompleteTask(task);

    let copyArr = [...tasks];
    const myItemIndex = tasks.findIndex((element) => element.id === task.id);
    copyArr[myItemIndex] = {
      ...task,
      subtasks: copySubs,
    };

    setTasks(copyArr);
  };

  console.log(tasks);
  return (
    <div>
      <Header
        setNewTaskMenuActive={setNewTaskMenuActive}
        newTaskMenuActive={newTaskMenuActive}
        headerRef={headerRef}
      />
      <AnimatePresence>
        {newTaskMenuActive && (
          <NewTaskMenu
            addTask={addTask}
            setNewTaskMenuActive={setNewTaskMenuActive}
            headerRef={headerRef}
          />
        )}
      </AnimatePresence>

      <TaskColumns>
        <div>
          <TaskColumnHeader>To do:</TaskColumnHeader>
          <TaskGrid id="unCompletedTasks">
            {tasks
              .filter((t) => t.isCompleted === false)
              .map((t) => (
                <Task
                  key={t.id}
                  task={t}
                  addSubtask={addSubtask}
                  toggleCompleteTask={toggleCompleteTask}
                  toggleSubtaskCompletion={toggleSubtaskCompletion}
                />
              ))}
          </TaskGrid>
        </div>

        <div>
          <TaskColumnHeader>Completed:</TaskColumnHeader>
          <TaskGrid id="completedTasks">
            {tasks
              .filter((t) => t.isCompleted === true)
              .map((t) => (
                <Task
                  key={t.id}
                  task={t}
                  addSubtask={addSubtask}
                  toggleCompleteTask={toggleCompleteTask}
                  toggleSubtaskCompletion={toggleSubtaskCompletion}
                />
              ))}
          </TaskGrid>
        </div>
      </TaskColumns>
    </div>
  );
};

export default Home;
