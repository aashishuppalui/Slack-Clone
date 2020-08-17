import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* <h1>Whooooooo!!! We're building Slack Clone 🚀🚀🚀🚀🚀🚀 </h1> */}
      <Router>
        {/* Header */}
        {!user ? (
          // <h1>Login page</h1>
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              {/* Sidebar */}
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                  {/* <h1>Roger</h1> */}
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* React-Router --> Chat Screen*/}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
