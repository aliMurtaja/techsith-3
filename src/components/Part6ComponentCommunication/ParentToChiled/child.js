import React from 'react';

const Child = (props) =>{// we get the props bcs of we import the react above

    let xyz;
    if(props.xyz){
        xyz = <div>{props.xyz}</div>
    }else{
        xyz = <div>no additional Props</div>
    }

    // let xyz;
    // if(props.xyz){
    //     xyz = <div>{props.xyz}</div>
    // }else{
    //     xyz = <div>no additional Props</div>
    // }

    // let xyz;
    // if(props.xyz){
    //     xyz = <div>{props.xyz}</div>
    // }else{
    //     xyz = <div>no additional Props</div>
    // }

    return (
        <>
           < button onClick={props.doWhatEver}>{props.title}</ button> {/* parent would be the responsible for the title and the events for the chiled */}

           {xyz}


        </>
    )
}

export default Child;