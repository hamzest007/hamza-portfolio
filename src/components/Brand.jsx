import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

const Brand = ({ size = 'md', withText = true, className = '' }) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center ${sizes[size]} font-bold ${className}`}
    >
      <FiShoppingBag className="text-blue-600 mr-1" />
      {withText && (
        <>
          <span className="text-blue-600">Elec</span>
          <span className="text-gray-800">xo</span>
        </>
      )}
    </Link>
  );
};

export default Brand;