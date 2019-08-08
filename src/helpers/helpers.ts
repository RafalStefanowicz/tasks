import { ITask } from "../reducers/tasks";
import { IDividedTasks } from "../types/Interfaces";
import { PriorityTypes } from "../types/PriorityTypes";
import { IAddTaskParams } from "../actions/addTask";
import { IEditTaskParams } from "../actions/editTask";

export const getDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  let day: number | string = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};

export const dateIsToday = (date: string): boolean => date === getDate();

export const divideTasks = (tasks: ITask[]): IDividedTasks => {
  const dividedTasks: IDividedTasks = {
    completed: [],
    today: [],
    future: []
  };

  tasks.forEach(task => {
    if (task.completed) {
      dividedTasks.completed.push(task);
    } else if (dateIsToday(task.date)) {
      dividedTasks.today.push(task);
    } else {
      dividedTasks.future.push(task);
    }
  });

  return dividedTasks;
};

export const getCreateTaskInitState = (
  editTask: IEditTaskParams | undefined
): IAddTaskParams => {
  const initialState = {
    description: editTask ? editTask.description : "",
    priority: editTask ? editTask.priority : PriorityTypes.low,
    date: editTask ? editTask.date : getDate()
  };

  return initialState;
};
