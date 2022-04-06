import React from 'react'
import Details from './Details'
import Task from './Task'

function Todo() {
    return (
        <div class="todos-items grid">
            <ul>
                <Task text= 'play' />
                <Task text= 'study' />
            </ul>
            <Details />
        </div>
    )
}

export default Todo