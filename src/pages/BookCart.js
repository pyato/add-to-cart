import "../assets/css/BookCart.css";
import React, { useContext, useState } from 'react';
import TableOrderSummary from "../components/TableOrderSummary";
import { CartContext } from "../context/CartContext";
import TableOrder from "../components/TableOrder";
import { Link } from 'react-router-dom';

function BookCart() {
    const cartContext = useContext(CartContext);

    return (
        <div className="container">
            <div className="cart-con">
                <div className="cart-edit">
                    <p>ตระกร้าสินค้า</p>
                    <table>
                        <tr>
                            <th>สินค้า</th>
                            <th>ราคา</th>
                            <th>จำนวน</th>
                            <th>ยอดรวม</th>
                        </tr>
                        {cartContext.cart.map((book) => <TableOrder book={book} />)}
                    </table>
                    <div className="cart-btn">
                        <Link to="/">
                            <button>ซื้อสินค้าต่อไป</button>
                        </Link>
                        <button onClick={() => {
                            cartContext.setCart([]);
                            cartContext.setTotalPrice(0);
                        }}>
                            ล้างตระกร้าสินค้า
                        </button>
                    </div>
                </div>
                <TableOrderSummary textBtn="ไปชำระเงิน" />
            </div>
        </div>
    )
}

export default BookCart;