import { ActionTypes } from "../types/ActionTypes";
import { PriorityTypes } from "../types/PriorityTypes";
import { TaskType } from "../reducers/tasks";
import { UniqueId } from "../helpers/helpers";

const uniqueId = new UniqueId();

export interface AddTaskAction {
  type: ActionTypes.addTask;
  payload: TaskType;
}

interface AddTaskArguments {
  description: string;
  priority: PriorityTypes;
  date: string;
}

export const addTask = ({
  description,
  priority,
  date
}: AddTaskArguments): AddTaskAction => {
  const newTask = {
    description,
    priority,
    date,
    id: uniqueId.getId(),
    completed: false
  };

  return { type: ActionTypes.addTask, payload: newTask };
};
