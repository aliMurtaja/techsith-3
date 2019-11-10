
import React from 'react';
import {Assestc} from './Com2'
import bacchu1 from './../../bacchu1.jpg';
import bacchu2 from './../../bacchu2.jpg';

import {ErrorBoundaris} from './ErrorBoundaris';


import germani3 from './../../image/jarmani3.jpg';

export default class ParentErrBoundaries extends React.Component{
    render(){
        return(
            <>
                {/* <img src ={bacchu1} /> */}
                <ErrorBoundaris>
                    <Assestc images={bacchu1} /><br />
                </ErrorBoundaris>
                
                
                
                <ErrorBoundaris>
                    <Assestc images={bacchu2} />
                </ErrorBoundaris>
                
                {console.log(germani3)}
                
                
               
                <ErrorBoundaris>
                    {/* whenever render func run of this component(Parent.js), ErrorBoundaris component run
                    if any Err, then  static getStateDerivedFromError run of the ErrorBoundaris component
                    if there is no Err, even then ErrorBoundaris components run, only run the render func, not the both (static getStateDerivedFromError and componentDidCatch)
                    if there is any err of the ErrorBoundaris,all child componets of the ErrorBoundaris will not be execute
                    */}
                    <Assestc images={germani3 ? "not_founded" : germani3} />
                </ErrorBoundaris>
                {/* <Assestc images={germani3 ? germani3 : "not_founded"} /> */}
            </>
        )
    }
}
