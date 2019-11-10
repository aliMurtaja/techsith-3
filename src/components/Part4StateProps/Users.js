//this is part--4 ,in that we learn the state and the props
//we cant mutate the state directlly but we can copy the state through the setState() func
//through the setState() react component would compare the their previous state of the object with new one anf in their virtual dom if it get the change any state it change only their state into the actual dom

//in a class componente arrow func would have the the reference of the this of the their parent function(object) thats y we dont need to it bind 
//if we assign the normal methode of the object to other variable, context of the this would be changed
//if we assign the arrow methode of the object to other variable, context of the this would not be changed

import React from 'react';
import UserPart4 from './User';


class UsersPart4 extends React.Component{
    // lest make a use of the state
    
    state={
        user : [
            {name : "ali1", age : 10},
            {name : "ali2", age : 20},
            {name : "ali3", age : 30}
        ],

        title : "titleAli"
    }

    ChangeAge(){
        console.log("ageChange "+this);
    }

    ChangeAge1=()=>{
        console.log("ageChange "+this);
        this.setState({  //this method is async method bcs it take the too time(in which component would compare the state of the previouse object with the new one in their virtual dom if any chang, it change the into the actual dom)
            user : [
                {name : "ali1", age : 20},
                {name : "ali2", age : 30},
                {name : "ali3", age : 40}
            ]
        })
        //this give me the previoue state not a new bcs this.setState({}) take the too time
        console.log(this.state.user)
    }

    ChangeAge1UsingTheMap= () =>{

        var agesss = this.state.user.map( (user)=>{
            // console.log(user)
            let tempUser = user;
            tempUser.age =tempUser.age - 10;
            // console.log(tempUser)
            return tempUser;
        })
        console.log(agesss)

        this.setState({
             usejjr:agesss // this make the new user properties into the state obj that would override the pre(user) properties 
            //  it is something like this(  {...state, age :10}  )
            //  agesss   //this is alse be right but i dont know y
        })

    }

    render(){
        return(
            <>
                <h3>withOut State</h3>
                <UserPart4 age= "10">User</UserPart4>
                <UserPart4 age= "20">User</UserPart4>
                <UserPart4 age= "30">User</UserPart4>

                <h3>with State</h3>
                {this.ChangeAge()}{/* this give me the right result bcs we directlly use it and we did not assign it to the other variable */}
                {this.ChangeAge()}{/* this give me the right result bcs we directlly use it and we did not assign it to the other variable */}
                {this.ChangeAge()}{/* this give me the right result bcs we directlly use it and we did not assign it to the other variable */}
                
                <button onClick={this.ChangeAge}>changeTheUserAgeWithNormalFunc</button>{/* this give me the error result bcs we assign it to the other variable without bind */}

                <button onClick={this.ChangeAge1}>changeTheUserAge1WithArrowFunc</button>{/* this give me  not the error result bcs we assign it to the other variable with arrow func that preseve the context of the this */}

                <button onClick={this.ChangeAge1UsingTheMap}>changeTheUserAge1UsingTheMap</button>


                <UserPart4 age={this.state.user[0].age} >{this.state.user[0].name}</UserPart4>
                <UserPart4 age={this.state.user[1].age}>{this.state.user[1].name}</UserPart4>
                <UserPart4 age={this.state.user[2].age}>{this.state.user[2].name}</UserPart4>
            </>
        )
    }

}

export default UsersPart4;