import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Pages from "./components/Pages/Pages";
import SingIn from "./components/SignIn/SingIn";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import ListedBook from "./components/ListedBook/ListedBook";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import BookDetails from "./components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listed_books",
        element: <ListedBook />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/pages",
        element: <Pages />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/signin",
        element: <SingIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
  </StrictMode>
);
