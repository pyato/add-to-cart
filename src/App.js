import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import BookCart from './pages/BookCart';
import CheckOut from './pages/CheckOut';
import { Routes, Route } from 'react-router-dom';
import { bestSeller } from "./assets/book_object/BestSeller";
import { recommend } from "./assets/book_object/Recommend";
import { relevant } from "./assets/book_object/Relevant";

function App() {
  return (
    <div>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book-Detail/:id" element={
            <BookDetail
              bestSeller={bestSeller}
              recommend={recommend}
              relevant={relevant}
            />}
          />
          <Route path="/Book-Cart" element={<BookCart />} />
          <Route path="/Check-Out" element={<CheckOut />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
