import React, {Component} from 'react';

// we cant use like below, for fix it we have to import the it from the theire respective place (in our case we have to import it from GrandParent)
// const MyContext = React.createContext();

// this give An Err, bcs we have to import the it from the theire respective place (in our case we have to import it from GrandParent)
// import {MyContext} from './ContextApi';


// experiment 1
// import {MyContext} from './GrandParent';


// experiment 2
// import {Consumer} from './Consumer'

// experiment 2
import {Consumer} from './ContextApi'

export class GrandChiled extends Component {

    render(){
        return(
            <>
               {/* <MyContext.Consumer> */}

                   {/* experiment 1 (start) */}
                   {/* {data=> <h2>{console.log(data)}</h2>  } */}
                   {/* experiment 1 (end) */}

                   
                   
                   
                   {/* experiment 2 (start) */}
                   {/* {
                       data=>{   //if we have to return more then one, then we have to write like this 
                        return  <>
                            <h2>{console.log(data)}
                                name : {data.stateGP} <br />
                                value : {data.value} <br />
                            </h2>
                        </>
                        }
                    } */}
                    {/* experiment 2 (end) */}


                    
                    
                    <Consumer>
                         {/* the provider of the the this comsumer would be the grandParent of the context2, bcs it is grandchild of the grandparent   */}
                    {/* experiment 3 (start) */}
                    {
                        (data) =>{
                            return <>
                                <h2>{console.log(data)}
                                    {/* this is child */}
                                    this is child value : {data.state.value} <br />
                                </h2>
                                <button onClick ={data.handleClick}>increament</button>
                            </>
                        }
                    }
                    
                    {/* experiment 3 (end) */}
                    </Consumer>
                
                
                
                
                
                
                
                {/* </MyContext.Consumer>  */}
            </>
        )
    }

}