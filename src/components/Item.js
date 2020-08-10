import React, { useState } from 'react';
import '../styles/Item.css';
import { ItemError } from './ItemError';

export const Item = (props) => {
    const [quantity, setQuantity] = useState(0)
    const checkLeft = ()=>{
        if(props.item.left > quantity){
            incrementQuantity()
        }
    }
    const incrementQuantity = ()=> {
        props.incrementPrice(props.item.price)
        setQuantity(prev => prev +1)
    }
    return (
        <div className="item-wrapper" onClick = {checkLeft}>
            <div className="item-name">{props.item.name}</div>
            <div className="item-price">{props.item.price}€</div>
            <div className="item-quantity">{quantity}</div>
            {props.item.left === quantity?
            <ItemError quantity = {quantity}/>:
            ''
        }
        </div>
    );
}
