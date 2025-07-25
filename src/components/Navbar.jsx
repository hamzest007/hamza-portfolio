import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";
import axios from "../axios";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length;
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get user on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        localStorage.removeItem("token");
      }
    };

    fetchUser();
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-blue-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-1 z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="text-2xl font-bold text-blue-600">Elec</span>
          <span className="text-2xl font-bold text-gray-800">xo</span>
        </Link>

        {/* Search Bar - Desktop */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-6 max-w-xl">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                <FiX size={18} />
              </button>
            )}
          </div>
        </form>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</Link>
          <Link to="/deals" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Deals</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
        </div>

        {/* Icons + Auth */}
        <div className="flex items-center space-x-5 sm:space-x-6">
          <button 
            className="md:hidden text-gray-600 hover:text-blue-500 transition-colors"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setIsMobileMenuOpen(false);
            }}
          >
            <FiSearch size={20} />
          </button>

          <Link 
            to="/wishlist" 
            className="text-gray-600 hover:text-blue-500 transition-colors relative"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiHeart size={20} />
            {wishlistItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistItemCount > 9 ? "9+" : wishlistItemCount}
              </span>
            )}
          </Link>

          {user ? (
            <Link 
              to="/account" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiUser size={20} />
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-blue-500 transition-colors md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiUser size={20} />
            </Link>
          )}

          <Link 
            to="/cart" 
            className="relative text-gray-600 hover:text-blue-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount > 9 ? "9+" : cartItemCount}
              </span>
            )}
          </Link>

          {/* Desktop Auth Buttons */}
          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-gray-700 text-sm">Hi, {user.name.split(' ')[0]}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 font-semibold hover:underline transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex gap-3 text-sm">
              <Link to="/login" className="text-blue-600 font-semibold hover:underline transition-colors">Login</Link>
              <Link to="/signup" className="text-blue-600 font-semibold hover:underline transition-colors">Signup</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Search */}
      {isSearchOpen && (
        <form onSubmit={handleSearch} className="md:hidden px-4 py-3 bg-gray-50">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              autoFocus
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                <FiX size={18} />
              </button>
            )}
          </div>
        </form>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-16 px-4 overflow-y-auto">
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-200">
            {user ? (
              <div className="flex items-center justify-between px-2 py-3">
                <span className="font-medium">Hi, {user.name.split(' ')[0]}</span>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 font-semibold hover:underline transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-4 px-2 py-3">
                <Link 
                  to="/login" 
                  className="flex-1 text-center py-2 bg-blue-600 text-white rounded-md font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="flex-1 text-center py-2 border border-blue-600 text-blue-600 rounded-md font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Signup
                </Link>
              </div>
            )}

            <Link 
              to="/products" 
              className="px-2 py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/deals" 
              className="px-2 py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Deals
            </Link>
            <Link 
              to="/about" 
              className="px-2 py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            {user && (
              <Link 
                to="/account" 
                className="px-2 py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Account
              </Link>
            )}
            <Link 
              to="/wishlist" 
              className="px-2 py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wishlist {wishlistItemCount > 0 && `(${wishlistItemCount})`}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;