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
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
            <form onSubmit={handleSubmit} className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-md bottom-8">
                <h2 className="mb-6 text-2xl italic font-extrabold text-center text-red-600">Login</h2>

                <label htmlFor="email" className="block text-gray-700">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={inputData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"
                />

                <label htmlFor="password" className="block text-gray-700">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={inputData.password}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"
                />

                <label htmlFor="role" className="block text-gray-700">Role:</label>
                <select
                    id="role"
                    value={inputData.role}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"
                >
                    <option value="customer">Customer</option>
                    <option value="restaurant_owner">Restaurant Owner</option>
                    <option value="delivery_partner">Delivery Partner</option>
                </select>

                <button type="submit" className="w-full p-2 mt-1 text-white transition duration-200 bg-red-500 rounded hover:bg-red-600">Login</button>
                <p className='mt-5 text-center'>Haven't created account? <Link to="/signup" className='text-blue-600'>Signup</Link></p>
            </form>
        </div>
    );
};

export default Login;
