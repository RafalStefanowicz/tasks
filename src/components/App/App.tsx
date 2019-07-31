import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Nav } from "../Nav/Nav";
import { Page } from "../Page/Page";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Page />
    </Router>
  );
};

export default App;
