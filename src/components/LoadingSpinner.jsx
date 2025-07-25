
const LoadingSpinner = ({ size = "md" }) => {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };

  return (
    <div className={`${sizes[size]} border-4 border-blue-500 border-t-transparent rounded-full animate-spin`} />
  );
};

export default LoadingSpinner;