import React from 'react';
import Slide from '../components/Slide';
import BookList from '../components/BookList';
import { bestSeller } from "../assets/book_object/BestSeller";
import { recommend } from "../assets/book_object/Recommend";

function Home() {

    return (
        <div className="container">
            <Slide />
            <BookList type="สินค้าขายดี" books={bestSeller} />
            <BookList type="สินค้าแนะนำ" books={recommend} />
        </div>
    )
}

export default Home;