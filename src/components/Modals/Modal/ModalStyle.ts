import styled from "styled-components";
import ReactModal from "react-modal";

type StyledReactModalType = typeof _StyledReactModal;

type MyStyledReactModalType = StyledReactModalType & {
  setAppElement: (typeof ReactModal)["setAppElement"];
};

export const _StyledReactModal = styled(ReactModal)`
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 580px;
  height: 400px;
  transform: translate(-50%, -50%);
  border: 1px solid #0b5394;

  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 280px;
  }
`;
export const StyledReactModal = _StyledReactModal as MyStyledReactModalType;

export const StyledHeading = styled.h1`
  margin: 15px 0;
  text-align: center;
`;

export const StyledButton = styled.button`
  padding: 8px 20px;
  font-size: 1.5rem;
`;
