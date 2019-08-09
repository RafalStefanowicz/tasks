import { IAddTasksAction } from "../actions/addTasks";
import { IAddTaskAction } from "../actions/addTask";
import { IEditTaskAction } from "../actions/editTask";
import { IShowModalAction } from "../actions/showModal";
import { IHideModalAction } from "../actions/hideModal";
import { ICompleteTask } from "../actions/completeTask";
import { IDeleteTaskAction } from "../actions/deleteTask";

export enum ActionTypes {
  addTasks = "ADD_TASKS",
  addTask = "ADD_TASK",
  editTask = "EDIT_TASK",
  deleteTask = "DELETE_TASK",
  completeTask = "COMPLETE_TASK",
  showModal = "SHOW_MODAL",
  hideModal = "HIDE_MODAL"
}

export type Action =
  | IAddTasksAction
  | IAddTaskAction
  | IEditTaskAction
  | IDeleteTaskAction
  | ICompleteTask
  | IShowModalAction
  | IHideModalAction;
