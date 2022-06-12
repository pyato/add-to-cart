import "../assets/css/Navbar.css";
import React, { useContext, useEffect, useState } from "react";
import { CgSearch } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import profile from "../assets/images/profile.jpg";
import MiniBookCart from "./MiniBookCart";
import { CartContext } from "../context/CartContext";

function Navbar() {
    const [search, setSearch] = useState(false);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        cartContext.setMiniCart(false);
    }, [])

    return (
        <div>
            <div className="navbar-con">
                <div className="navbar-item-con">
                    <div className="navbar-logo">
                        <Link to="/">Book</Link>
                    </div>
                    <ul className="navbar-item">
                        {search ?
                            <li className="navbar-search">
                                <input type="text" placeholder="ค้นหาสินค้า" />
                                <a href="#"><CgSearch color="#266EFC" /></a>
                            </li>
                            :
                            <>
                                <li><a href="#">สินค้าใหม่</a></li>
                                <li><a href="#">สินค้าขายดี</a></li>
                                <li><a href="#">สินค้าลดราคา</a></li>
                                <li><a href="#">สินค้าแนะนำ</a></li>
                            </>
                        }
                    </ul>
                    <div className="navbar-icon">
                        <a
                            href="#"
                            onClick={() => setSearch(!search)}
                        >
                            {search ? <IoClose size={20} /> : <CgSearch size={20} />}
                        </a>
                        <a
                            href="#"
                            onClick={() => cartContext.setMiniCart(!cartContext.miniCart)}
                        >
                            <RiShoppingCartLine size={20} style={{ transform: "scaleX(-1)"}}/>
                            <div className="navbar-count-book">{cartContext.cart.length}</div>
                        </a>
                    </div>
                    <div className="navbar-profile">
                        <a href="#"><img src={profile} /></a>
                    </div>
                </div>
                {cartContext.miniCart ? <MiniBookCart /> : "" }
            </div>
        </div>
    )
}

export default Navbar;