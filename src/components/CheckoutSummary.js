import React from 'react';
import '../styles/CheckoutSummary.css';

export const CheckoutSummary = (props) => {
    const priceDiscount = (props.price* props.discount/100)
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
                        Total <span className="summary-number">{props.price}€ </span>
                    </div>
                    <div className="summary-discount">
                    Descuento Promo <span className="summary-number">({props.discount}%) </span>
                    </div>
                    <div className="summary-discount">
                    Total descuento <span className="summary-number">-{priceDiscount}€ </span>
                    </div>
                    <div className="summary-final-price">
                    Total con Descuento Promo <span className="summary-number">{props.price - priceDiscount}€ </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
