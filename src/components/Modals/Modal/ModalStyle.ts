import styled from "styled-components";
import ReactModal from "react-modal";

export const _StyledReactModal = styled(ReactModal)`
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 580px;
  height: 400px;
  transform: translate(-50%, -50%);
  border: 1px solid #0b5394;
`;

type StyledReactModalType = typeof _StyledReactModal;

type MyStyledReactModalType = StyledReactModalType & {
  setAppElement: (typeof ReactModal)["setAppElement"];
};

export const StyledReactModal = _StyledReactModal as MyStyledReactModalType;
