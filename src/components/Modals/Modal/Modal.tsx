import React from "react";
import { connect } from "react-redux";

import { StyledReactModal, StyledHeading, StyledButton } from "./ModalStyle";
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
  isDisabled?: boolean;
}

const _Modal = (props: IModalProps): JSX.Element => {
  const {
    heading,
    confirmText,
    isDisabled,
    children,
    hideModal,
    onSubmit
  } = props;

  const handleSubmit = (): void => {
    onSubmit();
    hideModal();
  };

  return (
    <StyledReactModal isOpen={true} onRequestClose={hideModal}>
      <StyledHeading>{heading}</StyledHeading>
      {children}
      <StyledButtonWrapper>
        <StyledButton onClick={hideModal}>Cancel</StyledButton>
        <StyledButton onClick={handleSubmit} disabled={isDisabled}>
          {confirmText}
        </StyledButton>
      </StyledButtonWrapper>
    </StyledReactModal>
  );
};

_Modal.defaultProps = { isDisabled: false };

export const Modal = connect(
  null,
  { hideModal }
)(_Modal);
