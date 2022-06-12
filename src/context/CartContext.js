import React, { createContext, useState } from 'react';

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [miniCart, setMiniCart] = useState(false);

    const handleAdd = (book, count, sum) => {

        let findBook = cart.find(e => e.id === book.id)
        if (findBook === undefined) {
            book.count = book.count + count;
            setCart(arr => [...arr, book]);
        }
        else {
            book.count = book.count + count;
            setCart(arr => [...arr]);
        }
        setTotalPrice(totalPrice + sum);
    }

    const handleDelete = (book, id) => {
        let newArr = [];
        cart.map(e => { if (e.id !== id) newArr.push(e) })
        setTotalPrice(totalPrice-(book.count * Number(book.discount)));
        book.count = 0;
        setCart(newArr)
    }

    const handleEdit = (book, count) => {
        cart.map(e => {
            if(e.id === book.id) {
                e.count = count;
            }
        })

        setCart(arr => [...arr]);
    }

    return (
        <Provider
            value={{
                cart,
                setCart,
                totalPrice,
                setTotalPrice,
                miniCart,
                setMiniCart,
                handleAdd: (book, count, sum) => handleAdd(book, count, sum),
                handleDelete: (book, id) => handleDelete(book, id),
                handleEdit: (book, count) => handleEdit(book, count)
            }}
        >
            {children}
        </Provider>
    )
}

export { CartContext, CartProvider };