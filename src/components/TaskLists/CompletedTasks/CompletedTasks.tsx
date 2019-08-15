import React from "react";

import TaskList from "../TaskList/TaskList";
import { ITask } from "../../../reducers/tasks";

interface ICompletedTasksProps {
  tasks: ITask[];
}

export const CompletedTasks = ({ tasks }: ICompletedTasksProps) => {
  return (
    <>
      <TaskList tasks={tasks} renderAction={id => <></>} />
    </>
  );
};
