import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 5px 0 30px;
  margin: 0 auto;
  font-size: 34px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 24px;
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
