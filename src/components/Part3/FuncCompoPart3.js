import React from 'react';
export let A = <div>this is another</div>;
//this is funcitonal components 
const FuncCompoPart3 = (props) =>{
// console.log(A)
    var user= null;
    var age= null;
    if(props.children){
         user = <div>{props.children}</div>
    }else{
         user = <div>there is no user</div>
    }

    if(props.age){
         age = <div>{props.age}</div>
    }else{
         age = <div>there is no age</div>
    }

    return(
        // <div>users</div>
        <div>
           {/* {  `user name : ${user} and age : ${age} `} */}
           user name : {user} and age : {age}
           
        </div>
    )
}

export default FuncCompoPart3;