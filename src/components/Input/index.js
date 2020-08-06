import React from 'react'

import './styles.css'

function Input(props){
    return (
        <div className="input-block">
            <label>{props.label}</label>
            <input onChange={props.onChange} type={props.type} name={props.name} id={props.id} value={props.value}></input>
        </div>
    )
}

export default Input