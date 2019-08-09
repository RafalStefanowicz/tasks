import { ActionTypes } from "../types/ActionTypes";
import { ITask } from "../reducers/tasks";

export interface IEditTaskAction {
  type: ActionTypes.editTask;
  payload: ITask;
}

export const editTask = (task: ITask): IEditTaskAction => ({
  type: ActionTypes.editTask,
  payload: task
});
