import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="username">password</label>
        <input type="text" id="password" />
        <button type="submit">Login</button>
      </form>
    </Card>
  );
};

export default AddUser;
