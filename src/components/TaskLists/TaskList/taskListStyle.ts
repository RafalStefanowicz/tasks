import styled from "styled-components";

interface IStyledIconWraperProps {
  visible: boolean;
}

export const StyledList = styled.ul``;

export const StyledItem = styled.li`
  border: solid black 2px;
  margin-bottom: 10px;
`;

export const StyledDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

export const StyledPriorityWrapper = styled.div`
  width: 100px;
  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const StyledTaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

export const StyledDescription = styled.p`
  margin: 0 15px;
`;

export const StyledTrashAndDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIconWrapper = styled.div<IStyledIconWraperProps>`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-shrink: 0;
  width: 100px;
  @media (max-width: 768px) {
    width: 70px;
  }
  justify-content: space-between;
`;
