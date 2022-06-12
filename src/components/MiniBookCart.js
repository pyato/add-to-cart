import "../assets/css/MiniBookCart.css";
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import MiniOrderCard from "./MiniOrderCard";
import { CartContext } from "../context/CartContext";

function MiniBookCart() {
    const cartContext = useContext(CartContext);

    useEffect(() => {
        <MiniOrderCard book={cartContext.cart} />
    }, [])

    return (
        <div className="mini-con">
            <div className="mini-triangle"></div>
            <p>ตระกร้าของฉัน</p>
            <p>{cartContext.cart.length} สินค้าในตระกร้า</p>
            <Link to="/Book-Cart">
                <button>ดูหรือแก้ไขตระกร้าของฉัน</button>
            </Link>
            {cartContext.cart.map(book =>
            <div className="mini-order">
                <MiniOrderCard book={book} />
                </div>
            )}
            <p className="mini-total">ยอดรวม: <span>THB{cartContext.totalPrice}</span></p>
            <Link to="/Check-Out">
                <button>ไปชำระเงิน</button>
            </Link>
        </div>
    )
}

export default MiniBookCart;