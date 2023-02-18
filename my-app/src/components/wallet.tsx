import React, { useState } from 'react'
import store from '../store'
import { setAddMoney, setRemoveMoney, setTheme } from '../store/buttons/actions'
import { useSelector } from "react-redux"
import "./style.css"

export const Wallet = () => {

    const wallet = useSelector((state: IState) => state.wallet)
    const theme = useSelector((state: IState) => state.theme)

    type Theme = "light" | "dark"

    const [value, setValue] = useState<number>(0)
    // const [theme, setTheme] = useState<Theme>("light")

    const toggleTheme = () => {   
        let newTheme = ""    
        console.log(theme) 
        theme?.theme === "light" ? newTheme = "dark" : newTheme = "light";
        store.dispatch(setTheme(newTheme))
        console.log(newTheme)
    }

    const addMoney = () => {
        store.dispatch(setAddMoney(value))
    }

    const removeMoney = () => {
        store.dispatch(setRemoveMoney(value))
    }

    return (
        <section>
            <div className={`app ${theme?.theme}`}>

                <button className='btn' onClick={removeMoney} >Sacar</button>
                <button className='btn' onClick={addMoney} >Depositar</button>
                <input className='value' onChange={(e) => setValue(Number(e.target.value))} type="text" placeholder='Insira um valor' />

                <p className='valueTotal' >Total no caixa: R$ {wallet?.value},00</p>

                <p>
                    <button onClick={toggleTheme} className='btn'>Alterar tema</button>
                </p>

            </div>
        </section>
    )
}

