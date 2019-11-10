// strict mode is a tool for hightlight the potential problem
// strict mode dosnt render any visible UI,it activates the aditional check and warning fioe oits descendants

// it check only development mode and dost impact at time of production

// help with :-->
//     a)identify the component with unsafe life cycle(that life cycle methode that have been deprecated or is about the deprecated)
//     b)warning for legacy strin ref API or legacy Context API
//     or something like that

import React from 'react';
import StrickModec from './StrickModec';

export default class StrickModep extends React.Component{
    render(){
        return(
            <>
                <React.StrictMode>
                    <StrickModec  />
                </React.StrictMode>
            </>
        )
    }
}