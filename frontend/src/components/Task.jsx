import axios from 'axios'
import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

function Task({text,getId}) {
    const[tasks,setTasks] = useContext(UserContext)
    const handelClick = ()=>{
        const id = getId()
        const  URL = `http://localhost:8000/todo/task/delete/${id}`
        axios.delete(URL)
        .then(res=>{
            let {tasks} = res.data
            setTasks(tasks)
        })
    }
    return (
        <li>
            <div className='item-body'>
                <span className="check check-item">
                    <img src="/images/icon-check.svg" alt="" />
                </span>
                {text}
            </div>
            <img src="/images/icon-cross.svg" alt="" className='remove-item' onClick={handelClick} />
        </li>
    )
}

export default Task