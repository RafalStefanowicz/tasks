import React from "react";

import { AddTaskBtn } from "../AddTaskBtn/AddTaskBtn";
import { NavLink } from "react-router-dom";
import { RouteTypes } from "../../types/RouteTypes";
import { StyledLinksWrapper, StyledWrapper, StyledLabel } from "./navStyle";

export const Nav = (): JSX.Element => {
  return (
    <nav>
      <StyledWrapper>
        <StyledLinksWrapper>
          <NavLink to={RouteTypes.today} exact>
            <StyledLabel>Today</StyledLabel>
          </NavLink>
          <NavLink to={RouteTypes.future}>
            <StyledLabel>Future</StyledLabel>
          </NavLink>
          <NavLink to={RouteTypes.past}>
            <StyledLabel>History</StyledLabel>
          </NavLink>
        </StyledLinksWrapper>
        <AddTaskBtn />
      </StyledWrapper>
    </nav>
  );
};
