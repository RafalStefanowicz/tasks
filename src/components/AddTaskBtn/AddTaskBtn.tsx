import React from "react";
import { connect } from "react-redux";

import { showModal } from "../../actions";
import { ModalTypes } from "../../types/ModalTypes";

interface IAddTaskBtnProps {
  showModal: typeof showModal;
}

const _AddTaskBtn = (props: IAddTaskBtnProps): JSX.Element => {
  const handleClick = () => {
    props.showModal({
      modalType: ModalTypes.createTask,
      modalProps: {}
    });
  };

  return <button onClick={handleClick}>Add Task</button>;
};

export const AddTaskBtn = connect(
  null,
  { showModal }
)(_AddTaskBtn);
