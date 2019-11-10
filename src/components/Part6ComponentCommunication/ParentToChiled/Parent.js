import React from 'react';
import Child from './child';

export const  Parent = (props) =>{
    return(
        <>
             <Child  {...props} /> {/* for pass the all props from parent to chiled */}

             <Child  {...props}  xyz = "additonalProps"/> {/* if we want to pass some aditional props */}

             {/* lets div into the sibling communications */}
             <Child  title = {props.title} doWhatEver1 ={props.doWhatEver1 }/> 
             <Child  title = {props.title} doWhatEver2={props.doWhatEver2}  /> 
        </>
    )
}
