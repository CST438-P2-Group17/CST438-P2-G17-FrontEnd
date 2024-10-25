// import React, { useState } from 'react'

// function WishlistManager() {
//   const [wishListName, setWishListName] = useState('')
//   const [userId, setUserId] = useState('')
//   const [error, setError] = useState('')
//   const [showModal, setShowModal] = useState(false)
//   const [createdWishlistName, setCreatedWishlistName] = useState('')

//   const [wishlistId, setWishlistId] = useState('')
//   const [itemUrl, setItemUrl] = useState('')
//   const [itemName, setItemName] = useState('')
//   const [itemPrice, setItemPrice] = useState('')
//   const [itemSeller, setItemSeller] = useState('')
//   const [itemImageUrl, setItemImageUrl] = useState('')
//   const [itemError, setItemError] = useState('')
//   const [showItemModal, setShowItemModal] = useState(false)

//   const [deleteWishlistId, setDeleteWishlistId] = useState('')
//   const [deleteError, setDeleteError] = useState('')
//   const [showDeleteModal, setShowDeleteModal] = useState(false)

//   const [deleteItemId, setDeleteItemId] = useState('')
//   const [deleteItemError, setDeleteItemError] = useState('')
//   const [showDeleteItemModal, setShowDeleteItemModal] = useState(false)

//   const handleCreateWishlist = async (e) => {
//     e.preventDefault()
//     setError('')

//     try {
//       const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/addWishlist`, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//           userId: parseInt(userId),
//           name: wishListName 
//         })
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok: ' + response.statusText);
//       }
  
//       const data = await response.json();
//       console.log('Success:', data);
  
//       setCreatedWishlistName(data.name);
//       setShowModal(true);
//       setWishListName('');
//       setUserId('');
  
//     } catch (error) {
//       console.error('Error:', error);
//       setError(error.message || 'An error occurred while creating the wishlist.');
//     }    
//   }

//   const handleAddItem = async (e) => {
//     e.preventDefault()
//     setItemError('')

//     try {
//       const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/addWishlistedItem`, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//           wishlistId: parseInt(wishlistId),
//           url: encodeURIComponent(itemUrl),
//           name: encodeURIComponent(itemName),
//           price: parseFloat(itemPrice),
//           seller: encodeURIComponent(itemSeller),
//           image_url: encodeURIComponent(itemImageUrl)
//         })
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok: ' + response.statusText);
//       }
  
//       const data = await response.json();
//       console.log('Item added successfully:', data);
  
//       setShowItemModal(true);
//       setWishlistId('');
//       setItemUrl('');
//       setItemName('');
//       setItemPrice('');
//       setItemSeller('');
//       setItemImageUrl('');
  
//     } catch (error) {
//       console.error('Error:', error);
//       setItemError(error.message || 'An error occurred while adding the item to the wishlist.');
//     }
//   }

//   const handleDeleteWishlist = async (e) => {
//     e.preventDefault()
//     setDeleteError('')

//     try {
//       const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/deleteWishlist?wishlist_id=${deleteWishlistId}`, {
//         method: 'DELETE',
//         headers: {
//           'Accept': 'application/json',
//         },
//       });

//       if (response.status === 204) {
//         console.log('Wishlist deleted successfully');
//         setShowDeleteModal(true);
//         setDeleteWishlistId('');
//       } else if (response.status === 404) {
//         throw new Error('Wishlist not found');
//       } else {
//         throw new Error('Failed to delete wishlist');
//       }

//     } catch (error) {
//       console.error('Error:', error);
//       setDeleteError(error.message || 'An error occurred while deleting the wishlist.');
//     }
//   }

//   const handleDeleteItem = async (e) => {
//     e.preventDefault()
//     setDeleteItemError('')

//     try {
//       const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/deleteWishlistedItem?wishlisted_item_id=${deleteItemId}`, {
//         method: 'DELETE',
//         headers: {
//           'Accept': 'application/json',
//         },
//       });

//       if (response.status === 204) {
//         console.log('Item deleted successfully');
//         setShowDeleteItemModal(true);
//         setDeleteItemId('');
//       } else if (response.status === 404) {
//         throw new Error('Item not found');
//       } else {
//         throw new Error('Failed to delete item');
//       }

