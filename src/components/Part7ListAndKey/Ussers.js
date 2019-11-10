import React, { Component } from 'react';
import {User} from './User';

import UniqueID from 'react-html-id';

export default class UserList extends Component {

    constructor(){
        super();

        // this is for the attach the enableUniqueIds to the this class
        UniqueID.enableUniqueIds(this);

        // we have to initialize the state into the constructor bcs of the enableUniqueIds
        this.state = {
            users : [
                {id:this.nextUniqueId(), name:'John', age:20},
                {id:this.nextUniqueId(), name:'Jill', age:30},
                {id:this.nextUniqueId(), name:'Peter', age:40},
            ]
        }

        console.log(this.state);

    }

    deleteUser(index){
        console.log(`delete ${index}`);

        var user = Object.assign([], this.state.users);
        user.splice(index, 1);

        this.setState({
            users : user
        })
    }

    changeUserName(id, event){
        // console.log(`event ${e} id ${id}`);

        // let users = Object.assign([], this.state.users);

        // // console.log(users);
        
        // let getId = users.map( (user)=>{
        //     if(user.id === id){
        //         return id;
        //     }
        // });

        // let ids = getId.map(  (id)=>{
        //     if(id===undefined){
        //         return 0;
        //     }else{
        //         return id
        //     }
        // })

        // console.log(ids)



        // console.log(getId)

        // // user.name = e.target.value;
        // if (event.target.value.length === 0) {
        //     return;
        //   }
          const index = this.state.users.findIndex((user)=> {
            //   console.log(id)
              return (user.id === id);
          })

          console.log(index)
      
          const user = Object.assign({}, this.state.users[index]);
          user.name = event.target.value;
      
          const users = Object.assign([], this.state.users);
          users[index] = user;
      
          this.setState({users:users});




    }

    render(){
        return(
            <>
                <ul>
                    {
                        this.state.users.map( (user, index)=>{
                            // console.log(index)
                          return  <User 
                                age ={user.age}
                                delEvent={this.deleteUser.bind(this,index)}
                                changeEvent ={this.changeUserName.bind(this, user.id)}
                            >{user.name}</User>
                        })
                    }
                </ul>
            </>
        )
    }



}

