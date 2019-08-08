import uuid from "uuid";

import { ActionTypes } from "../types/ActionTypes";
import { PriorityTypes } from "../types/PriorityTypes";
import { ITask } from "../reducers/tasks";

export interface AddTaskAction {
  type: ActionTypes.addTask;
  payload: ITask;
}

export interface IAddTaskParams {
  description: string;
  priority: PriorityTypes;
  date: string;
}

export const addTask = (taskProps: IAddTaskParams): AddTaskAction => {
  const newTask = {
    ...taskProps,
    id: uuid(),
    completed: false
  };

  return { type: ActionTypes.addTask, payload: newTask };
};
