// more important thought that mind has arrived
// as our custum component render (or return) something some JSX(that convert in pure js object and that also convert into the html elements)
// like vise in predefined component(div) (that i thing render (or return) something some JSX(that convert in pure js object and that also convert into the html elements) )

import React from 'react';

const Func = ( propsxya ) => {
    return(
        <div>this is functional componenets {propsxya.children}</div>
    )
}

class Part2Sub2 extends React.Component{//we use the React.Component through we get the (props & state and many m) 
    render(){
        return(
            <>
                <Func/> {/* in this components (<Func/>) we alson need the React Object, thats'y we need to React Object that we import Above */}
                <Func>thsi is child into the func</Func>{/* in this components (<Func/>) we alson need the React Object, thats'y we need to React Object that we import Above */}
            </>
        )
    }
}

export default Part2Sub2;