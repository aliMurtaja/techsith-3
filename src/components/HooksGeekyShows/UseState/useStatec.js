// useState() func :-->
// 1) it allow to use the local state into yr func components
// 2) it return the pair  : 1)first in which ur state value 2) seconed in which func that u change the value
// 3) react will preserve the state value after rerender
// 4) u can call the func into the eventHandler or someWherer but not into the return statemenmt


// for use the useState, we have to import it from react 

import React,{useState} from 'react';

export function UseStatec(){
    // since we make the local state of the this(useStatep()),thays y we have to use the useState in this func not outSide this func

    // this func will return the array, the first elements of the array we get the state 
    // and secomded elements of the arary we get the func that we chage the state
    // we can destructer the array like bellow 
    const [name, changeNameFunc] = useState("aliArrayDestuc");
    const changeNameAndFunc = useState("aliArray");

    // we pass any things(obj, array, string. integer  etc...)
    // lets try with obj

    const withObj = useState({
        ali : "ali",
        husian : "husain"
    });

    function changeName (){
        changeNameFunc("ChangealiArrayDestuc")
    }

    // this experiments by us haaahaaahahah
    function changeObjAli(){
        withObj[1]({
            ...withObj[0],
            ali : "ali1"
        })
    }

    /* it will give an Err bcs it goes to the infinite nuber of the rendering */
    /* {changeNameFunc("ChangealiArrayDestuc")} */

    // it preserve the data of the state
    // for this lets do some experiments
    const [data, changeData] = useState(0);

    function changeDatas(){
        changeData(data + 1)//u see we use the data inside the changeData() it means it reserve the data(local satate)
    }

    return(
        <>

            {/* for access the state (start)*/}
            <h3>name des : {name}</h3><br />
            <h3>name arr : {changeNameAndFunc[0]}</h3><br />
            <h3>name obj ali : {withObj[0].ali}</h3><br />
            <h3>name obj husain : {withObj[0].husian}</h3><br />
            {/* for access the state (end)*/}
            
            {/* for modify the state (start) */}
            <button onClick = {changeName}>change name</button>
            <button onClick = {changeObjAli}>change changeObjAli</button>
            {/* for modify the state (start) */}


            {/* it will give an Err bcs it goes to the infinite nuber of the rendering */}
            {/* {changeNameFunc("ChangealiArrayDestuc")} */}

            {/* it preserve the data of the state */}
            {/* for this lets do some experiments */}
            <h3>data : {data}</h3><br />
            <button onClick = {changeDatas}>change data</button>
        </>
    )
}

