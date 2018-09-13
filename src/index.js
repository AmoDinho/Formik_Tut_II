import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./UserForm";
import "./styles.css";

const imaginaryUser = {
  email: "",
  username: "",
  imaginaryThingId: null
};

const App = () => (
  <div className="App">
    <UserForm user={imaginaryUser} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
