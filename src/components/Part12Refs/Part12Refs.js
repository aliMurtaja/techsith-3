//refs --> this is for the take the reference of the elements it give us the reference of the elements that we can stor into the class or function component properties
// when we get the reference we use it for manything one of them is focus
// ex  -->  referenceName.focus()  //to be focus
//to get the value  ex  ---> referenceName.value()  etc 

// this is for only for the knowledge
//  whenever we make component(child) and use it into the another component(parent), then we pass the props from PARENT to CHILD and events(or func) will alse pass from PARENT to CHILD 
// since we pass the props from parent to child it will trigger from parent to child
// but we pass the event from parent to child it will pass from paren t to child but it will triggere from child to parent 



import React, { Component } from 'react';


const MyInput = (props) =>{
    return(
        <>
        MyInput :  <input
                type="text"
                ref={props.inputRef}
                onKeyUp ={props.onKeyUp} 
            />
        </>
    )
}

const FuncCustomComp = (props) => {

    let textRef ;
    let firstName ;
    let lastName ;
    let submit ;
   
   const onSubmit = (e) =>{
        console.log(e)
        console.log(e.target.value);
        // firstName.focus()
        alert(`textRef ${textRef.value} firstName ${firstName.value} lastName ${lastName.value} `)
        // alert('textRef '+ textRef.value +'firstName ' +firstName.value+ 'lastName ' +lastName.value )
    }

    const onKeyUp = (targer ,e) =>{
        console.log(e.keyCode);
        if(e.keyCode === 13){
            if(targer === "textRef"){
                // console.log(this.firstName.value)
                firstName.focus()
            }else if(targer === "firstName"){
                // console.log(this.lastName.value)
                lastName.focus()
            }
            else if(targer === "lastName"){
                // console.log(this.age.value)
                submit.focus()
            }
            else{
                textRef.focus()
            }
        }

    }

return(
        <>
        
            <MyInput 
                inputRef = { (input)=>{textRef  = input} }
                onKeyUp = {onKeyUp.bind(this, "textRef")}
                /><br /><br /><br />
    
            <div>
                <span>First Name: </span>
                <input
                    type="text"
                    onKeyUp={onKeyUp.bind(this, 'firstName')}
                    ref={(input) => { firstName = input; }} 
                    />
            </div>
            <div>
                <span>Last Name: </span>
                <input
                    type="text"
                    onKeyUp={onKeyUp.bind(this, 'lastName')}
                    ref={(input) => { lastName = input; }} 
                    />
            </div>
            <div>
                <input
                type="submit"
                value="Submit"
                onClick={onSubmit}
                ref={(input) => { submit = input; }}
                />
            </div>
        </>
    )


}





export default class Part12Refs extends Component {

    componentDidMount(){
        console.log('didMount '+this.firstName)
        console.log(this.firstName)
    }

    // onSubmit=()=>{
    //     console.log('onSubmit '+this.firstName)
    //     console.log(this.firstName)
    // }

    onSubmit = () => {
        alert(`yey submited! ${this.firstName.value}, ${this.lastName.value} `);
      }

    onKeyUp = (targer ,e) =>{
        console.log(e)
        console.log(e.keyCode)
        console.log(e.target.value)


        // this is wrong bcs both code and targer we chack simultanously
        // if(targer === "firstname" && e.keyCode === 13){
        //     console.log(this.firstName.value)
        //     this.lastName.focus()
        // }else if(targer === "lastName" && e.keyCode === 13){
        //     console.log(this.lastName.value)
        //     this.age.focus()
        // }else if(targer === "age" && e.keyCode === 13){
        //     console.log(this.age.value)
        //     this.submit.focus()
        // }else{
        //     this.lastName.focus()
        // }

        if(e.keyCode === 13){
            if(targer === "firstname"){
                console.log(this.firstName.value)
                this.lastName.focus()
            }else if(targer === "lastName"){
                console.log(this.lastName.value)
                this.age.focus()
            }else if(targer === "age"){
                console.log(this.age.value)
                this.submit.focus()
            }else{
                this.lastName.focus()
            }
        }
    }


    render(){
        return(  
            <>
              
                
                <div>

                <FuncCustomComp /><br /><br /><br />

                    <span>First Name: </span>
                    <input
                        type="text"
                        // defaultValue ="ali"
                        onKeyUp={this.onKeyUp.bind(this, "firstname")}
                        ref={(input) => { this.firstName = input; }} >
                        </input>
                </div>
                 <div>
                    <span>Last Name: </span>
                    <input
                        type="text"
                        onKeyUp={this.onKeyUp.bind(this, 'lastName')}
                        ref={(input) => { this.lastName = input; }} />
                </div>
                <div>
                    <span>Age: </span>
                    <input
                        type="text"
                        onKeyUp={this.onKeyUp.bind(this, 'age')}
                        ref={(input) => { this.age = input; }} />
                </div>
                <div>
                    <input
                    type="submit"
                    value="Submit"
                    onClick={this.onSubmit}
                    ref={(input) => { this.submit = input; }}
                    />
                </div>   
            
            </>
        )
    }    

}