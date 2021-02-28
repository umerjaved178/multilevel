import React from 'react'
import Selection from './SelectUILibrary/SelectUI'
import classes from './SelectionComp.module.css'


function Test1(props) {
    return (
        <div className={classes.SelectionComp}>
            <p>Subcategories</p>
            <div >
                <Selection options={props.options}/>
            </div>    
        </div>
    )
}

export default Test1
