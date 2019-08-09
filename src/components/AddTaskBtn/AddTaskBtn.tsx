import React from "react";
import { connect } from "react-redux";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { ActionBtn } from "../ActionBtn/ActionBtn";
import { showModal } from "../../actions";
import { ModalTypes } from "../../types/ModalTypes";

interface IAddTaskBtnProps {
  showModal: typeof showModal;
}

const _AddTaskBtn = (props: IAddTaskBtnProps): JSX.Element => {
  const handleAdd = () => {
    props.showModal({
      modalType: ModalTypes.createTask,
      modalProps: {}
    });
  };

  return (
    <span>
      <ActionBtn icon={faPlusCircle} handleAction={handleAdd} />
    </span>
  );
};

export const AddTaskBtn = connect(
  null,
  { showModal }
)(_AddTaskBtn);
