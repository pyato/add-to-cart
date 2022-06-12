import "../assets/css/BookList.css";
import BookCard from "./BooKCard";
import SlideButton from "./SlideButton";

function BookList({ type, books }) {

    return (
        <div>
            <div className="book-list-head">
                <p>
                    {type}
                </p>
                <p>
                    <a href="#">ดูสินค้าขายดีทั้งหมด</a>
                </p>
            </div>
            <div className="book-list-con">
                {books.map((e) => <BookCard book={e} />)}
                <SlideButton />
            </div>
        </div>
    )
}

export default BookList;