import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    });
    handleOrderPopup();
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
            {/*Header section*/}
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Order Now</h1>
              <div 
                className="cursor-pointer hover:scale-110 duration-200"
                onClick={handleOrderPopup}
              >
                <IoCloseOutline size={25} />
              </div>
            </div>

            {/*Form section*/}
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 dark:border-gray-500 rounded-md px-4 py-2 outline-none focus:border-primary dark:bg-gray-800"
                />
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 dark:border-gray-500 rounded-md px-4 py-2 outline-none focus:border-primary dark:bg-gray-800"
                />
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 dark:border-gray-500 rounded-md px-4 py-2 outline-none focus:border-primary dark:bg-gray-800"
                />
                <textarea 
                  name="address"
                  placeholder="Delivery Address"
                  rows={2}
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 dark:border-gray-500 rounded-md px-4 py-2 outline-none focus:border-primary dark:bg-gray-800"
                />
                <textarea 
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 dark:border-gray-500 rounded-md px-4 py-2 outline-none focus:border-primary dark:bg-gray-800"
                />
                <button 
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 duration-200"
                  type="submit"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup;