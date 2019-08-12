import React from "react";

import TaskList from "../TaskList/TaskList";
import { ITask } from "../../../reducers/tasks";

interface ICompletedTasksProps {
  tasks: ITask[];
}

export const CompletedTasks = (props: ICompletedTasksProps) => {
  return (
    <>
      <h1>Completed Tasks</h1>
      <TaskList tasks={props.tasks} renderAction={id => <></>} />
    </>
  );
};
