import { useLoaderData } from "react-router-dom";
import PagesToread from "../PagesToRead/PagesToRead";
const Pages = () => {
    const books = useLoaderData()
    
    return (
        <div>
            <PagesToread books = {books}/>
        </div>
    ); 
};

export default Pages;