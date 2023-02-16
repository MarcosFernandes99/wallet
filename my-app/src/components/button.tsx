import React, { useState } from 'react'
import store from '../store'
import { setAddMoney, setRemoveMoney } from '../store/buttons/actions'
import { useSelector } from "react-redux"


export const Button = () => {

    const wallet = useSelector((state: IState) => state.wallet)
    
    const addMoney = () => {       
        store.dispatch(setAddMoney(10))
    }

    const removeMoney = () => {        
        store.dispatch(setRemoveMoney(10))
    }

    return (

        <div>

            <button onClick={removeMoney} >Sacar R$10,00</button>
            <button onClick={addMoney} >Depositar R$10,00</button>

            <span>Total: {wallet.value}</span>

        </div>
    )
}

