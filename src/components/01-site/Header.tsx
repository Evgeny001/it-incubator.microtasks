import React, {FC} from "react"

type HeaderPropsType = {
    titleForHeader: string
}
export const Header:FC<HeaderPropsType> = (props) => {
    return (
        <>{props.titleForHeader}</>
    )
}
