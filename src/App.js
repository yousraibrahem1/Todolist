import react, { useState } from "react";
// here we use the useState to import something specific from the react app
import logo from "./logo.svg";
import "./Todo.css";
//import the todo file
import Form from "./componants/Form";
// import the Form file
import TodoList from "./componants/TodoList";
import Todo from "./componants/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  //here funcation inputText is for actual value , and the setInputText is afuncation that allow change the actual value
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Todo.List.</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />

      <TodoList todos={todos}/>
      <Todo />
    
    </div>
  );
}

export default App;
