import styled from "styled-components";

export const StyledRadio = styled.input`
  display: none;
`;

export const StyledRadioLabel = styled.label`
  :hover {
    cursor: pointer;
  }
`;

export const StyledRadioWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledDate = styled.input`
  width: 50%;
  border: 2px solid black;
  margin: 10px;
  padding: 5px 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 80%;
  border: 2px solid black;
  height: 150px;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledRadioGroup = styled.div`
  margin: 10px;
  ${StyledRadio}:checked + ${StyledRadioLabel} svg {
    color: #2e93e8;
  }
`;
