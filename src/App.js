import React from "react";
import "./styles/App.scss";

import LandingRoute from "./views/landing";

function Routes() {}
function Route({ children }) {
  return <>{children}</>;
}

const App = () => {
  return (
    <Routes>
      <Route to="/">
        <LandingRoute />
      </Route>
    </Routes>
  );
};

export default App;
