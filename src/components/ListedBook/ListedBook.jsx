import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getListFromLS, getWishedListFromLS } from "../../utility";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
const ListedBook = () => {
    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])
    const books = useLoaderData()

    useEffect(() => {
      const listedReadBook = getListFromLS()
      const listedWishedBook = getWishedListFromLS()
      const listedBook = books.filter(book=> listedReadBook.includes(book.bookId))
      setReadList(listedBook)
      const listWishBook = books.filter(book=> listedWishedBook.includes(book.bookId))
      setWishList(listWishBook)
    }, [])
    
  return (
    <Tabs>
      <TabList>
        <Tab>Read List</Tab>
        <Tab>Wished List</Tab>
      </TabList>

      <TabPanel>
        <h2>Read List: {readList.length}</h2>
        {
            readList.map(book=> <Book key={book.bookId} book={book}/>)
        }
      </TabPanel>
      <TabPanel>
        <h2>Wished List: {wishList.length}</h2>
        {
            wishList.map(book=> <Book key={book.bookId} book={book}/>)
        }
      </TabPanel>
    </Tabs>
  );
};

export default ListedBook;
