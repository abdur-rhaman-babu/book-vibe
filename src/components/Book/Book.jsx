import PropTypes from "prop-types";
import { RiStarLine } from "react-icons/ri";

const Book = ({book}) => {
    console.log(book)
    const {image,bookName,author,rating,tags} = book;
    return (
        <div className="border p-6 rounded-2xl text-left flex flex-col">
            <div className="bg-[#F3F3F3] px-24 py-12 rounded-2xl">
                <img className="h-40 mx-auto w-32" src={image} alt="" />
            </div>
            <div className="flex items-center gap-7 my-5">
                <button className="font-medium text-[#23BE0A] px-4 py-3 rounded-2xl text-xl bg-[rgba(35,190,10,0.05)]">Young Adult</button>
                <button className="font-medium text-[#23BE0A] px-4 py-3 rounded-2xl text-xl bg-[rgba(35,190,10,0.05)]">Identity</button>
            </div>
            <h3 className="font-play text-2xl font-bold my-3">{bookName}</h3>
            <p className="font-medium text-[#131313] opacity-80 text-xl mb-3 flex-grow">By: {author}</p>
            <div className="flex items-center justify-between border-t-2 border-dashed">
                <p className="font-medium text-[#131313] opacity-80 text-xl mb-3">{tags[0]}</p>
                <div className="flex items-center gap-4 mt-5"><p className="font-medium text-[#131313] opacity-80 text-xl mb-3">{rating} </p>
                <i className="text-2xl mb-4"><RiStarLine /></i>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;