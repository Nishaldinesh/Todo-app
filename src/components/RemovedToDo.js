import React from 'react';

function RemovedToDo(props) {
  return (
    <div className='todo-app'>

    <div className='todo-form'>
        <div className="header">
            <h1>Removed tasks</h1>
        </div>
    </div>

{ props.toDos.map((tasks)=>{
    if(tasks.checked) return null;
    if(!tasks.deleted) return null;


   return( <div className="todo-row">
      
           
            <div>{tasks.text}</div>
            <div className="icons">
            <i onClick={()=>props.deleteToggle(tasks.id)} className="fa-regular fa-circle-xmark"></i>
            <i onClick={()=> props.editToggle(tasks.id)} className="fa-solid fa-pen-to-square"></i>

            </div>
    </div>
   )
    })
}
</div>
  );
}

export default RemovedToDo;
