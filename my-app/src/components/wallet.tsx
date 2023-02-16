import React, { useState } from 'react'
import store from '../store'
import { setAddMoney, setRemoveMoney } from '../store/buttons/actions'
import { useSelector } from "react-redux"
import "./wallet.css"


export const Wallet = () => {

    const wallet = useSelector((state: IState) => state.wallet)

    const [value, setValue] = useState<number>(0)
    
    const addMoney = () => {       
        store.dispatch(setAddMoney(value))
    }

    const removeMoney = () => {        
        store.dispatch(setRemoveMoney(value))
    }   

    return (

        <div className='wallet'>

            <button className='btn' onClick={removeMoney} >Sacar</button>
            <button className='btn' onClick={addMoney} >Depositar</button>
            <input className='value' onChange={(e) => setValue(Number(e.target.value))} type="text" placeholder='Insira um valor'/>

            <p className='valueTotal' >Total no caixa: R$ {wallet.value},00</p>

        </div>
    )
}