//     } catch (error) {
//       console.error('Error:', error);
//       setDeleteItemError(error.message || 'An error occurred while deleting the item.');
//     }
//   }

//   const closeModal = () => {
//     setShowModal(false)
//   }

//   const closeItemModal = () => {
//     setShowItemModal(false)
//   }

//   const closeDeleteModal = () => {
//     setShowDeleteModal(false)
//   }

//   const closeDeleteItemModal = () => {
//     setShowDeleteItemModal(false)
//   }

//   return (
//     <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-8 text-center">Wishlist Manager</h1>

//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Create New Wishlist</h2>
//         <form onSubmit={handleCreateWishlist} className="space-y-4">
//           <div>
//             <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
//             <input
//               type="number"
//               id="userId"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Wishlist Name</label>
//             <input
//               type="text"
//               id="name"
//               value={wishListName}
//               onChange={(e) => setWishListName(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Create Wishlist
//           </button>
//         </form>
//         {error && (
//           <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
//             {error}
//           </div>
//         )}
//       </div>

//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Add Item to Wishlist</h2>
//         <form onSubmit={handleAddItem} className="space-y-4">
//           <div>
//             <label htmlFor="wishlistId" className="block text-sm font-medium text-gray-700">Wishlist ID</label>
//             <input
//               type="number"
//               id="wishlistId"
//               value={wishlistId}
//               onChange={(e) => setWishlistId(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="itemUrl" className="block text-sm font-medium text-gray-700">Item URL</label>
//             <input
//               type="url"
//               id="itemUrl"
//               value={itemUrl}
//               onChange={(e) => setItemUrl(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name</label>
//             <input
//               type="text"
//               id="itemName"
//               value={itemName}
//               onChange={(e) => setItemName(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="itemPrice" className="block text-sm font-medium text-gray-700">Item Price</label>
//             <input
//               type="number"
//               id="itemPrice"
//               value={itemPrice}
//               onChange={(e) => setItemPrice(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//               step="0.01"
//             />
//           </div>
//           <div>
//             <label htmlFor="itemSeller" className="block text-sm font-medium text-gray-700">Seller</label>
//             <input
//               type="text"
//               id="itemSeller"
//               value={itemSeller}
//               onChange={(e) => setItemSeller(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="itemImageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
//             <input
//               type="url"
//               id="itemImageUrl"
//               value={itemImageUrl}
//               onChange={(e) => setItemImageUrl(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//           >
//             Add Item to Wishlist
//           </button>
//         </form>
//         {itemError && (
//           <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
//             {itemError}
//           </div>
//         )}
//       </div>

//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Delete Wishlist</h2>
//         <form onSubmit={handleDeleteWishlist} className="space-y-4">
//           <div>
//             <label htmlFor="deleteWishlistId" className="block text-sm font-medium text-gray-700">Wishlist ID</label>
//             <input
//               type="number"
//               id="deleteWishlistId"
//               value={deleteWishlistId}
//               onChange={(e) => setDeleteWishlistId(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//           >
//             Delete Wishlist
//           </button>
//         </form>
//         {deleteError && (
//           <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
//             {deleteError}
//           </div>
//         )}
//       </div>

//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Delete Item from Wishlist</h2>
//         <form onSubmit={handleDeleteItem} className="space-y-4">
//           <div>
//             <label htmlFor="deleteItemId" className="block text-sm font-medium text-gray-700">Wishlisted Item ID</label>
//             <input
//               type="number"
//               id="deleteItemId"
//               value={deleteItemId}
//               onChange={(e) => setDeleteItemId(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//           >
//             Delete Item
//           </button>
//         </form>
//         {deleteItemError && (
//           <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
//             {deleteItemError}
//           </div>
//         )}
//       </div>

