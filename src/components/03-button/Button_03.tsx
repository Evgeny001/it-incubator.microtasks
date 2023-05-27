import React from 'react';
import {MouseEvent,} from 'react';
import {SuperButton} from "./SuperButton";

export const Button03 = () => {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello! i'm Vasy")
    // }
    // const myFirstSubscriber2 = () => {
    //     console.log("Hello! i'm IVAN")
    // }
    // const onClickHandler = (name: string) => {
    //    console.log(name)
    // }
    // const foo1 = () => {
    //     console.log(100200)
    // }
    // const foo2 = (n: number) => {
    //     console.log(n)
    // }
    // const onClickHandler2 = (name: string) => {
    //     console.log(name)
    // }
    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("i'm stupid button")
    }

    return (
        <div>
            {/*        <button onClick={() => console.log("Hello!")}>*/}
            {/*        MyYouTubeChanel-1*/}
            {/*    </button>*/}
            {/*<button onClick={()=>onClickHandler("Vasy")}>MyYouTubeChanel-2</button>*/}
            {/*<button onClick={()=>onClickHandler("IVAN")}>MyYouTubeChanel-2</button>*/}
            {/*        <div>*/}
            {/*            <button onClick={foo1}>1111</button>*/}
            {/*            <button onClick={(event)=>foo2(100200)}>2222</button>*/}
            {/*        </div>*/}
            <SuperButton any_name={'MyYouTubeChanel-1'}
                         callBack={() => Button1Foo("Ivan", 21, "live in Minsk")}/>
            <SuperButton any_name={'MyYouTubeChanel-2'}
                         callBack={() => Button2Foo('Vasiy')}/>
            <SuperButton any_name={"i'm stupid button"} callBack={Button3Foo}/>
        </div>


    );
};
