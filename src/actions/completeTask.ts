import { ActionTypes } from "../types/ActionTypes";

export interface ICompleteTask {
  type: ActionTypes.completeTask;
  payload: string;
}

export const completeTask = (id: string) => ({
  type: ActionTypes.completeTask,
  payload: id
});
