import { useState } from 'react'
import Heading from './components/Heading'
import InputField from './components/InputField'
import Todo from './components/Todo'
import { UserContext } from './UserContext'

function App() {
    const[tasks,setTasks] = useState([])
    return (
        <div className="app">
            <div className="top"></div>
            <div className="todo">
            <UserContext.Provider value={[tasks,setTasks]}>
                    <Heading />
                    <InputField />
                    <Todo/>
            </UserContext.Provider>
            </div>
        </div>
    )
}

export default App