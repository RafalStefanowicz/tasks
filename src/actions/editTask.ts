import { PriorityTypes } from "../types/PriorityTypes";
import { ActionTypes } from "../types/ActionTypes";
import { ITask } from "../reducers/tasks";

export interface IEditTaskParams {
  id: string;
  description: string;
  priority: PriorityTypes;
  date: string;
}

export interface IEditTaskAction {
  type: ActionTypes.editTask;
  payload: ITask;
}

export const editTask = (taskProps: IEditTaskParams): IEditTaskAction => ({
  type: ActionTypes.editTask,
  payload: { ...taskProps, completed: false }
});
