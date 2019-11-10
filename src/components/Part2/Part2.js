import React from 'react';

import Part2Sub2 from './Part2Sub2';

const Part2 = ()  => {
 return(  
    <>
        {/* PART 2 STARTED*/}
        {`
        PART 2
          we used the jsx instead of the plain react bcs of the complexcity of the plain react
          jxs-->> javaScript and xml means we can write the html with js that actually comverted into the pure js object that also converted into the html
        `}<br/><br/><br/>
        {/* for example */}
       
        {/* withOut jsx that is too complicated when we descuss about the     making the nested the html elements*/}
        {
          React.createElement("div", {
            name: "husain"
          }, "this is withOut the jsx but the plain react Js", React.createElement("h4", null, "this is h4 tag"))
       }<br/><br/><br/>

       {/* with jsx */}
       <div name="husain">
        this is with the jsx but the withOut the plain react Js
        <h4>this is h4 tag</h4>
      </div><br/><br/><br/>

      {/* with the extra knowledge */}
      <h5 name="true">the attribute withOut the value of the elements, then the value bydefault set by the true</h5><br/><br/><br/>

      {/* with the extra knowledge */}
      <h5 name= "false">for the false we have to explicitly write it</h5><br/><br/><br/>

      {/* with the extra knowledge */}
      <h5 className="cls1" htmlFor ="for">we can't use  the class attribute bcs it is jsx that is also converted into the js object and in the js class is already predefined thats why we have to use the className for the class and htmlFor for the for  </h5><br/><br/><br/>

      {/* lets make the our functional components and use into the class componenets and rendrer into the this file for this i have the folder see into the src/components/Part2Sub2 and we have to import the part2 into this file */}

      <Part2Sub2 /><hr/><br/>
      {/* PART 2 HAVE BEEN COMPLETED END*/}


    </>
 )
}

export default Part2;