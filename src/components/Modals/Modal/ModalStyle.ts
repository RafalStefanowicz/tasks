import styled from "styled-components";
import ReactModal from "react-modal";

type MyStyledReactModalType = StyledReactModalType & {
  setAppElement: (typeof ReactModal)["setAppElement"];
};

export const _StyledReactModal = styled(ReactModal)`
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 580px;
  height: 520px;

  transform: translate(-50%, -50%);
  border: 2px solid #2e93e8;

  @media (max-width: 768px) {
    width: 280px;
    height: 400px;
  }
`;

type StyledReactModalType = typeof _StyledReactModal;

export const StyledReactModal = _StyledReactModal as MyStyledReactModalType;

export const StyledReactModalWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledHeading = styled.h2`
  margin: 15px 0;
  text-align: center;
`;

export const StyledButton = styled.button`
  border: 2px solid black;
  padding: 6px 12px;
  min-width: 100px;
  font-size: 1.5rem;
  :hover {
    background-color: #2e93e8;
  }
  :disabled {
    border: 2px solid gray;
    :hover {
      background-color: white;
      cursor: default;
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
