import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 34px;
  padding: 5px 0 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 8px;
    font-size: 24px;
    background-color: white;
  }
`;

export const StyledLabel = styled.span`
  margin-right: 15px;
`;

export const StyledLinksWrapper = styled.div`
  .active > ${StyledLabel} {
    color: #2e93e8;
  }
`;
