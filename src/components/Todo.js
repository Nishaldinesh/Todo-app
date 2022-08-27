import React from 'react';


function Todo(props) {
    return (

        <div className='todo-app'>

            <div className='todo-form'>
                <div className="header">
                    <h1>What's the plan for today?</h1>
                    <div className="input">
                        <input
                            value={props.newTodo}
                            placeholder='Add a task'
                            type="text"
                            onChange={(e) => props.setNewTodo(e.target.value)}
                        />
                        <button onClick={props.addNewTask}> <i className="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
            
            { props.toDos.map((tasks)=>{
                if(tasks.checked) return null;
                if(tasks.deleted) return null;

           

        return(  <div className="todo-row">
                <i onClick={()=>props.checkToggle(tasks.id)} className="fa-regular fa-circle-check"></i>
                <div>{tasks.text}</div>
                <div className="icons">
                    <i onClick={()=> props.deleteToggle(tasks.id)} className="fa-regular fa-circle-xmark"></i>
                    <i onClick={()=> props.editToggle(tasks.id)} className="fa-solid fa-pen-to-square"></i>
                </div>
            </div>)
           
        })}
        </div>
           
        

    );
}

export default Todo;
