import React from 'react';

export class Assestc extends React.Component{
    render(){
        return(
            <>
                  {/* this image will not be proceed by the webpack, bcs we place this file into the public folder  */}
                <img src={process.env.PUBLIC_URL+this.props.images} alt="not founed" width="200"/>
            </>
        )
    }
}
