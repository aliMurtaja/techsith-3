// first(1)
//  in html we does something like this
// <input  type= "text" onclick=myFunction() />

// seconed(2)
// but js(or react(that is also js library)) we does something like this
// <input  type= "text" onClick={this.myFunction} />

// bcs first(1):--> we use this in html file
// but seconed(2):--> we use the js file (and we kw that in js file, if we use the func() it mean that we call it )

// note that the event of the in js file is totally different from html elements

// we can not use the onchange in the html, but use in js file



import React from 'react';

export default class Controlledc extends React.Component{

    state = {
        value : null
    }

    myFunction =(e)=>{
        console.log("onkeypress")
        console.log(e.target.value)
        console.log(e.target)
        console.log(e)
    }

    myFunction2 =(e)=>{
        console.log("onChange")
        console.log(e.target.value)
        
    }

    myFunction3 =(e)=>{
        console.log("onClick")
        console.log(e.target.value)
        console.log(e)
    }
    render(){
        return(
            <>
               <form>
                   <h2>thi is controlled by react</h2>
                 onKeyPress  <input  
                        type= "text"
                        onKeyPress={this.myFunction}
                    />

                 onChange   <input  
                        type= "text"
                        id= "onchange"
                        onChange={this.myFunction2}
                    />

                 onclick   <input  
                            type= "text"
                            onClick={this.myFunction3}
                    />
               </form>
            </>
        )
    }
}