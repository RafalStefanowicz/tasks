import { combineReducers } from "redux";

import { tasks, TaskType } from "./tasks";
import { modal, ModalType } from "./modal";

export interface StoreState {
  tasks: TaskType[];
  modal: ModalType;
}

export const reducers = combineReducers<StoreState>({ tasks, modal });
