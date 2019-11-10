import React from 'react';
import Part9Child from './Part9Child';

export default class Part9Parent extends React.Component {

    /*  BEFOR RENDERIFNGS  */

    // 1) constructer--> this is run once in which we can set the state bcs may be it can not run twice but once (we can set the state outside the constructer but constructer will override those if both constructer and outside have the same propertis name)
    state ={
        name1 : "ali2"
    }
    constructor(props){
        super(props);
        this.state ={  
            name : "ali",
            name1 : "ali1",
            name2 : "ali2",
            ChangState : null
            // innerWidth : null   ////if we would not defined the propertie into the state, even after we can use the the setState methode
        }
       
        console.log("this is parent constructer that run once")
    }

    // 2) conponentWillMount --> this also run once in which we can set the state bcs it run once thats y it can not rerender
    componentWillMount(){
        if(window.innerWidth < 1000){
            this.setState({
                innerWidth : window.innerWidth  //if we would not defined the propertie into the state, even after we can use the the setState methode
            })
        }
        console.log("parent componentWillMount that run only once");
    }


    /*  RENDER AND AFTER RENDERINGS  */

    // 1) render --> this is require func that is render whenever we change the state and props (note that ---> "never never ever use the setState in the render func if we do, it go through the recursion (bcs render func whenever we change the state and props)"  )
    render(){
        return(
            <>
                
                <Part9Child  
                    name= {this.state.name}
                    onClick={this.onClick.bind(this)}
                    ChangState = {this.state.ChangState}
                    name2 = {this.state.name2}
                /><br />
                Parent name1 | : {this.state.name1}<br />
                Parent name | : {this.state.name}<br />
                Parent : {this.state.innerWidth}<br />
                { console.log("parent render that run whenever we change the state and props") }
            </>
        )
    }


    // 2)  //this will trigger when we get the new props and after it will render the render func (if and only if we get the new props (use for compare the  new and existing props for set the State ) )
    //it run befor the render func whenever we send the new props
    //that call after first render
    componentWillReceiveProps(){
        console.log("this will trigger when we get the new props and after it will render the render func (if and only if we get the new props (use for compare the  new and existing props for set the State ) )")
    }

    //  3) componentDidMount --> this func run after render func and this func is run only once, and this func is only run when our component are absolutlly moute(including child and their child and hyrarchy of the component for supposed to), and this is right pla for making the ajax call bcs it run only once

    // in this we change the state thats y components rerender and therir child as well.
    componentDidMount(){
        this.setState({ 
            name : "husain"
        })
        console.log("parent componentDidMount that run only once ")
    }

    //4)  //shouldComponnet update this method will called whenever we get the next state and next props whether it gettin by the onather component or this component through some methode
    shouldComponentUpdate(nextProps, nextState){
        console.log(`should componnet update that render after first render `+ nextState.name+" "+this.state.name+" "+this.state.ChangState+" "+nextState.ChangState);
        // this.setState({
        //     ChangState : "alihusainHumeAgain"
        // })//this will give an Err (bcs in which we change the state and we better kw that whever we change the state (means new state come) then shoulComponentUpdate run)
        // so, we change the state it call shoulComponentUpdate again in which we change the state and it call the shoulComponentUpdate and so on Maximum update depth exceeded.
        // so we get the Err -->
        return true;


    }
    

    /* in which we change the props by using onClick func and we see that only render func will run bcs it run whenever we change the state */
    onClick(){
        // alert()
        this.setState({
            ChangState : "alihusainHume"
        })
    }



}