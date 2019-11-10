import React from 'react';

const UserPart4 = (props) =>{

    let user= null;
    let age = null;

    if(props.children){
        user = <div>{props.children}</div>
    }else{
        user = <div>there is no children</div>
    }

    if(props.age){
        age = <div>{props.age}</div>
    }else{
        age = <div>there is no age</div>
    }

    return (
        <>
            name of the user is {user} and age of the user is the {age}
        </>
    )
}

export default UserPart4;