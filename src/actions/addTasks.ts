import { ActionTypes } from "../types/ActionTypes";
import { TaskType } from "../reducers/tasks";

export interface AddTasksAction {
  type: ActionTypes.addTasks;
  payload: TaskType[];
}

export const addTasks = (tasks: TaskType[]): AddTasksAction => ({
  type: ActionTypes.addTasks,
  payload: tasks
});
