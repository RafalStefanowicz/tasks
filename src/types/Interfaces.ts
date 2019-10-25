import { ITask } from "../reducers/tasks";

export interface IDividedTasks {
  completed: ITask[];
  today: ITask[];
  future: ITask[];
}

export interface IRenderTasksContainerProps {
  filter: string;
}
