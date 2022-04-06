import React from 'react'

function Details() {
    return (
        <div class="details">
            <div class="txt">5 items left</div>
            <div class="filter">
                <button class="all filter-selected">All</button>
                <button class="active">Active</button>
                <button class="completed">Completed</button>
            </div>
            <div class="clear">
                <button>Clear Completed</button>
            </div>
        </div>
    )
}

export default Details