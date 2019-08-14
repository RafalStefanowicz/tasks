import { ITask } from "../reducers/tasks";
import { IDividedTasks } from "../types/Interfaces";

export const divideTasks = (tasks: ITask[]): IDividedTasks => {
  const dividedTasks: IDividedTasks = {
    completed: [],
    today: [],
    future: []
  };

  tasks.forEach(task => {
    const today = new Date();
    const taskDate = new Date(task.date);
    if (task.completed) {
      dividedTasks.completed.push(task);
    } else if (taskDate <= today) {
      dividedTasks.today.push(task);
    } else {
      dividedTasks.future.push(task);
    }
  });

  return dividedTasks;
};

export const getDateInputFormat = (date: Date = new Date()): string => {
  const year = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  let day: string | number = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};

export const getTaskLC = (): ITask[] => {
  const tasksJson = localStorage.getItem("tasks");
  let tasks: ITask[] = [];
  if (tasksJson) {
    tasks = JSON.parse(tasksJson);
    tasks.forEach(task => {
      task.date = new Date(task.date);
    });
  }
  return tasks;
};

export const sortTasks = (tasks: ITask[]): ITask[] => {
  tasks.sort(
    (a: ITask, b: ITask): number => {
      const aDate = a.date.getTime();
      const bDate = b.date.getTime();
      return aDate - bDate;
    }
  );
  return tasks;
};

export const filterTasks = (tasks: ITask[], condition: string) =>
  tasks.filter((task: ITask) => {
    const description = task.description.toLocaleLowerCase();
    return description.includes(condition.toLowerCase());
  });

export const isValidLength = (description: string): boolean => {
  const words = description.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 18) return false;
  }
  return true;
};

// skróć treść zadania
