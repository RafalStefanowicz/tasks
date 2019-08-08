import React, { useState } from "react";
import { connect } from "react-redux";

import { Modal } from "../Modal/Modal";
import { TaskForm } from "../../TaskForm/TaskForm";
import { addTask } from "../../../actions/addTask";
import { editTask } from "../../../actions/editTask";
import { getCreateTaskInitState, getDate } from "../../../helpers/helpers";
import { ITask } from "../../../reducers/tasks";
import { PriorityTypes } from "../../../types/PriorityTypes";

interface CreateTaskModalProps {
  task?: ITask;
  addTask: typeof addTask;
  editTask: typeof editTask;
}

const defaultProps = {
  task: {
    description: "",
    priority: PriorityTypes.low,
    date: getDate()
  }
};

const _CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  task,
  addTask,
  editTask
}) => {
  const init = getCreateTaskInitState(task);

  const [taskInput, setTaskInput] = useState<string>(init.description);
  const [priority, setPriority] = useState<PriorityTypes>(init.priority);
  const [date, setDate] = useState<string>(init.date);

  const onSubmit = (): void => {
    task
      ? editTask({
          id: task.id,
          description: taskInput,
          priority: priority,
          date: date
        })
      : addTask({
          description: taskInput,
          priority: priority,
          date: date
        });
  };

  const handleTaskTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTaskInput(e.currentTarget.value);
  };

  const handlePriorityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPriority(e.currentTarget.value as PriorityTypes);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLDataElement>): void => {
    setDate(e.currentTarget.value);
  };

  return (
    <Modal
      heading={task ? "Edit Task" : "Create Task"}
      confirmText="Create"
      onSubmit={onSubmit}
    >
      <TaskForm
        taskInput={taskInput}
        handleTaskTextChange={handleTaskTextChange}
        priority={priority}
        handlePriorityChange={handlePriorityChange}
        date={date}
        handleDateChange={handleDateChange}
      />
    </Modal>
  );
};

// _CreateTaskModal.defaultProps = defaultProps;

export const CreateTaskModal = connect(
  null,
  { addTask, editTask }
)(_CreateTaskModal);
