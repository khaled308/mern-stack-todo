import React from 'react'

function Details() {
    return (
        <div className="details">
            <div className="txt">5 items left</div>
            <div className="filter">
                <button className="all filter-selected">All</button>
                <button className="active">Active</button>
                <button className="completed">Completed</button>
            </div>
            <div className="clear">
                <button>Clear Completed</button>
            </div>
        </div>
    )
}

export default Details