import { Link } from 'react-router-dom';

const LoadErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Something went wrong!</h1>
        <p className="text-lg mb-6">
          We`re having trouble loading the page. This might be due to a network issue or server problem.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Please check your connection and try again.
        </p>
        <Link to="/">
          <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-md ">
            Go Back to Home
          </button>
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="ml-3 mt-4 px-6 py-3 text-blue-600 bg-white hover:bg-gray-200 rounded-md shadow-md border border-blue-600"
        >
          Retry
        </button>
      </div>
      <div className="mt-8">
        <img
          src="https://cdn.dribbble.com/users/722246/screenshots/3100341/media/0e221020eb7b40c8d641b4cf2a5e791e.gif"
          alt="Error Illustration"
          className="w-64 h-64"
        />
      </div>
    </div>
  );
};

export default LoadErrorPage;