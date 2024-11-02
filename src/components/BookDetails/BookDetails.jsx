import { useLoaderData, useParams } from "react-router-dom";
import { addDataToLS } from "../../utility";

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

  const handleMarkAsRead = (id) =>{
      console.log('handlemarkasread')
      addDataToLS(id)
  }


  return (
    <div className="flex items-center justify-center gap-10">
      <div className="w-1/2 bg-[rgba(19,19,19,0.05)] py-16  px-24 rounded-2xl">
            <img className="mx-auto h-[650px]" src={image} alt="" />
      </div>
      <div className="w-1/2">
        <h3 className="font-play text-4xl font-bold my-5">{bookName}</h3>
        <h3 className="text-xl font-medium text-[rgba(19,19,19,0.8)]">By: {author}</h3>
        <p className="text-xl font-medium opacity-80 border-t-2 border-b-2 py-4 my-5">{category}</p>
        <p className="font-bold text-xl">Review: <span className="text-base font-normal">{review}</span></p>
        <div className="flex items-center gap-7 my-5"> <span className="font-bold">Tag: </span>
          {tags.map((tag, i) => (
            <button
              key={i}
              className="font-medium text-[#23BE0A] px-4 py-3 rounded-2xl text-xl bg-[rgba(35,190,10,0.05)]"
            >
              #{tag}
            </button>
          ))}
        </div>
            <div className="space-y-4">
          <p className="font-normal text-base opacity-70">Number of pages: <span className="ml-32 font-semibold opacity-100 ">{totalPages}</span></p>
          <p className="font-normal text-base opacity-70">Publisher: <span className="ml-48 font-semibold opacity-100 ">{publisher}</span></p>
          <p className="font-normal text-base opacity-70">Year Of Publishing: <span className="ml-32 font-semibold opacity-100 ">{yearOfPublishing}</span></p>
          <p className="font-normal text-base opacity-70">Rating:<span className="ml-56 font-semibold opacity-100 ">{rating}</span></p>
            </div>
          <div className="space-x-5 my-5">
          <button onClick={()=>handleMarkAsRead(id)} className="py-3 px-5 border rounded-lg font-semibold">Read</button>
          <button className="py-3 px-5 border rounded-lg bg-[#50B1C9] font-semibold text-white">Wishlist</button>
          </div>
      </div>
    </div>
  );
};

export default BookDetails;
