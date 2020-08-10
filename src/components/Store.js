import React, {useState} from 'react';
import {ItemList} from "./ItemList"
import '../styles/Store.css';
import {CheckoutSummary} from './CheckoutSummary'

export const Store = (props) => {
    const [price, setPrice] = useState(0)
    const [totalProduts, setTotalProduts] = useState(0)
    const incrementPrice = (newPrice)=>{
        setPrice(prev => prev + newPrice)
        setTotalProduts(prev => prev + 1)
    }
    return (
        <div className="store-wrapper">
            <div className="store-name">¡Bienvenido a mi tienda online!</div>
            <ItemList catalog = {props.catalog} incrementPrice = {incrementPrice}/>
        <CheckoutSummary price = {price} totalProduts ={totalProduts}/>
        </div>
    )
}
