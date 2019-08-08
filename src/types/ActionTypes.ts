import { AddTaskAction } from "../actions/addTask";
import { AddTasksAction } from "../actions/addTasks";
import { ShowModalAction } from "../actions/showModal";
import { HideModalAction } from "../actions/hideModal";
import { ICompleteTask } from "../actions/completeTask";
import { IEditTaskAction } from "../actions/editTask";
import { IDeleteTaskAction } from "../actions/deleteTask";

export enum ActionTypes {
  addTask = "ADD_TASK",
  addTasks = "ADD_TASKS",
  editTask = "EDIT_TASK",
  deleteTask = "DELETE_TASK",
  completeTask = "COMPLETE_TASK",
  showModal = "SHOW_MODAL",
  hideModal = "HIDE_MODAL"
}

export type Action =
  | AddTaskAction
  | AddTasksAction
  | ICompleteTask
  | IEditTaskAction
  | IDeleteTaskAction
  | ShowModalAction
  | HideModalAction;
