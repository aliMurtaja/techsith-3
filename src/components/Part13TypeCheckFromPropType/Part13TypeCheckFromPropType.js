//use of PropTypes  --> whenever we use any component that component supposed to us that we provide some properties or event with rigth type thats y we need the proptypes


import React, {Component} from 'react';
// import { types } from '@babel/core';
import PropTypes from 'prop-types';


const Test = (props) => {
    return(
        <>
            {props.str}<br  /><br  />
            {props.bool ? "true" : "false"}<br  /><br  />
            {props.StrOrNum}<br  /><br  />
            {/* {props.arr}<br  /><br  /> */}
            {props.arr.map( (arr)=>{
              return  <li key= {arr}>{arr}</li>
            } )}

            {props.arrObj.map( (arr)=>{
              return  <li key= {arr.age}>{arr.name}</li>
            } )}

            Children | {props.children}
        </>
    )
}


Test.propTypes = {
    str : PropTypes.string.isRequired, //this props is to be required
    // str : PropTypes.number, //this give an Err on console
    bool : PropTypes.bool,
    StrOrNum : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    arr : PropTypes.arrayOf(PropTypes.number),
    // arr : PropTypes.arrayOf(PropTypes.string),
    arrObj : PropTypes.arrayOf(PropTypes.shape(
        { 
            // name : PropTypes.number, // gibe an Err
            name : PropTypes.string,
            age : PropTypes.number
        }
    )),
    children : PropTypes.string,
    // children : PropTypes.number  //give Err

}

export default class Part13TypeCheckFromPropType extends Component{

    render(){
        return(
            <>
                <Test 
                    str = {"this is String"}
                    bool
                    StrOrNum ={124}
                    // StrOrNum //give an Err
                    arr = { [1,2,3,4] }
                    arrObj = { [ {name : "ali1", age : 12} ,{name : "ali2", age : 13} ,{name : "ali3", age : 14} ] }
                >This Is Children</Test>
            </>
        )
    }
    
}