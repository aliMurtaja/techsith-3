import React from 'react';

export class Assestc extends React.Component{
    render(){
        return(
            <>
                  {/* this image will be proceed by the webpack, bcs we place this file into the src folder  */}
                <img src={this.props.images} alt="not founed" width="200"/>
            </>
        )
    }
}
