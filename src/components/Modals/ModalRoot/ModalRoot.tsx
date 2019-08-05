import React from "react";
import { connect } from "react-redux";

import { CreateTaskModal } from "../CreateTaskModal/CreateTaskModal";
import { ModalType } from "../../../reducers/modal";
import { ModalTypes } from "../../../types/ModalTypes";
import { StoreState } from "../../../reducers/reducers";

interface ModalRootProps {
  modal: ModalType;
}

export const _ModalRoot = (props: ModalRootProps): JSX.Element | null => {
  const {
    modal: { modalType }
  } = props;
  switch (modalType) {
    case ModalTypes.addTask:
      return <CreateTaskModal />;
  }
  return null;
};

const mapStateToProps = (state: StoreState): { modal: ModalType } => ({
  modal: state.modal
});

export const ModalRoot = connect(mapStateToProps)(_ModalRoot);
