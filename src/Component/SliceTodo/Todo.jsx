import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const todo = useSelector((state) => state.todos.tasks);
  console.log(todo);
  const todoHandler = () => {
    if (text !== "") {
      try {
        dispatch(addTodo(text));
        setText("");
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <div className="container mx-auto w-auto shadow-lg mb-4 bg-white mt-4">
        <h1 className="h1 pb-4" style={{ textAlign: "center", fontSize:"30px" }}>
          Todo List With Redux Toolkit
        </h1>
        <div class="input-group m-2">
          <h1>Tasks:-</h1>
          <input
            type="text"
            value={text}
            placeholder="Enter Your Name"
            onChange={handleChange}
            className="form-control w-auto float-start"
            style={{ fontSize: "18px" }}
          ></input>
          <button
            onClick={todoHandler}
            type="button"
            className="btn btn-primary btn-lg"
          >
            Submit
          </button>
        </div>

        <br></br>
        <ul className="list-group list-group-p-5 w-auto mx-auto">
          {todo &&
            todo.map((item, index) => {
              return (
                <li
                  className="list-group-item list-group-item-info m-2"
                  style={{ fontSize: "18px" }}
                  key={item.id}
                >
                  {item.title}{" "}
                  <button
                    onClick={() => dispatch(deleteTodo(item.id))}
                    className="btn btn-danger float-end btn-lg"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
