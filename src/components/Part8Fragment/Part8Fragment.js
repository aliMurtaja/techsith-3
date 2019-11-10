// since there are two type of the components 
// (1)CUSTOME COMPONENT  A) func component(stateless)  A) class component since whenever we render the custome component it render the bunch of the predefined components(in class it hane the there life cycle hooks)

// (2) PREDEFINED COMPONENTS 1(<div>)  2(<h2>)  3(<img>)... etc 



import React from 'react';

const Fragment = () =>{
    return <div>hii</div>
}

export default class Part8Fragment extends React.Component{
    render(){
        return(
            // <div>
            //     <Fragment />
            // </div>

            // // 1)first fragment--> but this become very complex (since Array are the collection of the element thats y we need to pass the key)
            // [  
            //     <Fragment key="1"/>,
            //     <Fragment key="2"/>,
            //     <Fragment key="3"/>
            // ]


            // // 2) sescond --> this is recommoded approach
            // <React.Fragment>  
            //     <Fragment />
            //     <Fragment />
            //     <Fragment />
            // </ React.Fragment>


            // // 3) thired --> this is new approch but in which there is some limite such as we can not pass the props
            <>  
                <Fragment />
                <Fragment />
                <Fragment />
            </ >




        )
    }
}