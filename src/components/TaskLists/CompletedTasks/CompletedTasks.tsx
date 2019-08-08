import React from "react";

import TaskList from "../TaskList";
import { ITask } from "../../../reducers/tasks";

interface CompletedTasksProps {
  tasks: ITask[];
}

export const CompletedTasks = (props: CompletedTasksProps) => {
  return (
    <>
      <h1>Completed Tasks</h1>
      <TaskList tasks={props.tasks} renderAction={id => <></>} />
    </>
  );
};
