import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IStyledIconWrapper {
  big?: boolean | undefined;
}

export const StyledBtn = styled.button`
  border: none;
`;

export const StyledIconWrapper = styled.span<IStyledIconWrapper>`
  font-size: ${props => (props.big === true ? "50px" : "35px")};

  @media (max-width: 768px) {
    font-size: ${props => (props.big === true ? "40px" : "25px")};
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;
