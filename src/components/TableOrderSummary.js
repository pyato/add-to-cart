import "../assets/css/BookCart.css";
import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function TableOrderSummary({ textBtn, iconBtn }) {
    const cartContext = useContext(CartContext);

    return (
        <div className="cart-order">
            <table>
                <tr>
                    <th>
                        สรุปคำสั่งซื้อ
                    </th>
                </tr>
                <tr>
                    <td>
                        ยอดรวม
                    </td>
                    <td>
                        THB{cartContext.totalPrice}
                    </td>
                </tr>
                <tr>
                    <td className="cart-border">
                        ค่าส่ง
                    </td>
                    <td className="cart-border">
                        THB1.00
                    </td>
                </tr>
                <tr>
                    <td className="cart-total-table">
                        ยอดสุทธิ
                    </td>
                    <td className="cart-total-table">
                        THB{cartContext.totalPrice + 1}
                    </td>
                </tr>
            </table>
            <Link to="/Check-Out">
                <button>{textBtn}</button>
            </Link>
        </div>
    )
}

export default TableOrderSummary;