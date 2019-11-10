import React from 'react';
import Part9Child from './Part9Child';

export default class Part9Parentgeekyshows extends React.Component {

    /*  BEFOR RENDERIFNGS  */

    // 1) constructer--> this is run once in which we can set the state bcs may be it can not run twice but once (we can set the state outside the constructer but constructer will override those if both constructer and outside have the same propertis name)
    state ={
        name1 : "ali2"
    }
    constructor(props){
        super(props);
        this.state ={  
            name : "aliParent",
            name1 : "ali1",
            ChangState : null,
            setState : null,
            props1 : this.props.props1
            // innerWidth : null   ////if we would not defined the propertie into the state, even after we can use the the setState methode
        }
        console.log("this is parent constructer that run once");


        // Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the Part9Parentgeekyshows component.
        // this.setState({
        //     setState : "setState"
        // })
    }


    // this (conponentWillMount) is deprecated in the react life cycle intead of use the (derivedStateFromProps) func
    // and if we use the derivedStateFromProps func, then alse will not use the componentswillreceiveProps func
    // i did in beneath

    // // 2) conponentWillMount --> this also run once in which we can set the state bcs it run once thats y it can not rerender
    // componentWillMount(){
    //     if(window.innerWidth < 1000){
    //         this.setState({
    //             innerWidth : window.innerWidth  //if we would not defined the propertie into the state, even after we can use the the setState methode
    //         })
    //     }
    //     console.log("parent componentWillMount that run only once");
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
    // but after that we kw that after first rendering this go to the secode phase of the life cycle, thats where constructer will not run where we change the state
    // but after(if changing the att in parent) we cnat direnclly assign the value so we use the getDerivedStateFromProps func
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps");
        console.log(props);
        console.log(state);

        if(props.props1 !== state.props1){
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
                
                <Part9Child  
                    name= {this.state.name}
                    onClick={this.onClick.bind(this)}
                    ChangState = {this.state.ChangState}
                /><br />
                Parent name1 | : {this.state.name1}<br />
                Parent name | : {this.state.name}<br />
                Parent : {this.state.innerWidth}<br />
                Parent props1 from state: {this.state.props1}<br />
                { console.log("parent render that run whenever we change the state and props") }
            </>
        )
    }


    // // 2)  //this will trigger when we get the new props and after it will render the render func (if and only if we get the new props (use for compare the  new and existing props for set the State ) )
    // //it run befor the render func whenever we send the new props
    // //that call after first render
    // sincde we use the derivedStateFromProps func, then alse will not use the componentswillreceiveProps func
    // componentWillReceiveProps(){
    //     console.log("this will trigger when we get the new props and after it will render the render func (if and only if we get the new props (use for compare the  new and existing props for set the State ) )")
    // }

    //  3) componentDidMount --> this func run after render func and this func is run only once, and this func is only run when our component are absolutlly moute(including child and their child and hyrarchy of the component for supposed to), and this is right pla for making the ajax call bcs it run only once

    // in this we change the state thats y components rerender and therir child as well.
    componentDidMount(){
        this.setState({ 
            name : "husain"
        })
        console.log("parent componentDidMount that run only once ")
    }

    // this invoke after the first rendering of the components
    // this getSnapshotBeforeUpdate func is invoke right befor e thee virtual dom is about to change the dom(actual dom)
    // through this, we get the current info before the dom update
    // it mean during the rerendering (as rerender(bcs of the update the state and props), getSnapshotBeforeUpdate run first and after the rerender),  
    // this func will must return something or null
    // and this  methode will use with the componentDidUpdtate func
    // whatever return this methode will get as a thired params in a componentDidUpdate(thats y we have to use the componentDidUpdate with the getSnapshotBeforeUpdate)
    // if shouldComponentUpdate will return the false it will not invoke
    getSnapshotBeforeUpdate(preProps, preState){
        console.log("getSnapshotBeforeUpdate");
        console.log(preProps);
        console.log(preState);
        
        // this.setState({
        //     name : "changeName"
        // })  //thsi will give an Err bcs we have reach the maximum num of the rendering (bcs this methode will invoke the right before the render func is invoke)
        
        return null;
    }

    // // this methode call after the updatation(virtual dom change the dom(actual dom))
    // if shouldComponentUpdate will return the false it will not invoke

    componentDidUpdate(preProps, preState, paramsOfgetSnapshotBeforeUpdate){
        console.log("getSnapshotBeforeUpdate");
        console.log(preProps);
        console.log(preState);
        console.log(paramsOfgetSnapshotBeforeUpdate)
    }



    //4)  //shouldComponnet update this method will called whenever we get the next state and next props whether it gettin by the onather component or this component through some methode
    shouldComponentUpdate(nextProps, nextState){
        console.log(`should componnet update that render after first render `+ nextState.name+" "+this.state.name);
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