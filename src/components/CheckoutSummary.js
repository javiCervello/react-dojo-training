import React from 'react';
import '../styles/CheckoutSummary.css';

export const CheckoutSummary = (props) => {
    return (
        <div className="summary-wrapper">
            <div className="summary-box">
                <div className="summary-title">
                    Resumen pedido
                </div>
                <hr />
                <div className="summary-info">
                    <div className="summary-products">
                        Total Productos <span className="summary-number">{props.totalProduts}</span>
                    </div>
                    <div className="summary-price">
                        Total <span className="summary-number">{props.price}€</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
