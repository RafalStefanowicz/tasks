import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Nav } from "../Nav/Nav";
import { TaskListContainer } from "../TaskLists/TaskListContainer/TaskListContainer";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Nav />
      <TaskListContainer />
    </Router>
  );
};
