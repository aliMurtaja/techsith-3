// * First of all Err boundaries is react component in which we use the (func of the Err)life cycle of the Err boundaries

// 1)Err boundaries is react component that catch the js Err anyWhere in the child component tree, log those Err and display the fallback instead of the component tree that crashed

// 2)Err boundaries catch the  Err during the rendering, or in any life cycle methode or constructer of whole tree below them

// 3)for cls become the Err boundaries, if it defines either(or both) of the life cycle of the methode a)static getDrivedStateFromError() or componentDidCatch()




import React from 'react';

export  class ErrorBoundaris extends React.Component{
    
    state = {
        err : false
    }


    // 1)first methode of the life cycle of the Err
    static getDerivedStateFromError(err){
        if(err){
            console.log("tallu")

            //its return the object that modefied the state of the this(ErrorBoundaries) components
            return {
                err : true
            }
        }
    }
    

    // 1)seconed methode of the life cycle of the Err
    componentDidCatch(err, info){
        console.log("componentDidCatch")
        console.log(err)
        console.log(info)//information of the component through arrived the Err
    }
    
    render(){
        console.log("husain")
        // const {err} = this.state.err;
        console.log(this.state.err)
        let errs = null;
        let noErr = null; 
        if(this.state.err){  
            console.log("me;ndfk")
             errs = <h3>there was an Err</h3>            
        }else{
            noErr = this.props.children 
        }
        
        return(  
            <>
                {errs ? errs : noErr}
            </>
        )
    }
}