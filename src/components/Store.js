import React from 'react';
import {ItemList} from "./ItemList"
import '../styles/Store.css';


export const Store = (props) => {
    return (
        <div className="store-wrapper">
            <div className="store-name">¡Bienvenido a mi tienda online!</div>
            <ItemList catalog = {props.catalog}/>
        </div>
    )
}
