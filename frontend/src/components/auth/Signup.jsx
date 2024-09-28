import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
    const [inputData, setInputData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: 'customer', // Default role
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form
                className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-md bottom-8"
                onSubmit={handleSubmit}
            >
                <h2 className="mb-6 text-2xl italic font-extrabold text-center text-red-600">Sign Up</h2>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor='fullname'>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        id='fullname'
                        value={inputData.fullName}
                        onChange={handleChange}
                        required
                        className="block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor='email'>Email</label>
                    <input
                        type="email"
                        name="email"
                        id='email'
                        value={inputData.email}
                        onChange={handleChange}
                        required
                        className="block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor='phoneNumber'>Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id='phoneNumber'
                        value={inputData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor='password '>Password</label>
                    <input
                        type="password"
                        name="password"
                        id='password'
                        value={inputData.password}
                        onChange={handleChange}
                        required
                        className="block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor='role'>Role</label>
                    <select
                        name="role"
                        id='role'
                        value={inputData.role}
                        onChange={handleChange}
                        className="block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    >
                        <option value="customer">Customer</option>
                        <option value="restaurant_owner">Restaurant Owner</option>
                        <option value="delivery_partner">Delivery Partner</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full p-2 mt-1 text-white transition duration-300 bg-red-500 rounded hover:bg-red-600"
                >
                    Sign Up
                </button>
                <p className='mt-5 text-center'>Already Have account? <Link to="/login" className='text-blue-700'>Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;
