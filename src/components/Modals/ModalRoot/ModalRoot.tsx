import React from "react";
import { connect } from "react-redux";

import { CreateTaskModal } from "../CreateTaskModal/CreateTaskModal";
import { DeleteTaskModal } from "../DeleteTaskModal/DeleteTaskModal";
import { IModal } from "../../../reducers/modal";
import { ModalTypes } from "../../../types/ModalTypes";
import { StoreState } from "../../../reducers/reducers";

interface ModalRootProps {
  modal: IModal;
}

export const _ModalRoot = ({ modal }: ModalRootProps): JSX.Element | null => {
  const { modalType, modalProps } = modal;

  switch (modalType) {
    case ModalTypes.createTask:
      return <CreateTaskModal task={modalProps.task} />;

    case ModalTypes.deleteTask:
      return <DeleteTaskModal task={modalProps.task} />;
  }

  return null;
};

const mapStateToProps = (state: StoreState): { modal: IModal } => ({
  modal: state.modal
});

export const ModalRoot = connect(mapStateToProps)(_ModalRoot);
