import { ActionTypes } from "../types/ActionTypes";

export interface IDeleteTaskAction {
  type: ActionTypes.deleteTask;
  payload: string;
}

export const deleteTask = (id: string): IDeleteTaskAction => ({
  type: ActionTypes.deleteTask,
  payload: id
});
