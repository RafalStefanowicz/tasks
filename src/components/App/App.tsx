import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Nav } from "../Nav/Nav";
import { Filter } from "../Filter/Filter";
import { TaskListContainer } from "../TaskLists/TaskListContainer/TaskListContainer";
import { StyledWrapper, StyledMain } from "./appStyle";
import { IRenderTasksContainerProps } from "../../types/Interfaces";

export const App = (): JSX.Element => {
  return (
    <Router>
      <StyledWrapper>
        <Nav />
        <StyledMain>
          <Filter
            renderChildren={(props: IRenderTasksContainerProps) => (
              <TaskListContainer {...props} />
            )}
          />
        </StyledMain>
      </StyledWrapper>
    </Router>
  );
};
