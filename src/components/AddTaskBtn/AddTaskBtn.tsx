import React from "react";
import { connect } from "react-redux";

import { showModal } from "../../actions/showModal";
import { ModalTypes } from "../../types/ModalTypes";

interface AddTaskBtnProps {
  showModal: typeof showModal;
}

const _AddTaskBtn = (props: AddTaskBtnProps): JSX.Element => {
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
