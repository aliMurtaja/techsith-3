// whenever we make the any component (pre defined as div, p, img) ,react use their defalt behavior
// but whenever we make the any custome react alse use the their defalt behavior 
// ex ---> such <ali>
//now react see if we it has any import file of this component, use their defaut behavior and, make the componet  


import React from 'react';

const Part1 = () =>{
    return(
        <>
            {/* PART 1 STARTED*/}
            <div>
            { `
                PART 1
            whenever we write the the 
            npm start ,then it run the -->react-scripts start <-- in the package.json file 
            that also run the --> react-scripts <-- into the package.json file`
            }
            </div><hr/><br/>
            {/* PART 1 HAVE BEEN COMPLETED END */}
        </>
    )
}

export default Part1;