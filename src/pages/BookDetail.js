import "../assets/css/BookDetail.css";
import React, { useContext, useEffect, useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { ImMail4 } from 'react-icons/im';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import BookList from "../components/BookList";
import IncrementBtn from "../components/IncrementBtn";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function BookDetail({ bestSeller, recommend, relevant }) {
    const [bookCover, setBookCover] = useState(true);
    const [count, setCount] = useState(1);
    const [detail, setDetail] = useState(true);
    const [book, setBook] = useState({});
    const { id } = useParams();
    const cartContext = useContext(CartContext);

    useEffect(() => {
        const findBook = async () => {
            const newArr = bestSeller.concat(recommend).concat(relevant);
            let result = await newArr.find((e) => e.id === id);
            setBook(result)
        }
        findBook();
    }, [id])

    return (
        <>
            <div className="container-detail">
                <div className="detail-con">
                    <div className="detail-img">
                        {bookCover ?
                            <img src={book.image_front} />
                            :
                            <img src={book.image_back} />
                        }
                        <div className="detail-front-back">
                            <img
                                src={book.image_front}
                                onClick={() => setBookCover(true)}
                                style={bookCover ? { opacity: "1" } : { opacity: "0.6" }}
                            />
                            <img
                                src={book.image_back}
                                onClick={() => setBookCover(false)}
                                style={bookCover ? { opacity: "0.6" } : { opacity: "1" }}
                            />
                        </div>
                    </div>
                    <div className="detail-text">
                        <div className="detail-title">
                            <p>{book.title}</p>
                        </div>
                        <div className="detail-book">
                            <p>ผู้เขียน : {book.author}</p>
                            <p>สำนักพิมพ์ : {book.publisher}</p>
                            <p>หมวดหมู่ : {book.category}</p>
                            <p>ประเภทของสินค้า : {book.type}</p>
                            <p>บาร์โค้ด : {book.barcode}</p>
                        </div>
                        <div className="detail-price">
                            <p>ราคา</p>
                            <span>THB{book.discount}</span>
                            <span>THB{book.price}</span>
                        </div>
                        <div className="detail-btn">
                            <IncrementBtn count={count} setCount={setCount} width="130px" height="50px" />
                            <div className="detail-add-to-cart">
                                <button onClick={() => {
                                    // cartContext.sumPriceBook(count, book.discount);
                                    let sum = count * Number(book.discount)
                                    cartContext.handleAdd(book, count, sum);
                                }}>
                                    Add
                                </button>
                            </div>
                            <div className="detail-wishlist">
                                <button><div><BsFillHeartFill size={20} /></div><p>Wishlist</p></button>
                            </div>
                        </div>
                        <div className="detail-share">
                            <span>แชร์ :</span>
                            <a href="#"><ImMail4 size={35} color="#729A4D" /></a>
                            <a href="#"><AiFillTwitterCircle size={40} color="#30455E" /></a>
                            <a href="#"><BsFacebook size={35} color="#3279EA" /></a>
                            <a href="#"><AiFillGooglePlusCircle size={40} color="#E44D37" /></a>
                        </div>
                    </div>
                </div>
                <div className="detail-btn-book">
                    <button className={detail ? "detail-btn1" : "detail-btn2"} onClick={() => setDetail(true)}>เกี่ยวกับสินค้า</button>
                    <button className={detail ? "detail-btn2" : "detail-btn1"} onClick={() => setDetail(false)}>รายละเอียด</button>
                </div>
            </div>
            <div className="detail-border" />
            <div className="container">
                <div className="detail-story">
                    <p><span>รายละเอียด : </span>{book.title}</p>
                    <p>
                        {book.story}
                    </p>
                </div>
                <BookList type="สินค้าที่เกี่ยวข้อง" books={relevant} />
            </div>
        </>

    )
}

export default BookDetail;