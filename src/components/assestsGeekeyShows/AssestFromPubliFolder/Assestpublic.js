// a)public folder :-->

// if we put the file into the public folder it will not be proceed by the webpack
// and when we builed the app, those file will be copied into the the builed folder untouched(webpack not touch)

// to give the reference of the file into the public folder, we use the variable called PUBLIC_URL with prefix %%

// note that in public folder none of the file(assests/image) will not be proceed by webpack

import React from 'react';
import {Assestc} from './Assestc'

export class Assestpublic extends React.Component{
    render(){
        return(
            <>
                img in component :--><Assestc images='/jermani1.jpg' /><br />
                img in component :--><Assestc images='/image/jarmani2.jpg' /><br />
            </>
        )
    }
}
