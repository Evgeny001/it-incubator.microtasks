import React from 'react';
import {FilterType, MoneyType} from "./Filter_05";

type NewComponentPropsType = {
    currentMoney: MoneyType[]
    onclickFilterHandler:(nameButton: FilterType) => void
    setFilter: (filrer:FilterType ) => void
}

export const NewComponent:React.FC<NewComponentPropsType> = (props) => {
    return (
        <div>
            <>
                <ul>
                    {props.currentMoney.map((objFromMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyArr.banknot}</span>
                                <span>{objFromMoneyArr.value}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <div style={{marginLeft: "35px"}}>
                    <button onClick={() => props.onclickFilterHandler("All")}>all</button>
                    <button onClick={() => props.onclickFilterHandler("Dollars")}>Dollars</button>
                    <button onClick={() => props.onclickFilterHandler("Ruble")}>Ruble</button>
                </div>
            </>
        </div>
    );
};
