// useEffect hooks

// useEffect() func :-->
// 1) if u familiar with life cycle of the cls components u can things of useEffect hooks as componentDidMount, componentDidUpdate, componentWillUnMount combined
// 1)it means after components mount (first mount), useEffect run
// 2)after update(rerender the components), useEffect run
// 3)after unmount(components unmount), useEffect run
// 4) so, we can do many thing in useEffect(like :--> data feting etc...)
// 5)useEffect(firstArg, seconedArg)
//     a)firstArg : we pass a func that execute after components (mount, update, unmount)
//     b)seconed : this is array of the value on which useEffect depened on


// for use the useState, we have to import it from react 
// for use the useEffect, we have to import it from react
import React,{useState, useEffect} from 'react';

export function UseEffectc(){
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


    // useEffect
    useEffect(()=>console.log(`this run after(mount, update, unmount)`))

    useEffect(()=>console.log(`this is another useEffect that also run after(mount, update, unmount)`));

    // we also pass the value of the array on which this useEffect depened on, 
    // lets try that

    useEffect(()=>console.log(`this run after(mount, update, unmount) with some condition`), [data])

    // i dont kw y it is wrong
    // useEffect(()=>console.log(`this run after(mount, update, unmount) with some condition`), [data, withObj[0]])

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

