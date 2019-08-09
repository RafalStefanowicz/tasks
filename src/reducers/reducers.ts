import { combineReducers } from "redux";

import { tasks, ITask } from "./tasks";
import { modal, IModal } from "./modal";

export interface IStoreState {
  tasks: ITask[];
  modal: IModal;
}

export const reducers = combineReducers<IStoreState>({ tasks, modal });
