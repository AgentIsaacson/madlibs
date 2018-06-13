import React from 'react';

const Input = (title, state, onChange, name) => {
    return (
        <div className="input">
            <input value={state} onChange={onChange} name={name}/>
            <label>{ title }</label>
        </div>
    )
}

export default Input;