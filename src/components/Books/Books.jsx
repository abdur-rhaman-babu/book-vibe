import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-16 text-center">
      <div>
        <h1 className="font-play mb-8 text-4xl font-bold">Books</h1>
      </div>
      <div>
        <h1 className="font-play my-5 text-3xl font-bold">
          Books: {books.length}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                books.map(book=> <Book key={book.bookId} book = {book}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default Books;
