import "../assets/css/MiniBookCart.css";
import React, { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { TbPencil } from 'react-icons/tb';
import { CartContext } from "../context/CartContext";

function MiniOrderCard({ book }) {
    const cartContext = useContext(CartContext);
    return (
        <>
            <p>{book.count}x</p>
            <img src={book.image_front} />
            <p>{book.title}</p>
            <div className="mini-icon">
                <div onClick={() => cartContext.handleDelete(book, book.id)}><IoClose size={12} color="#A1A1A1" /></div>
                <div><TbPencil size={12} color="#A1A1A1" /></div>
            </div>
        </>
    )
}

export default MiniOrderCard;