import { ActionTypes } from "../types/ActionTypes";
import { PriorityTypes } from "../types/PriorityTypes";

import { Action } from "../types/ActionTypes";

export interface TaskType {
  id: number;
  description: string;
  date: string;
  priority: PriorityTypes;
  completed: boolean;
}

export const tasks = (state: TaskType[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.addTask:
      return [...state, action.payload];
    case ActionTypes.addTasks:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
