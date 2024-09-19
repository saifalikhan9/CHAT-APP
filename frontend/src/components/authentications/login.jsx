import React from 'react'
import { useState } from 'react';
export const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
   
  });

  const [passwordVisib, setpasswordVisib] = useState(false);

  const togelpass = () => {
    setpasswordVisib(!passwordVisib);
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container mx-auto min-auto ">
      <div className="
    h-[85px] 
    w-[400px]
     ml-[388px] 
     mt-5
     flex
    container 
    content-center 
    items-center
     justify-center
    rounded-lg
    text-xl
    Work sans
    mx-auto
    min-auto
    bg-slate-50">
        <h3 className="text-center">Login</h3>
      </div>
      <div className="component
    container 
    w-[400px] 
    ml-[390px]
    rounded-lg
      content-center    
    pb-10
      mt-2
      mb-7
    bg-slate-50">
        <div className=" flex items-center justify-center  pb-6">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete='username'
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={passwordVisib ? 'text' : 'password'}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete='password'
              />
              <button onClick={togelpass} className='bg-cyan-500 p-1 m-1 rounded-sm color-sky text-slate-50 ' >{passwordVisib ? 'hide' : 'show'}</button>
            </div>
        
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
