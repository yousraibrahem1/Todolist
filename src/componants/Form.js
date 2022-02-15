import React from "react";

const Form = ({ setInputText, todo, setTodo, inputText }) => {
  //here i use the prpos inside the {} and then i can use it every where
  //here i can write java script code and funcation
  const inputTextHandler = (e) => {
   
    // i add it in input down so i can use this event
    setInputText(e.target.value);
  };

  const sumbitTodoHandler = (e) => {
    e.preventDefault();
    
    setInputText("");
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={sumbitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div className="yousra " type='text'> </div>
    </form>
  );
};

export default Form;
