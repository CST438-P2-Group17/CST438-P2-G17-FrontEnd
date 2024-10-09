import React, { useState } from 'react'

function CreateWishlist() {
  const [wishListName, setWishListName] = useState('')
  const [userId, setUserId] = useState('')
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [createdWishlistName, setCreatedWishlistName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
        console.log(userId);
        console.log(wishListName);
        const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/addWishlist`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                userId: parseInt(userId),
                name: wishListName 
            })
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
    
        const data = await response.json(); 
        console.log('Success:', data); 
    
        setCreatedWishlistName(data.name); 
        setShowModal(true);
        setWishListName(''); 
        setUserId('');
    
    } catch (error) {
        console.error('Error:', error);
        setError(error.message || 'An error occurred while creating the wishlist.'); // Use error.message
    }    
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Wishlist</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
          <input
            type="number"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Wishlist Name</label>
          <input
            type="text"
            id="name"
            value={wishListName}
            onChange={(e) => setWishListName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Wishlist
        </button>
      </form>
      {error && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Wishlist Created Successfully!</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Your wishlist "{createdWishlistName}" has been created.
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  onClick={closeModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateWishlist