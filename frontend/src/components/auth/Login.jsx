import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    const [inputData, setInputData] = useState({
        email: '',
        password: '',
        role: 'customer'
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative bottom-8">
                <h2 className="text-2xl font-extrabold text-center mb-6 text-red-600 italic">Login</h2>

                <label htmlFor="email" className="block text-gray-700">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={inputData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
                />

                <label htmlFor="password" className="block text-gray-700">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={inputData.password}
                    onChange={handleChange}
                    required
                    className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
                />

                <label htmlFor="role" className="block text-gray-700">Role:</label>
                <select
                    id="role"
                    value={inputData.role}
                    onChange={handleChange}
                    className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
                >
                    <option value="customer">Customer</option>
                    <option value="restaurant_owner">Restaurant Owner</option>
                    <option value="delivery_partner">Delivery Partner</option>
                </select>

                <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200 mt-1">Login</button>
                <p className='text-center mt-5'>Haven't created account? <Link to="/signup" className='text-blue-600'>Signup</Link></p>
            </form>
        </div>
    );
};

export default Login;
