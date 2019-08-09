import { ActionTypes } from "../types/ActionTypes";
import { ITask } from "../reducers/tasks";

export interface IAddTaskAction {
  type: ActionTypes.addTask;
  payload: ITask;
}

export const addTask = (task: ITask): IAddTaskAction => {
  return { type: ActionTypes.addTask, payload: task };
};
