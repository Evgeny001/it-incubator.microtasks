import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export type MoneyType = {
    banknot: FilterType
    value: number
    number: string
}
export type FilterType = "All" | "Dollars" | "Ruble"

export const Filter05 = () => {
    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknot: 'Dollars', value: 100, number: ' a1234567890'},
        {banknot: 'Dollars', value: 50, number: ' z1234567890'},
        {banknot: 'Ruble', value: 100, number: ' w1234567890'},
        {banknot: 'Dollars', value: 100, number: ' e1234567890'},
        {banknot: 'Dollars', value: 50, number: ' c1234567890'},
        {banknot: 'Ruble', value: 100, number: ' r1234567890'},
        {banknot: 'Dollars', value: 50, number: ' x1234567890'},
        {banknot: 'Ruble', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('All')

    const onclickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    let currentMoney = money
    if (filter === "Dollars") {
        currentMoney = money.filter(el => el.banknot === "Dollars")
    }
    if (filter === 'Ruble') {
        currentMoney = money.filter(el => el.banknot === "Ruble")
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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
                <button onClick={() => onclickFilterHandler("All")}>all</button>
                <button onClick={() => onclickFilterHandler("Dollars")}>Dollars</button>
                <button onClick={() => onclickFilterHandler("Ruble")}>Ruble</button>
            </div>

            <NewComponent currentMoney={currentMoney}
                          onclickFilterHandler={onclickFilterHandler}
                          setFilter={setFilter}/>
        </>

    )
}
