import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  border: 1px solid black;
  padding: 5px 15px;
  width: 350px;
  margin: 10px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
