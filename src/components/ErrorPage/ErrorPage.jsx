import notFound from "../../assets/notFound.png";
const ErrorPage = () => {
  return (
    <div className="flex items-center h-screen justify-center">
      <div>
        <img src={notFound} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
