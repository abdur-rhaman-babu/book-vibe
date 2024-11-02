import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getListFromLS, getWishedListFromLS } from "../../utility";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState('')
  const books = useLoaderData();

  useEffect(() => {
    const listedReadBook = getListFromLS();
    const listedWishedBook = getWishedListFromLS();
    const listedBook = books.filter((book) =>
      listedReadBook.includes(book.bookId)
    );
    setReadList(listedBook);
    const listWishBook = books.filter((book) =>
      listedWishedBook.includes(book.bookId)
    );
    setWishList(listWishBook);
  }, []);

  const handleSort = (sortType) =>{
      setSort(sortType)
      if(sortType === 'ratings'){
        const sortedListByrating = [...readList].sort((a,b)=> a.rating - b.rating)
        setReadList(sortedListByrating)
      }

      if(sortType === 'number of pages'){
        const sortedListByNumberOfPages = [...readList].sort((a,b)=> a.totalPages - b.totalPages)
        setReadList(sortedListByNumberOfPages)
      }
  }

  return (
    <>
      <div className="text-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {
              sort ? `sort by: ${sort}` : 'Sort by'
            }
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={()=>handleSort('ratings')}>Rating</a>
            </li>
            <li>
              <a onClick={()=>handleSort('number of pages')}>Number of pages</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wished List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read List: {readList.length}</h2>
          <div className="space-y-5 my-10">
            {readList.map((book) => (
              <Book key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wished List: {wishList.length}</h2>
          {wishList.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ListedBook;
