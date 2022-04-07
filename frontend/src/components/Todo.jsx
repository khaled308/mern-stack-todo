import React, { useContext, useEffect} from 'react'
import Details from './Details'
import Task from './Task'
import axios from 'axios';
import { UserContext } from '../UserContext';

function Todo() {
    const [tasks,setTasks] = useContext(UserContext)
    useEffect(()=>{
        const  URL = 'http://localhost:8000/todo/tasks'
        axios.get(URL)
        .then(res=>{
            let {data} = res.data
            setTasks(data)
        })
    },[])
    return (
        <div className="todos-items grid">
            <ul>
                {
                    tasks.map(item=>{
                        return(
                            <Task 
                            text={item.task} 
                            key={item._id} 
                            getId={()=>item._id} 
                            setTasks={setTasks} 
                            />
                        )
                    })
                }
            </ul>
            <Details/>
        </div>
    )
}

export default Todo