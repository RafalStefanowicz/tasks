import React from "react";
import { connect } from "react-redux";

import { CreateTaskModal } from "../CreateTaskModal/CreateTaskModal";
import { DeleteTaskModal } from "../DeleteTaskModal/DeleteTaskModal";
import { IModal } from "../../../reducers/modal";
import { ModalTypes } from "../../../types/ModalTypes";
import { IStoreState } from "../../../reducers/reducers";

interface IModalRootProps {
  modal: IModal;
}

export const _ModalRoot = ({ modal }: IModalRootProps): JSX.Element | null => {
  const { modalType, modalProps } = modal;

  switch (modalType) {
    case ModalTypes.createTask:
      return <CreateTaskModal task={modalProps.task} />;

    case ModalTypes.deleteTask:
      return <DeleteTaskModal task={modalProps.task} />;
  }

  return null;
};

const mapStateToProps = (state: IStoreState): { modal: IModal } => ({
  modal: state.modal
});

export const ModalRoot = connect(mapStateToProps)(_ModalRoot);
