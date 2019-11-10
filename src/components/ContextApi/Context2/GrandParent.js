import React, {Component} from 'react';
import {Parent} from './Parent'
// lets make the contextApi

// experinent 1
// export const MyContext = React.createContext();

// experiment 2
import {Provider} from '../Context/ContextApi'
export class GrandParentUnderstand extends Component {

    // we use state
    state = {
        stateGP : "stateGP",
        value : 15,
        value2 : 11
    }

    // we also use the events
    handleClick = () =>{
        this.setState({
            value2 : this.state.value2 + 1,
            value : this.state.value + 1
        })
    }

    render(){
        // we have to write it into the render() func, bcs we should have got the state and event at time of render
        const stateWithEvents = {
            state : this.state,
            handleClick : this.handleClick
        }
        return(
            <>
                {/* ex 1 (start) */}
                {/* <MyContext.Provider value={this.state}> */}
                    {/* the value above is keyword, we cant use anythings accept it */}
                    {/* <Parent /> */}
                {/* </ MyContext.Provider> */}
                {/* ex 1 (end) */}

                {/* ex 2 (start) */}
                {/* <MyContext.Provider value={stateWithEvents}> */}
                    {/* the value above is keyword, we cant use anythings accept it */}
                    {/* <Parent /> */}

                    {/* this is parents */}
                    {/* parent value : {this.state.value}<br /> */}
                    {/* parent value2 : {this.state.value2} */}
                {/* </ MyContext.Provider> */}
                {/* ex 2 (end) */}



                {/* ex 2 (start) */}
                <Provider value={stateWithEvents}>
                    {/* the value above is keyword, we cant use anythings accept it */}
                    <Parent />

                    {/* this is parents */}
                    parent value : {this.state.value}<br />
                    parent value2 : {this.state.value2}
                </Provider>
                {/* ex 2 (end) */}

            </>
        )
    }

}