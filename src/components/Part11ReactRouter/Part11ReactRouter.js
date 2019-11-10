import React, { Component } from 'react';

import {BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
var Route = require('react-router-dom').Route;


  const User1 = () => {
    return ( <h1> Welcome User </h1>)
  }

  const User2 = (props) => {
    return ( <h1> Welcome User {props.match.params.username} </h1>)
  }

  const User3 = ({match}) => {
    return ( <h1> Welcome User {match.params.username} </h1>)
  }

  const User4 = (props) => {
    return ( <h1> Welcome User {props.username} </h1>)
  }

  const Links1 = () =>{
      return(
        <ul>
            <li>
                <Link 
                    to="/" 
                    // exact 
                    // activeStyle={{ color:'green' }}
                >Home</Link>
            </li>
            <li>
                <Link 
                    to="/about/" 
                    // exact 
                    // activeStyle={{ color:'green' }}
                >About</Link>
            </li>
        </ul>    
      )  
    }


    const Links2 = () =>{
        return(
          <ul>
              <li>
                  <NavLink  
                      to="/" 
                      exact 
                      activeStyle={{ color:'green' }}
                  >Home</NavLink >
              </li>
              <li>
                  <NavLink  
                      to="/about/" 
                      exact 
                      activeStyle={{ color:'green' }}
                  >About</NavLink >
              </li>
              <li>
                    <NavLink to="/user3/john/" exact activeStyle={
                    { color:'green' }
                    }>User John</NavLink>
             </li>
             <li>
                    <NavLink to="/user3/peter/" exact activeStyle={
                    { color:'green' }
                    }>User Peter</NavLink>
             </li>

             <li>
                    <NavLink to="/user4/john" exact activeStyle={
                    { color:'green' }
                    }>User John</NavLink>
             </li>
             <li>
                    <NavLink to="/user4/peter" exact activeStyle={
                    { color:'green' }
                    }>User Peter</NavLink>
             </li>
          </ul>    
        )  
      }

export default class Part11ReactRouter extends Component {

    constructor(props){
        super(props);
        this.state = {
            login : false
        }
    }

   ChangeState = () =>{ this.setState({ login : !this.state.login }) }

   render(){
       console.log(this.state.login);
       return(
             <Router>

                {/* <Links1  /> */}
                <Links2  />
                <input type="button" value={ this.state.login ? "logOut" : "logIn"} onClick = { this.ChangeState } />

                <Route path= "/" exact strict render={ ()=><h2>this is tag</h2> }></Route>   
                <Route path="/about/" exact strict render={
                    () => {
                        return ( <h1>Welcome About</h1>);
                    }
                }/>



                <Route path="/user1" exact strict 
                    component = { User1  }
                /> 

                <Route path="/user2/:username/" exact strict 
                    component = { User2  }
                />

                <Route path="/user3/:username/" exact strict 
                    component = { User3  }
                /> 

                <Route path="/user4/:username" exact strict render={({match})=>(
                    this.state.login ? ( <User4 username={match.params.username}/>) : (<Redirect to='/' />)
                )}/> 
                    

            </Router>
       )
   }



}