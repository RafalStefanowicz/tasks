import { ActionTypes } from "../types/ActionTypes";
import { PriorityTypes } from "../types/PriorityTypes";

import { Action } from "../types/ActionTypes";

export interface ITask {
  id: string;
  description: string;
  date: Date;
  priority: PriorityTypes;
  completed: boolean;
}

export const tasks = (state: ITask[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.addTask:
      return [...state, action.payload];

    case ActionTypes.addTasks:
      return [...state, ...action.payload];

    case ActionTypes.completeTask:
      return state.map((task: ITask) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

    case ActionTypes.editTask:
      return state.map((task: ITask) =>
        task.id === action.payload.id ? action.payload : task
      );

    case ActionTypes.deleteTask:
      return state.filter((task: ITask) => task.id !== action.payload);

    default:
      return state;
  }
};
