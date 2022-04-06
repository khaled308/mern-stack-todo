import React from 'react'

function Task({text}) {
    return (
        <li>
            <div class='item-body'>
                <span class="check check-item">
                    <img src="/images/icon-check.svg" alt="" />
                </span>
                {text}
            </div>
            <img src="/images/icon-cross.svg" alt="" class='remove-item' />
        </li>
    )
}

export default Task