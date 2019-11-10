// pure component --> the components that dont rerender the components when it dont require, it  means that when we get the same value of the state and props, then dont make the sence to rerender if we render the component in this situation them it not called the pure components but we dont the render called pure component


import React,{ Component} from 'react';

const Temp = (props) => {
    console.log('render Temp');
    return (<div>{props.val}</div>)
  }

  export default class Part10PureComponent extends Component {
    state = {
      val: 1
    }
  
    componentDidMount(){
      setInterval(()=> {
        this.setState(()=>{
          return { val : 1}
        });
      }, 2000)
    }

    shouldComponentUpdate(nextProp, nextState){
        console.log('nextState', nextState);
        console.log('currentState', this.state)
        return ( this.state.val === nextState.val ? false :true)
    }

    render() {
        console.log('render App');
        return (
          <div className="App">
              <Temp val={this.state.val}/>
          </div>
        );
      }
    }

