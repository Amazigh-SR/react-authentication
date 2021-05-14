import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

const Authentication = function () {
  const [isloggedin, setLogin] = useState(false);

  return (
    <div>
      <Router>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="login">
          <button>{isloggedin ? "Logout" : "log in"}</button>
        </Link>

        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </div>
  );
};

export default Authentication;
