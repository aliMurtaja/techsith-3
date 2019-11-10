// there is two type of component in the react 1)class components 2)functional components  
// we learn about it in this part-3

//this is class component in which we use the functional component
import React from 'react';
import FuncCompoPart3, {A} from './FuncCompoPart3';

class Users extends React.Component{  //for making the custom component we need to react object

    render(){ // we get this (render() and many life cycle such as (getStateDerivedFromProps(), componentDidMount()  etc from the React.Component (parent cls)class))
        console.log(A);
        console.log(FuncCompoPart3); // this is actually not result but component 
        return(  //for return the more than one statement we have to write like this (  return()  )
        <div>
             {A}  {/* this is actually result  */}
            {/* //we cant return the sibling component simultanouslly means all components enclosed by the only one tag  */}
        <div>test</div>

        {/* this is funcitonl component that we did reuse */}
        <FuncCompoPart3 />
        <FuncCompoPart3 />
        <FuncCompoPart3 />

        {/* if make it dynamic */}
        <h3>{this.props.title}</h3>
        <FuncCompoPart3 age="10">user1</ FuncCompoPart3 >
        <FuncCompoPart3 age="20">user2</ FuncCompoPart3 >
        <FuncCompoPart3 age="30">user3</ FuncCompoPart3 >
        
        </div>

        )
    }

}

export default Users;