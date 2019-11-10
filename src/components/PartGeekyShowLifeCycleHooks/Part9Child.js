import React from 'react';

export default class Part9Child extends React.Component {

    /*  BEFOR RENDERIFNGS  */

    // 1) constructer--> this is run once in which we can set the state bcs may be it can not run twice but once (we can set the state outside the constructer but constructer will override those if both constructer and outside have the same propertis name)
    state ={
        name1 : "ali2"
    }
    constructor(props){
        super(props);
        this.state ={  
            name : "alichild",
            name1 : "ali1child",
            starteProp1 : this.props.name
            // innerWidth : null   ////if we would not defined the propertie into the state, even after we can use the the setState methode
        }
        console.log("this is child constructer that run once")
    }


    // this (conponentWillMount) is deprecated in the react life cycle intead use the (derivedStateFromProps) func
    // and if we use the derivedStateFromProps func, then alse will not use the componentswillreceiveProps func
    // i did in beneath

    // // 2) conponentWillMount --> this also run once in which we can set the state bcs it run once thats y it can not rerender
    // componentWillMount(){
    //     // if(window.innerWidth < 1000){
    //     //     this.setState({
    //     //         innerWidth : window.innerWidth  //if we would not defined the propertie into the state, even after we can use the the setState methode
    //     //     })
    //     // }
    //     console.log("child componentWillMount that run only once");
    // }

    // 2nd life cycle of the first phase(mountin(first render)) and also updating phase 
    // return object if u want the state if not return null
    // it is use if local state depened on the props
    // this is static method so we not use the this.props.attributename intead we use props.attributename
    
    // why it use if local state depened on the props
    // bcs we get the two arg as a args  (props, state)  
    // and in the props we get the all props and state we get the all currunt state 
    // so we campare the state(current) with the props if not we return the new obj else null 
    // in which we cant use the setState bcs there some reasom
    // 1) this is static method, so we not use the this keyword in this method

    // note that if our local state is depend on the props (ex state= {ali : this.props.att}), and we change the att(from parent), then we cant see the change the att in the child state(ali) bcs for changing the state we use the setState
    
    // and in first time we can assign the value of the props(form parent) to child state
    // but after(if changing the att in parent) we cnat direnclly assign the value so we use the getDerivedStateFromProps func
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps");
        console.log(props);
        console.log(state);

        if(props.name !== state.starteProp1){
            return {
               props1: props.props1//this return properties of the object will replace the properties of the local state
            }
        }

        return null;
        
    }


    /*  RENDER AND AFTER RENDERINGS  */

    // 1) render --> this is require func that is render whenever we change the state and props (note that ---> "never never ever use the setState in the render func if we do, it go through the recursion (bcs render func whenever we change the state and props)"  )
    render(){
        return(
            <>
                { console.log("child render that run whenever we change the state and props") }
                {/* this will not give the husain bcs render func will run first after componentDidMount func */}
                state of child : {this.state.name}<br />
                (props of parent)child : {this.props.name}<br />
                {/* {this.state.innerWidth} */}<br />

                {/* in which we change the props by using onClick func and we see that only render func will run bcs it run whenever we change the state */}
                Child : {this.props.ChangState}<br />
                <button onClick= {this.props.onClick}>changePropsInChild</button>

            </>
        )
    }

    // sincde we use the derivedStateFromProps func, then alse will not use the componentswillreceiveProps func
    // // 2)  //child-->this will trigger when we get the new props and after it will render the render func (if and only if we get the new props (use for compare the  new and existing props for set the State ) )  this methode will run
    // //it run befor the render func whenever we send the new props
    // componentWillReceiveProps(nextProps){
    //     console.log("child -->this will trigger when we get the new props and after it will render the render func (if and only if we get the new props (use for compare the  new and existing props for set the State ) ) "+nextProps.name+"  "+this.props.name);

    //     this.setState({
    //         name : "childAli"            
    //     })  //it will not give an Err, bcs we change in state(so thats y we get the new state again an agin but not a props)

    //     if(nextProps.name!==this.props.name){
    //         return null;
    //         //Perform some operation
    //         // this.setState({someState: someValue });
    //       }
    // }

    //  3) componentDidMount --> this func run after render func and this func is run only once, and this func is only run when our component are absolutlly moute(including child and their child and hyrarchy of the component for supposed to), and this is right pla for making the ajax call bcs it run only once

    componentDidMount(){
        console.log("child componentDidMount that run only once ")
    }


    // //4)  //shouldComponnet update
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("child should componnet update that render after first render   nextProps "+  nextProps.name +"  nextState "+ nextState)
    //     return false;
    // }

    //4)  //shouldComponnet update
    shouldComponentUpdate(nextProps, nextState){
        console.log("child should componnet update that render after first render   nextProps "+  nextProps.name +"  nextState "+ nextState)
        return true;
    }



}