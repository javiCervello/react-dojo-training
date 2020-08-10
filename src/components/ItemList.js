import React from 'react';
import '../styles/ItemList.css';
import { Item } from './Item';

export const ItemList = (props) => (
    <div className="list-wrapper">
        {props.catalog.map(item =>{
           return <Item  key= {item.id} item = {item} incrementPrice = {props.incrementPrice}/>
        })}
    </div>
);
