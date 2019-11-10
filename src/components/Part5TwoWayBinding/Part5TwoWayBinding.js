import React from 'react';

class Part5TwoWayBinding extends React.Component{

        state = {   
            name : "ali"
        }

        changeState(e, name1,name2,name3){//e is a event, after all args in events
            console.log(e)
            console.log(name1)
            console.log(name2)
            console.log(name3)
            this.setState({
                name : "husain"
            })
        }

        changeStatePassArgWithBind(name){
            this.setState({
                name
            })
        }

        changeStatePassArgWithanonymouse(name){
            this.setState({
                name
            })
        }

        // twoWayDataBindingWithargs(e, arg1, arg2){
        //     console.log(e.target.value)
        //     console.log(arg1)
        //     console.log(arg2)
        //     this.setState({
        //         name : e.target.value
        //     })
        // }

        twoWayDataBinding(e){  
            console.log(e.target.value)
            this.setState({
                name : e.target.value
            })
        }


        render(){
            return(
                <>
                     
                    {/* {this.changeState()}    {/* this func would run, but give us the Error bcs it This can happen when a component repeatedly calls setState inside the ChangeState */}

                    <button onClick = {this.changeState.bind(this, "ali1","ali2","ali3")}>changeState</button>

                    {/* if we want to pass the args then there is some methode lets dive into that one by one */}

                    {/* bind-->using the bind methode we cant call the methode but we assign the methode with the context of the this and args */}
                    <button onClick= {this.changeStatePassArgWithBind.bind(this, "withBindMethode")}>changeStatePassArgWithBind</button>

                    {/* anonymouse func --> using the anonymouse func we cant call the func but we return the func with the args and the context of the this will preserve */}
                    <button onClick= { () => this.changeStatePassArgWithanonymouse("changeStatePassArgWithanonymouse") }>changeStatePassArgWithanonymouse</button>

                    {/* two way data binding  */}
                    <input type="text"  value={this.state.name} />  {/* give me the error in the console  for fix it we can do something like below */
                    }
                    {/* 1) */}
                    {/* <input type="text"  value={this.state.name} readOnly/>  */}

                     {/* 2) the context of the this will not be preseve thats y we have to bind with the this */}
                     <input type="text"  value={this.state.name} onChange = {this.twoWayDataBinding.bind(this)}/> 

                     {/* 3) after passing the args, getting the Error i dont kw y */}
                     {/* <input type="text"  value={this.state.name} onChange = {this.twoWayDataBindingWithargs.bind(this, "arg1", "arg2")}/>  */}




                    <div>{this.state.name}</div>
                </>
            )
        }

}

export default Part5TwoWayBinding; 