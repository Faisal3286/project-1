import React from 'react';
import './Hello.css';
const Hello = (props) => {
    return(
        <div className='f1'>
            <h1 className='f2'>{props.name}</h1>
            <p className='f3'>{props.email}</p>
        </div>
    );
}
export default Hello;