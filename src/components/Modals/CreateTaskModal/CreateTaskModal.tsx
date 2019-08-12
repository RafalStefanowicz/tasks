import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "uuid";

import { Modal } from "../Modal/Modal";
import { TaskForm } from "../../TaskForm/TaskForm";
import { addTask, editTask } from "../../../actions";
import { getDateInputFormat, isValidLength } from "../../../helpers/helpers";
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
    date: new Date(),
    priority: PriorityTypes.low,
    completed: false
  }
};

const _CreateTaskModal = ({
  task,
  addTask,
  editTask
}: ICreateTaskModalProps) => {
  const initDate = getDateInputFormat(task.date);
  const [taskInput, setTaskInput] = useState<string>(task.description);
  const [priority, setPriority] = useState<PriorityTypes>(task.priority);
  const [date, setDate] = useState<string>(initDate);

  const isEditTask = !!task.id;
  let isInvalidForm = !taskInput.length;

  const onSubmit = (): void => {
    const newTask = {
      id: task.id || uuid(),
      description: taskInput,
      date: new Date(date),
      priority: priority,
      completed: task.completed
    };

    isEditTask ? editTask(newTask) : addTask(newTask);
  };

  const handleTaskTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const inputValue = e.currentTarget.value;

    if (!isValidLength(inputValue)) return alert("Maximum length of the word");
    setTaskInput(inputValue);
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
      heading={isEditTask ? "Edit Task" : "Create Task"}
      confirmText={isEditTask ? "Edit" : "Create"}
      onSubmit={onSubmit}
      isDisabled={isInvalidForm}
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
