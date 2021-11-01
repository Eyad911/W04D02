import React, { useState } from "react";
import Todoitem from "../TodoItem";
import "./style.css";

const Todo = ()=> {
const [toDos, setToDos] = useState([
    { id: 1, name: "play" },
         { id: 2, name: "sleep" }]);


  // constructor(props) {]
  //   super(props);
  //   this.state = {
  //     todos: [
  //       { id: 1, name: "play" },
  //       { id: 2, name: "sleep" },
  //     ],
  //   };
  //   // this.handleSubmit = this.handleSubmit.bind(this)
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(event.target.task.value);
    // console.log(this.state.todos);
    const todo = {
      id: toDos.length + 1,
      name: event.target.task.value,
    };
    setToDos([...toDos, todo]);
    event.target.task.value = "";
  };

const handlDel =(id)=>{
  setToDos( toDos.filter((toDo)=>toDo.id !== id));
}
const handlEdit = (id,e)=> {
  console.log(id);
  // const newList = toDos.map((item) => {
  //   if (item.id === id) {
  

  //   }
      
  // });

  // setList(newList);
  setToDos( toDos.splice(2,1,"e.target.task.value"));

}

  
    return (
      <div className="todo">
        <form onSubmit={handleSubmit}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul>
          { toDos.map((todo, i) => (
            <Todoitem todo={todo} key={i} handlDel={handlDel} handlEdit={handlEdit} />
          ))}
        </ul>
      </div>
    );
  
}
export default Todo;
