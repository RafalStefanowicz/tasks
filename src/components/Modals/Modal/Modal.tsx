import React from "react";
import { connect } from "react-redux";

import { StyledReactModal } from "./ModalStyle";
import { hideModal } from "../../../actions";

const rootElement = document.getElementById("root");
if (rootElement === null) {
  throw new Error("Element was not found");
}

StyledReactModal.setAppElement(rootElement);

interface IModalProps {
  children: JSX.Element;
  hideModal: typeof hideModal;
  heading: string;
  confirmText: string;
  onSubmit: () => void;
}

const _Modal = (props: IModalProps): JSX.Element => {
  const { heading, confirmText, children, hideModal, onSubmit } = props;

  const handleSubmit = (): void => {
    onSubmit();
    hideModal();
  };

  return (
    <StyledReactModal isOpen={true} onRequestClose={hideModal}>
      <h1>{heading}</h1>
      {children}
      <button onClick={hideModal}>Cancel</button>
      <button onClick={handleSubmit}>{confirmText}</button>
    </StyledReactModal>
  );
};

export const Modal = connect(
  null,
  { hideModal }
)(_Modal);
