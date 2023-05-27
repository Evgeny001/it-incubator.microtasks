import React, {useState} from 'react';
export const UseState04 = () => {
    // let a=1
    // const onclickHandler =()=>{
    //     ++a
    //     console.log(a)
    // }
    let [a, setA]= useState(1)
    const onclickHandler =()=>{
        setA(++a)
    }
    const onclickHandler1 =()=>{
        setA(0)
    }
    return (
        <div className={"App"}>
            <h1>{a}</h1>
            <button onClick={onclickHandler}>number0</button>
            <button onClick={onclickHandler1}>number1</button>
        </div>
    )
}