//       {/* Modals */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="wishlist-modal">
//           <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//             <div className="mt-3 text-center">
//               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
//                 <svg
//                   className="h-6 w-6 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   ></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Wishlist Created Successfully!</h3>
//               <div className="mt-2 px-7 py-3">
//                 <p className="text-sm text-gray-500">
//                   Your wishlist "{createdWishlistName}" has been created.
//                 </p>
//               </div>
//               <div className="items-center px-4 py-3">
//                 <button
//                   id="ok-btn"
//                   className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
//                   onClick={closeModal}
//                 >
//                   OK
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showItemModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="item-modal">
//           <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//             <div className="mt-3 text-center">
//               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
//                 <svg
//                   className="h-6 w-6 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   ></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Item Added Successfully!</h3>
//               <div className="mt-2 px-7 py-3">
//                 <p className="text-sm text-gray-500">
//                   The item has been added to the wishlist.
//                 </p>
//               </div>
//               <div className="items-center px-4 py-3">
//                 <button
//                   id="ok-btn"
//                   className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
//                   onClick={closeItemModal}
//                 >
//                   OK
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showDeleteModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="delete-modal">
//           <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//             <div className="mt-3 text-center">
//               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
//                 <svg
//                   className="h-6 w-6 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   ></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Wishlist Deleted Successfully!</h3>
//               <div className="mt-2 px-7 py-3">
//                 <p className="text-sm text-gray-500">
//                   The wishlist has been deleted.
//                 </p>
//               </div>
//               <div className="items-center px-4 py-3">
//                 <button
//                   id="ok-btn"
//                   className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
//                   onClick={closeDeleteModal}
//                 >
//                   OK
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showDeleteItemModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="delete-item-modal">
//           <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//             <div className="mt-3 text-center">
//               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
//                 <svg
//                   className="h-6 w-6 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   ></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Item Deleted Successfully!</h3>
//               <div className="mt-2 px-7 py-3">
//                 <p className="text-sm text-gray-500">
//                   The item has been deleted from the wishlist.
//                 </p>
//               </div>
//               <div className="items-center px-4 py-3">
//                 <button
//                   id="ok-btn"
//                   className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
//                   onClick={closeDeleteItemModal}
//                 >
//                   OK
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default WishlistManager
import React, { useState } from 'react'

