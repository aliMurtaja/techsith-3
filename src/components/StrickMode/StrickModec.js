import React from 'react';

export default class StrickModec extends React.Component{
    
    componentWillMount(){
        console.log("componentWillMount");
    }
    
    render(){
        return(
            <>
               <h3>this is strict MODE</h3>
            </>
        )
    }
}