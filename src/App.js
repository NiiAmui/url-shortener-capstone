import React from "react";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import ResetPassword from "./Components/ResetPassword";
import ResetSuccess from "./Components/ResetSuccess";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={MainPage} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="resetsuccess" component={ResetSuccess} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
