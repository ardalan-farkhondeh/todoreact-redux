import React from 'react';

import "./App.css";
import Input from "./components/Input";
import TodosList from "./components/TodosList";


export default function App() {
  return (
    <div className="App" data-test="app">
      <h1 > Todolist react-redux</h1>
      <Input data-test="input" />
      <TodosList data-test="TodosList"/>
      <h4>*click on the elemnt for edit*</h4>
    </div>
  )
}





















/* 

import React, { useEffect } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { deleteAll, persistTodos } from "./redux/action/addTodo.action";
import { connect } from "react-redux";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
      <InputField />
      <TodosList />
      <div>
        <button
          style={{ marginTop: "20px", cursor: "pointer" }}
          onClick={deleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
 */