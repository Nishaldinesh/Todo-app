import React from 'react'

import './App.css';
import Todo from './components/Todo';
import CheckedToDo from './components/CheckedToDo';
import RemovedToDo from './components/RemovedToDo';
import {useState} from 'react';
import Swal from 'sweetalert2';

function App() {
  const [toDos,setTodos]=useState(JSON.parse(localStorage.getItem("toDos")) || []);
  const [newTodo,setNewTodo]=useState('');

  const addNewTask =()=>{
    if(newTodo==="") return;
    let newTodos=[
      {id:Date.now(),text:newTodo,checked:false,deleted:false},
      ...toDos
    ]
    
    setTodos(newTodos);
    setNewTodo("");
  };

  const checkToggle=(id)=>{
    let newTodos=toDos.filter((todo)=>{
      if(todo.id===id){
        todo.checked=todo.checked ? false :true;
      }
      return todo;
     
    })
    setTodos(newTodos);
  };

  const deleteToggle=(id)=>{
    let newTodos=toDos.filter((todo)=>{
      if(todo.id===id){
        todo.deleted=todo.deleted ? false : true;
        todo.checked=false;
      }
      return todo;
    })
    console.log(newTodos);
    setTodos(newTodos);

  };

  const editToggle=async(id)=>{
    let {value: editedTask}=await Swal.fire(
      {
        title:"Rename task",
        input: "text",
        inputValue:toDos.find((todo)=>todo.id===id).text,
      }
    );

    if(editedTask){
      let newTodos=toDos.filter((todo)=>{
        if(todo.id===id){
          todo.text=editedTask
        }
        return todo;
      })
      console.log(newTodos);
      setTodos(newTodos);
    }
  }
 
  return (
    <>
    <div className='heading'>
    <h1>Todo app</h1>
    </div>
    

    <div className='row'>


     
      
    
    <Todo
    newTodo={newTodo}
    setNewTodo={setNewTodo}
    addNewTask={addNewTask}
    toDos={toDos}
    checkToggle={checkToggle}
    deleteToggle={deleteToggle}
    editToggle={editToggle}
    />
    <CheckedToDo
    toDos={toDos}
    deleteToggle={deleteToggle}
    checkToggle={checkToggle}
    editToggle={editToggle}
    />
    <RemovedToDo
    toDos={toDos}
    deleteToggle={deleteToggle}
    editToggle={editToggle}
    />
    </div>
    </>
  );
}

export default App;
