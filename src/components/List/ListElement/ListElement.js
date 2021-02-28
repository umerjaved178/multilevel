import React from 'react'
import classes from './ListElement.module.css'

function ListElement(props) {
    return (
        <div className={classes.ListElement}>
            <li onClick={() => props.toggleHandler(props.singleCategory)}> {props.singleCategory} </li>
        </div>
    )
}

export default ListElement
