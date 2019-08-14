import styled from "styled-components";

export const StyledItem = styled.li`
  border: solid black 2px;
  margin-bottom: 10px;
  padding: 15px;
  transition: opacity linear 300ms;

  &.task-item-enter {
    opacity: 0;
  }
  &.task-item-enter-active {
    opacity: 1;
  }
  &.task-item-exit {
    opacity: 1;
  }
  &.task-item-exit-active {
    opacity: 0;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const StyledDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const StyledPriorityWrapper = styled.div`
  width: 100px;
  @media (max-width: 768px) {
    width: 70px;
  }
`;

export const StyledTaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDescription = styled.p`
  margin: 0 15px;
`;

export const StyledTrashAndDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIconWrapper = styled.div`
  flex-shrink: 0;
  button {
    margin-right: 12px;
    @media (max-width: 768px) {
      margin-right: 8px;
    }
  }
`;
