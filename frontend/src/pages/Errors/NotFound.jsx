import NotFoundGif from "../../assets/images/404/404.gif";
const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>

        <h2 className="text-4xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          The page you are looking for doesn`t exist.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Go Back Home
          </a>
        </div>

        <div className="mt-8">
          <img
            src={NotFoundGif}
            alt="404 Illustration"
            className="mx-auto w-80 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
