import { ActionTypes } from "../types/ActionTypes";
import { ITask } from "../reducers/tasks";

export interface AddTasksAction {
  type: ActionTypes.addTasks;
  payload: ITask[];
}

export const addTasks = (tasks: ITask[]): AddTasksAction => ({
  type: ActionTypes.addTasks,
  payload: tasks
});
