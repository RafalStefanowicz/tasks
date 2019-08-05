import { AddTaskAction } from "../actions/addTask";
import { AddTasksAction } from "../actions/addTasks";
import { ShowModalAction } from "../actions/showModal";
import { HideModalAction } from "../actions/hideModal";

export enum ActionTypes {
  addTask = "addTask",
  addTasks = "addTasks",
  showModal = "showModal",
  hideModal = "hideModal"
}

export type Action =
  | AddTaskAction
  | ShowModalAction
  | HideModalAction
  | AddTasksAction;
