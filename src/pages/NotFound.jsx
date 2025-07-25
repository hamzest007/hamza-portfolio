import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-secondary mb-8">Page not found</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-tertiary rounded-lg text-white font-bold hover:bg-opacity-80 transition inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;