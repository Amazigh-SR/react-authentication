import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import LandingPage from "./LandingPage";

const Authentication = function () {
  const [isLoggedin, setLogin] = useState(false);

  //home page will be the signup page, then when logged in you can logout

  return (
    <div>
      <Router>
        <Link to="/" id="header">
          <h1>Challenge - React Authentication Page</h1>
        </Link>

        {!isLoggedin && (
          <>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="login">
              <button>Login</button>
            </Link>
          </>
        )}

        {isLoggedin && (
          <Link to="/#/ms/logout">
            <button onClick={(e) => setLogin(false)}>Logout</button>
          </Link>
        )}

        <Switch>
          <Route path="/signup">
            <Signup isloggedin={isLoggedin} setLogin={setLogin} />
          </Route>
          <Route path="/login">
            <Login isloggedin={isLoggedin} setLogin={setLogin} />
          </Route>
          <Route path="/landingpage">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Authentication;
