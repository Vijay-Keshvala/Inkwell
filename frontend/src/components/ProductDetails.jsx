import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const ProductDetails = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const fetchUserId = async (token) => {
        try {
            const res = await fetch('http://localhost:4000/api/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error('Failed to fetch user');
            const data = await res.json();
            return data.userId; // Adjust if your backend returns a different key
        } catch (err) {
            console.error('Error fetching user ID:', err);
            return null;
        }
    };
    

    const handleAddToCart = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        try {
            const res = await fetch('http://localhost:4000/api/user/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    bookId: book._id,
                    quantity,
                }),
            });
            const data = await res.json();
            if (res.ok) {
                toast.success(data.message || 'Book added to cart');
            } else {
                toast.error(data.message || 'Failed to add to cart');
            }
        } catch (err) {
            toast.error('Error adding to cart');
            console.error(err);
        }
    };
    
    
    

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/books/${id}`);
                if (!response.ok) throw new Error('Failed to fetch book');
                const data = await response.json();
                setBook(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    if (!book) return null;

    return (
        <div className="pt-25">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
                <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li className="text-sm">
                        <Link to='/products'>
                            Home
                        </Link>
                    </li>
                    <li className="text-sm mb-5 cursor-pointer">
                        <svg
                            fill="currentColor"
                            width={16}
                            height={20}
                            viewBox="0 0 16 20"
                            aria-hidden="true"
                            className="mx-1 h-5 w-4 text-gray-300"
                        >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                        <span className="text-gray-700">/ {book.category}</span>
                    </li>
                </ol>
            </nav>

            {/* Main Grid */}
            <div className="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                {/* Book Image */}
                <img
                    src={book.imageUrl || 'https://via.placeholder.com/400x600'}
                    alt={book.title}
                    className="lg:col-span-1 w-full h-auto object-cover rounded-lg"
                />

                {/* Book Info */}
                <div className="lg:col-span-2 mt-4 lg:mt-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{book.title}</h1>
                    <p className="text-lg text-gray-600 mt-2">By {book.author}</p>
                    <p className="mt-4 text-2xl text-indigo-600 font-semibold">Rs/- {book.price.toFixed(2)}</p>

                    {/* Dummy Reviews */}
                    <div className="mt-4 flex items-center">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <StarIcon
                                key={i}
                                className={classNames(
                                    4 > i ? 'text-yellow-400' : 'text-gray-300',
                                    'h-5 w-5'
                                )}
                                aria-hidden="true"
                            />
                        ))}
                        <span className="ml-2 text-sm text-gray-500">(117 reviews)</span>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <h3 className="text-md font-semibold text-gray-800">Description</h3>
                        <p className="mt-2 text-gray-700 text-sm">{book.description || "No description available."}</p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="mt-6">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                            Quantity
                        </label>
                        <select
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="mt-1 block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            {[...Array(10).keys()].map((i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* CTA Button */}
                    <button
                        className="cursor-pointer mt-10 w-full bg-indigo-600 text-white font-medium py-3 rounded hover:bg-indigo-700 transition"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
