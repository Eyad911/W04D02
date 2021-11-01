import React from 'react'
import './style.css'

const Todoitem = (props)=> {



   
        return (
            <div className='todolistDiv'>
                <li className='todoList'>
                    <h3 className='todoName'>{props.todo.name}</h3>
                    <h3 className='todoedit'onClick={()=> props.handlEdit(props.todo.id)}> Edit</h3>
                    <h3 className='todoClose' onClick={()=> props.handlDel(props.todo.id)}>X</h3>

                    </li>
            </div>
        )
    
}
export default Todoitem;