import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === id);
  console.log(book);
  const {
    image,
    tags,
    category,
    bookName,
    author,
    review,
    publisher,
    totalPages,
    yearOfPublishing,
    rating
  } = book;
  return (
    <div className="flex items-center justify-center gap-6">
      <div>
            <img src={image} alt="" />
      </div>
      <div>
        <h3>{bookName}</h3>
        <h3>By: {author}</h3>
        <p>Review: <span>{review}</span></p>
        <div className="flex items-center gap-7 my-5">
          {tags.map((tag, i) => (
            <button
              key={i}
              className="font-medium text-[#23BE0A] px-4 py-3 rounded-2xl text-xl bg-[rgba(35,190,10,0.05)]"
            >
              #{tag}
            </button>
          ))}
        </div>
          <p>Number of pages: <span>{totalPages}</span></p>
          <p>Publisher: <span>{publisher}</span></p>
          <p>Year Of Publishing: <span>{yearOfPublishing}</span></p>
          <p>Rating:<span>{rating}</span></p>
          <div>
          <button>Read</button>
          <button>Wishlist</button>
          </div>
      </div>
    </div>
  );
};

export default BookDetails;
