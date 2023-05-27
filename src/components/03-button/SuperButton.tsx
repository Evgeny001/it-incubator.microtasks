import React from 'react';
import {MouseEvent} from "react";

export type SuperButtonPropsType = {
    any_name: string
    callBack: () => void
}
export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {

    // const onClickHandler = (name: string) => {
    //     // console.log(name)
    //     props.callBack()
    // }
    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>
                {props.any_name}</button>

            {/*<button onClick={(event) => {onClickHandler("IVAN")}}>*/}
            {/*/!*<button onClick={(event) => {props.any_name("IVAN")}}>*!/*/}
            {/*        MyYouTubeChanel - 1 </button>*/}

            {/*<button onClick={(event) => {onClickHandler("Vasy")}}>*/}
            {/*/!*<button onClick={(event) => {props.any_name("Vasy")}}>*!/*/}
            {/*    MyYouTubeChanel-2</button>*/}
        </div>
    );
};
