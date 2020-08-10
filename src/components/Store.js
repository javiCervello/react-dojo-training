import React, {useState} from 'react';
import {ItemList} from "./ItemList"
import '../styles/Store.css';
import {CheckoutSummary} from './CheckoutSummary'
import { PromoCodeInput } from './PromoCodeInput';
import {promoCodes}  from "../data/promoCodes";
export const Store = (props) => {
    const [price, setPrice] = useState(0)
    const [totalProduts, setTotalProduts] = useState(0)
    const [discount, setDiscount] = useState(0)
    const incrementPrice = (newPrice)=>{
        setPrice(prev => prev + newPrice)
        setTotalProduts(prev => prev + 1)
    }
    const applyPromoCode = (code)=> {
        setDiscount(0)
        promoCodes.map(codePromo =>{
            console.log(code === codePromo.code)
           
            if(code === codePromo.code){
                setDiscount(codePromo.discountPercentage)
            }
        })
    }
    return (
        <div className="store-wrapper">
            <div className="store-name">¡Bienvenido a mi tienda online!</div>
            <ItemList catalog = {props.catalog} incrementPrice = {incrementPrice}/>
            <PromoCodeInput handlerPromoCode = {applyPromoCode}/>
        <CheckoutSummary price = {price} totalProduts ={totalProduts} discount = {discount}/>
        </div>
    )
}
