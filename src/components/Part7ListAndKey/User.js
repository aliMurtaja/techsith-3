import React from 'react';

export const User = (props) => {
    let user = props.children ? props.children : "User not founeded";
    let age =props.age ? props.age : "NA";
    return(
        <>
            <li>name of the user {user} | and age : {age}</ li>
            <input onChange={props.changeEvent} value={props.children}/>
            <button onClick={props.delEvent}>Delete</button>
        </>
    )
}