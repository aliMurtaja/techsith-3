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
            name : "ali",
            name1 : "ali1",
            // innerWidth : null   ////if we would not defined the propertie into the state, even after we can use the the setState methode
        }
        console.log("this is child constructer that run once")
        // this.setState({
        //             innerWidth : window.innerWidth  //if we would not defined the propertie into the state, even after we can use the the setState methode
        //         })
    }

    // 2) conponentWillMount --> this also run once in which we can set the state bcs it run once thats y it can not rerender
    componentWillMount(){
        // if(window.innerWidth < 1000){
            this.setState({
                innerWidth : window.innerWidth  //if we would not defined the propertie into the state, even after we can use the the setState methode
            })
        // }
        console.log("child componentWillMount that run only once");
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
                (props of parent)child : {this.props.name2}<br />
                {/* {this.state.innerWidth} */}<br />

                {/* in which we change the props by using onClick func and we see that only render func will run bcs it run whenever we change the state */}
                Child : {this.props.ChangState}<br />
                <button onClick= {this.props.onClick}>changePropsInChild</button>

            </>
        )
    }

    // 2)  //child-->this will trigger when we get the new props and after it will render the render func (if and only if we get the new props (use for compare the  new and existing props for set the State ) )  this methode will run
    //it run befor the render func whenever we send the new props
    componentWillReceiveProps(nextProps){
        console.log("child -->this will trigger when we get the new props and after it will render the render func (if and only if we get the new props (use for compare the  new and existing props for set the State ) ) "+nextProps.name+"  "+this.props.name);

        this.setState({
            name : "childAli"            
        })  //it will not give an Err, bcs we change in state(so thats y we get the new state again an agin but not a props)

        if(nextProps.name!==this.props.name){
            return null;
            //Perform some operation
            // this.setState({someState: someValue });
          }
    }

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
        console.log("child should componnet update that render after first render nextProps "+  nextProps.name +"  nextState "+ nextState)
        console.log(nextState)
        return true;
    }



}