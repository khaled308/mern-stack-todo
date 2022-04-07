import React, { useContext, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../UserContext';
function InputField() {
    const[text,setText] = useState('')
    const setTasks = useContext(UserContext)[1]
    const handelClick = ()=>{
        let data = text
        setText('')
        const  URL = 'http://localhost:8000/todo/task/add'
        axios.post(URL,
        { task : data })
        .then(res=>{
            const {tasks} = res.data
            setTasks(tasks)
        })
    }
    return (
        <div className="input-list">
            <span className="btn check" onClick={handelClick}></span>
            <input placeholder="Create a new todo" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

export default InputField