import "../assets/css/BookCart.css";
import React, { useContext, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { TbPencil } from 'react-icons/tb';
import IncrementBtn from "../components/IncrementBtn";
import { CartContext } from "../context/CartContext";

function TableOrder({ book }) {
    const [count, setCount] = useState(book.count);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        setCount(book.count);
    }, [book])

    return (
        <tr>
            <td className="cart-book">
                <img src={book.image_front} />
                <span>{book.title}</span>
            </td>
            <td className="cart-price">
                <p>THB{book.discount}</p>
            </td>
            <td className="cart-count">
                <IncrementBtn count={count} setCount={setCount} width="70px" height="50px" />
            </td>
            <td className="cart-total">
                <span>THB{book.count * (Number(book.discount))}</span>
            </td>
            <td className="cart-icon">
                <div onClick={() => {
                    cartContext.handleDelete(book, book.id)
                }}>
                    <IoClose size={20} color="#A1A1A1" />
                </div>
                <div onClick={() => cartContext.handleEdit(book, count)}><TbPencil size={20} color="#A1A1A1" /></div>
            </td>
        </tr>
    )
}

export default TableOrder;