function WishlistManager() {
  const [wishListName, setWishListName] = useState('')
  const [userId, setUserId] = useState('')
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [createdWishlistName, setCreatedWishlistName] = useState('')

  const [wishlistId, setWishlistId] = useState('')
  const [itemUrl, setItemUrl] = useState('')
  const [itemName, setItemName] = useState('')
  const [itemPrice, setItemPrice] = useState('')
  const [itemSeller, setItemSeller] = useState('')
  const [itemImageUrl, setItemImageUrl] = useState('')
  const [itemError, setItemError] = useState('')
  const [showItemModal, setShowItemModal] = useState(false)

  const [deleteWishlistId, setDeleteWishlistId] = useState('')
  const [deleteError, setDeleteError] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [deleteItemId, setDeleteItemId] = useState('')
  const [deleteItemError, setDeleteItemError] = useState('')
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false)

  const [editItemId, setEditItemId] = useState('')
  const [editItemUrl, setEditItemUrl] = useState('')
  const [editItemName, setEditItemName] = useState('')
  const [editItemPrice, setEditItemPrice] = useState('')
  const [editItemSeller, setEditItemSeller] = useState('')
  const [editItemImageUrl, setEditItemImageUrl] = useState('')
  const [editItemError, setEditItemError] = useState('')
  const [showEditItemModal, setShowEditItemModal] = useState(false)

  const handleCreateWishlist = async (e) => {
    e.preventDefault()
    setError('')

    try {
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
      setError(error.message || 'An error occurred while creating the wishlist.');
    }    
  }

  const handleAddItem = async (e) => {
    e.preventDefault()
    setItemError('')

    try {
      const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/addWishlistedItem`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          wishlistId: parseInt(wishlistId),
          url: encodeURIComponent(itemUrl),
          name: encodeURIComponent(itemName),
          price: parseFloat(itemPrice),
          seller: encodeURIComponent(itemSeller),
          image_url: encodeURIComponent(itemImageUrl)
        })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
  
      const data = await response.json();
      console.log('Item added successfully:', data);
  
      setShowItemModal(true);
      setWishlistId('');
      setItemUrl('');
      setItemName('');
      setItemPrice('');
      setItemSeller('');
      setItemImageUrl('');
  
    } catch (error) {
      console.error('Error:', error);
      setItemError(error.message || 'An error occurred while adding the item to the wishlist.');
    }
  }

  const handleDeleteWishlist = async (e) => {
    e.preventDefault()
    setDeleteError('')

    try {
      const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/deleteWishlist?wishlist_id=${deleteWishlistId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.status === 204) {
        console.log('Wishlist deleted successfully');
        setShowDeleteModal(true);
        setDeleteWishlistId('');
      } else if (response.status === 404) {
        throw new Error('Wishlist not found');
      } else {
        throw new Error('Failed to delete wishlist');
      }

    } catch (error) {
      console.error('Error:', error);
      setDeleteError(error.message || 'An error occurred while deleting the wishlist.');
    }
  }

  const handleDeleteItem = async (e) => {
    e.preventDefault()
    setDeleteItemError('')

    try {
      const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/deleteWishlistedItem?wishlisted_item_id=${deleteItemId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.status === 204) {
        console.log('Item deleted successfully');
        setShowDeleteItemModal(true);
        setDeleteItemId('');
      } else if (response.status === 404) {
        throw new Error('Item not found');
      } else {
        throw new Error('Failed to delete item');
      }

    } catch (error) {
      console.error('Error:', error);
      setDeleteItemError(error.message || 'An error occurred while deleting the item.');
    }
  }

  const handleEditItem = async (e) => {
    e.preventDefault()
    setEditItemError('')

    const params = new URLSearchParams()
    params.append('item_id', editItemId)
    if (editItemUrl) params.append('url', editItemUrl)
    if (editItemName) params.append('name', editItemName)
    if (editItemPrice) params.append('price', editItemPrice)
    if (editItemSeller) params.append('seller', editItemSeller)
    if (editItemImageUrl) params.append('image_url', editItemImageUrl)

    try {
      const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/editItem?${params.toString()}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      const data = await response.json();
      console.log('Item edited successfully:', data);

      setShowEditItemModal(true);
      setEditItemId('');
      setEditItemUrl('');
      setEditItemName('');
      setEditItemPrice('');
      setEditItemSeller('');
      setEditItemImageUrl('');

    } catch (error) {
      console.error('Error:', error);
      setEditItemError(error.message || 'An error occurred while editing the item.');
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const closeItemModal = () => {
    setShowItemModal(false)
  }

  const closeDeleteModal = () => {
    setShowDeleteModal(false)
  }

  const closeDeleteItemModal = () => {
    setShowDeleteItemModal(false)
  }

  const closeEditItemModal = () => {
    setShowEditItemModal(false)
  }

  return (
    <div className="min-h-screen bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-700 rounded-xl shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-extrabold text-gray-100 text-center mb-8">Wishlist Manager</h1>

          <div className="space-y-8">
            <div className="bg-gray-600 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-100 mb-4">Create New Wishlist</h2>
              <form onSubmit={handleCreateWishlist} className="space-y-4">
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-300">User ID</label>
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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Wishlist Name</label>
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
            </div>

            <div className="bg-gray-600 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-100 mb-4">Add Item to Wishlist</h2>
              <form onSubmit={handleAddItem} className="space-y-4">
                <div>
                  <label htmlFor="wishlistId" className="block text-sm font-medium text-gray-300">Wishlist ID</label>
                  <input
                    type="number"
                    id="wishlistId"
                    value={wishlistId}
                    onChange={(e) => setWishlistId(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="itemUrl" className="block text-sm font-medium text-gray-300">Item URL</label>
                  <input
                    type="url"
                    id="itemUrl"
                    value={itemUrl}
                    onChange={(e) => setItemUrl(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="itemName" className="block text-sm font-medium text-gray-300">Item Name</label>
                  <input
                    type="text"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="itemPrice" className="block text-sm font-medium text-gray-300">Item Price</label>
                  <input
                    type="number"
                    id="itemPrice"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    step="0.01"
                  />
                </div>
                <div>
                  <label htmlFor="itemSeller" className="block text-sm font-medium text-gray-300">Seller</label>
                  <input
                    type="text"
                    id="itemSeller"
                    value={itemSeller}
                    onChange={(e) => setItemSeller(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="itemImageUrl" className="block text-sm font-medium text-gray-300">Image URL</label>
                  <input
                    type="url"
                    id="itemImageUrl"
                    value={itemImageUrl}
                    onChange={(e) => setItemImageUrl(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Add Item to Wishlist
                </button>
              </form>
              {itemError && (
                <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                  {itemError}
                </div>
              )}
            </div>

            <div className="bg-gray-600 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-100 mb-4">Delete Wishlist</h2>
              <form onSubmit={handleDeleteWishlist} className="space-y-4">
                <div>
                  <label htmlFor="deleteWishlistId" className="block text-sm font-medium text-gray-300">Wishlist ID</label>
                  <input
                    type="number"
                    id="deleteWishlistId"
                    value={deleteWishlistId}
                    onChange={(e) => setDeleteWishlistId(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete Wishlist
                </button>
              </form>
              {deleteError && (
                <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                  {deleteError}
                </div>
              )}
            </div>

            <div className="bg-gray-600 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-100 mb-4">Delete Item from Wishlist</h2>
              <form onSubmit={handleDeleteItem} className="space-y-4">
                <div>
                  <label htmlFor="deleteItemId"   className="block text-sm font-medium text-gray-300">Wishlisted Item ID</label>
                  <input
                    type="number"
                    id="deleteItemId"
                    value={deleteItemId}
                    onChange={(e) => setDeleteItemId(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete Item
                </button>
              </form>
              {deleteItemError && (
                <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                  {deleteItemError}
                </div>
              )}
            </div>

            <div className="bg-gray-600 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-100 mb-4">Edit Item</h2>
              <form onSubmit={handleEditItem} className="space-y-4">
                <div>
                  <label htmlFor="editItemId" className="block text-sm font-medium text-gray-300">Item ID</label>
                  <input
                    type="number"
                    id="editItemId"
                    value={editItemId}
                    onChange={(e) => setEditItemId(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="editItemUrl" className="block text-sm font-medium text-gray-300">New Item URL (optional)</label>
                  <input
                    type="url"
                    id="editItemUrl"
                    value={editItemUrl}
                    onChange={(e) => setEditItemUrl(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="editItemName" className="block text-sm font-medium text-gray-300">New Item Name (optional)</label>
                  <input
                    type="text"
                    id="editItemName"
                    value={editItemName}
                    onChange={(e) => setEditItemName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="editItemPrice" className="block text-sm font-medium text-gray-300">New Item Price (optional)</label>
                  <input
                    type="number"
                    id="editItemPrice"
                    value={editItemPrice}
                    onChange={(e) => setEditItemPrice(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    step="0.01"
                  />
                </div>
                <div>
                  <label htmlFor="editItemSeller" className="block text-sm font-medium text-gray-300">New Seller (optional)</label>
                  <input
                    type="text"
                    id="editItemSeller"
                    value={editItemSeller}
                    onChange={(e) => setEditItemSeller(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="editItemImageUrl" className="block text-sm font-medium text-gray-300">New Image URL (optional)</label>
                  <input
                    type="url"
                    id="editItemImageUrl"
                    value={editItemImageUrl}
                    onChange={(e) => setEditItemImageUrl(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Edit Item
                </button>
              </form>
              {editItemError && (
                <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                  {editItemError}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="wishlist-modal">
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

      {showItemModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="item-modal">
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
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Item Added Successfully!</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  The item has been added to the wishlist.
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  onClick={closeItemModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="delete-modal">
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
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Wishlist Deleted Successfully!</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  The wishlist has been deleted.
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  onClick={closeDeleteModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDeleteItemModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="delete-item-modal">
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
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Item Deleted Successfully!</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  The item has been deleted from the wishlist.
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  onClick={closeDeleteItemModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditItemModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="edit-item-modal">
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
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Item Edited Successfully!</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  The item has been updated.
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  onClick={closeEditItemModal}
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

export default WishlistManager