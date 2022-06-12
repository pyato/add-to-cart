import "../assets/css/BookCard.css";
import React, { useContext } from "react";
import { BsCheckLg } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import { HiOutlineHeart } from 'react-icons/hi';
import { CgMenuLeft } from 'react-icons/cg';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function BookCard({ book }) {
    const cartContext = useContext(CartContext);
    let score = [];

    const star = () => {
        for (let i = 0; i < book.star; i++) {
            score.push(<AiFillStar color="#E9A426" size={20} />)
        }

        for (let i = 0; i < 5 - book.star; i++) {
            score.push(<AiFillStar color="#74767A" size={20} />)
        }
    }

    star();

    return (
        <div className="card-con">
            <div className="card-stock">
                <div className="card-check-stock">
                    <BsCheckLg
                        size={7}
                        color="#ffff"
                    />
                </div>
                <p>มีสินค้า</p>
            </div>
            <Link to={`/Book-Detail/${book.id}`}>
                <div className="card-img">
                    <img src={book.image_front} />
                </div>
            </Link>
            <div className="card-add">
                <button onClick={() => {
                    let sum = 1 * Number(book.discount)
                    cartContext.handleAdd(book, 1, sum)
                }}>
                    <RiShoppingCartLine
                        color="#0156FF"
                        size={20}
                        style={{ transform: "scaleX(-1)" }}
                    />
                    <span>Add To Cart</span>
                </button>
            </div>
            <div className="card-star">
                {score.map(e => e)}
                <p>Reviews ({book.reviews})</p>
            </div>
            <div className="card-title">
                <Link to={`/Book-Detail/${book.id}`}><p>{book.title}</p></Link>
            </div>
            <div className="card-price">
                <p>THB{book.price}</p>
                <p>THB{book.discount}</p>
            </div>

            <div className="card-icon">
                <div>
                    <HiOutlineHeart
                        size={22}
                        color="#8C8C8C"
                    />
                </div>
                <div>
                    <CgMenuLeft
                        size={22}
                        style={{ transform: "rotate(270deg)" }}
                        color="#8C8C8C"
                    />
                </div>
            </div>
        </div>
    )
}

export default BookCard;