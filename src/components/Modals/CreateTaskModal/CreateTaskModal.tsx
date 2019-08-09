import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "uuid";

import { Modal } from "../Modal/Modal";
import { TaskForm } from "../../TaskForm/TaskForm";
import { addTask, editTask } from "../../../actions";
import { getDate } from "../../../helpers/helpers";
import { ITask } from "../../../reducers/tasks";
import { PriorityTypes } from "../../../types/PriorityTypes";

interface ICreateTaskModalProps {
  task: ITask;
  addTask: typeof addTask;
  editTask: typeof editTask;
}

const defaultProps = {
  task: {
    id: "",
    description: "",
    date: getDate(),
    priority: PriorityTypes.low,
    completed: false
  }
};

const _CreateTaskModal = ({
  task,
  addTask,
  editTask
}: ICreateTaskModalProps) => {
  const [taskInput, setTaskInput] = useState<string>(task.description);
  const [priority, setPriority] = useState<PriorityTypes>(task.priority);
  const [date, setDate] = useState<string>(task.date);

  const isEdit = !!task.id;
  let isInvalid = !taskInput.length;

  const onSubmit = (): void => {
    const newTask = {
      id: task.id || uuid(),
      description: taskInput,
      date: date,
      priority: priority,
      completed: task.completed
    };
    isEdit ? editTask(newTask) : addTask(newTask);
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
      heading={isEdit ? "Edit Task" : "Create Task"}
      confirmText={isEdit ? "Edit" : "Create"}
      onSubmit={onSubmit}
      isDisabled={isInvalid}
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

_CreateTaskModal.defaultProps = defaultProps;

export const CreateTaskModal = connect(
  null,
  { addTask, editTask }
)(_CreateTaskModal);
