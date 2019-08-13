import React from "react";
import { connect } from "react-redux";

import { Modal } from "../Modal/Modal";

import { deleteTask } from "../../../actions";
import { ITask } from "../../../reducers/tasks";

interface IDeleteTaskModal {
  deleteTask: typeof deleteTask;
  task: ITask;
}
const _DeleteTaskModal = (props: IDeleteTaskModal): JSX.Element => {
  const { deleteTask, task } = props;
  return (
    <Modal
      heading="Do you want to delete task?"
      confirmText="Delete"
      onSubmit={() => {
        deleteTask(task.id);
      }}
    >
      <p>{` ${task.description}`}</p>
    </Modal>
  );
};

export const DeleteTaskModal = connect(
  null,
  { deleteTask }
)(_DeleteTaskModal);
