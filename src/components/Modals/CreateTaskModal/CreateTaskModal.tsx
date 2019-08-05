import React, { useState } from "react";
import { connect } from "react-redux";

import { Modal } from "../Modal/Modal";
import { TaskForm } from "../../TaskForm/TaskForm";
import { PriorityTypes } from "../../../types/PriorityTypes";
import { addTask } from "../../../actions/addTask";
import { getDate } from "../../../helpers/helpers";

interface CreateTaskModalProps {
  addTask: typeof addTask;
}

const _CreateTaskModal = (props: CreateTaskModalProps) => {
  const [taskInput, setTaskInput] = useState<string>("");
  const [priority, setPriority] = useState<PriorityTypes>(PriorityTypes.low);
  const [date, setDate] = useState<string>(getDate());

  const onSubmit = (): void => {
    props.addTask({
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
    <Modal acceptText="Create" onSubmit={onSubmit}>
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

export const CreateTaskModal = connect(
  null,
  { addTask }
)(_CreateTaskModal);
