import React from 'react';

type NewComponentType = {
    students: Array <StudentsType>
    topCars: topCarsType[]
}
type topCarsType = {
    manufacturer: string
    model: string
}
type StudentsType ={
    id: number
    name: string
    age: number
}

export const NewComponent:React.FC<NewComponentType> = (props) => {
    debugger
    return (
        <>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    debugger
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name}</span>
                            <span> age: {objectFromStudentArray.age}</span>
                        </li>
                    )
                })}
            </ul>
            
            {/*<table >*/}
            {/*    <tr>*/}
            {/*        {props.topCars.map((el, index)=>{*/}
            {/*            return(*/}
            {/*                <td key={index}>{index+1}:manufacturer:{el.manufacturer}</td>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        {props.topCars.map((el, index)=>{*/}
            {/*            return(*/}
            {/*                <td key={index}>{index+1}:{el.model}</td>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </tr>*/}
            {/*</table>*/}
            <table>
                <tr>
                    {props.topCars.map((manufact, index) => {
                        return (
                            <th key={`manufacturer + ${index}`}>{manufact.manufacturer}</th>
                        )
                    })}
                </tr>
                <tr>
                    {props.topCars.map((model, index) => {
                        return (
                            <th key={`manufacturer + ${index}`}>{model.model}</th>
                        )
                    })}
                </tr>
            </table>
        </>


    );
};
