import { combineReducers } from "redux";

import { tasks, ITask } from "./tasks";
import { modal, IModal } from "./modal";

export interface StoreState {
  tasks: ITask[];
  modal: IModal;
}

export const reducers = combineReducers<StoreState>({ tasks, modal });
