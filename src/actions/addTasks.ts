import { ActionTypes } from "../types/ActionTypes";
import { ITask } from "../reducers/tasks";

export interface IAddTasksAction {
  type: ActionTypes.addTasks;
  payload: ITask[];
}

export const addTasks = (tasks: ITask[]): IAddTasksAction => ({
  type: ActionTypes.addTasks,
  payload: tasks
});
