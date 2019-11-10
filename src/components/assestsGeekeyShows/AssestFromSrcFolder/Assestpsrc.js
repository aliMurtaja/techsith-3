// b) src folder

// with webpack, all assests/image/files work similar like css
// you can import a file right in js module , this tells webpack to include that file in bundle

// unlike css imports, importing a file you give a string value, this value is make the file path that u can reference in ur copied

// note that in public folder the file(assests/image) will be proceed by webpack

import React from 'react';
import {Assestc} from './Assestc'
import bacchu1 from '../../../bacchu1.jpg';
import bacchu2 from '../../../bacchu2.jpg';
import germani3 from '../../../image/jarmani3.jpg';

export class Assestpsrc extends React.Component{
    render(){
        return(
            <>
                {/* <img src ={bacchu1} /> */}
                <Assestc images={bacchu1} /><br />
                <Assestc images={bacchu2} />
                <Assestc images={germani3} />
            </>
        )
    }
}
