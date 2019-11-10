

import React ,{Component}from 'react';
import {Parent} from './Parent';

class GrandParent extends Component{

    state= {
        name : "ali"
    }

    doWhatEver(name){
        this.setState({
            name : name
        })
    }

    doWhatEver1(name){
        this.setState({
            name : name
        })
    }

    doWhatEver2(name){
        this.setState({
            name : name
        })
    }

    render(){  
        return <Parent 
            title= {this.state.name} 
            doWhatEver= {this.doWhatEver.bind(this,"new name")} 
            doWhatEver1 ={ this.doWhatEver1.bind(this, "sibling1")}
            doWhatEver2 ={ this.doWhatEver2.bind(this, "sibling2")}
            />
    }
}

export default GrandParent;