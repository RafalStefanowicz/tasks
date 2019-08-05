import React from "react";
import { connect } from "react-redux";

import { StyledReactModal } from "./ModalStyle";
import { hideModal } from "../../../actions/hideModal";

const rootElement = document.getElementById("root");
if (rootElement === null) {
  throw new Error("Element was not found");
}

StyledReactModal.setAppElement(rootElement);

interface ModalProps {
  children: JSX.Element;
  hideModal: typeof hideModal;
  acceptText: string;
  onSubmit: () => void;
}

const _Modal = (props: ModalProps): JSX.Element => {
  const { hideModal, acceptText, children, onSubmit } = props;

  const handleSubmit = (): void => {
    onSubmit();
    hideModal();
  };

  return (
    <StyledReactModal isOpen={true} onRequestClose={hideModal}>
      {children}
      <button onClick={hideModal}>Cancel</button>
      <button onClick={handleSubmit}>{acceptText}</button>
    </StyledReactModal>
  );
};

export const Modal = connect(
  null,
  { hideModal }
)(_Modal);
