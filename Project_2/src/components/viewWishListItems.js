// 'use client'

// import { useState } from 'react'

// export default function WishlistManager() {
//   const [wishlists, setWishlists] = useState([])
//   const [wishlistItems, setWishlistItems] = useState([])
//   const [userItems, setUserItems] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [userId, setUserId] = useState('')
//   const [selectedWishlistId, setSelectedWishlistId] = useState('')
//   const [view, setView] = useState('wishlists') // 'wishlists' or 'allItems'

//   const fetchUserWishlists = async (e) => {
//     e.preventDefault()
//     if (!userId) {
//       setError('Please enter a user ID to fetch wishlists')
//       return
//     }

//     setLoading(true)
//     setError(null)
//     setWishlists([])
//     setWishlistItems([])
//     setUserItems([])

//     try {
//       const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/userWishlists?user_id=${userId}`)
//       if (!response.ok) {
//         throw new Error('Failed to fetch user wishlists')
//       }
//       const data = await response.json()
//       setWishlists(data)
//       setView('wishlists')
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unknown error occurred')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const fetchWishlistItems = async (wishlistId) => {
//     setLoading(true)
//     setError(null)
//     setWishlistItems([])

//     try {
//       const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/viewWishlist?wishlist_id=${wishlistId}`)
//       if (!response.ok) {
//         throw new Error('Failed to fetch wishlist items')
//       }
//       const data = await response.json()
//       setWishlistItems(data)
//       setSelectedWishlistId(wishlistId)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unknown error occurred')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const fetchAllUserItems = async () => {
//     if (!userId) {
//       setError('Please enter a user ID to fetch all items')
//       return
//     }

//     setLoading(true)
//     setError(null)
//     setUserItems([])

//     try {
//       const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/userItems?user_id=${userId}`)
//       if (!response.ok) {
//         throw new Error('Failed to fetch user items')
//       }
//       const data = await response.json()
//       setUserItems(data)
//       setView('allItems')
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unknown error occurred')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const renderItems = (items) => (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {items.map((item) => (
//         <div key={decodeURIComponent(item.item.item_id)} className="border rounded-lg p-4 shadow-sm">
//           {decodeURIComponent(item.item.image_url) && decodeURIComponent(item.item.image_url) !== "" ? (
//             <img 
//               src={decodeURIComponent(item.item.image_url)} 
//               alt={decodeURIComponent(item.item.name)} 
//               className="w-full h-48 object-cover rounded-md mb-2"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
//               }}
//             />
//           ) : (
//             <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md mb-2">
//               <span className="text-gray-500">No Image Available</span>
//             </div>
//           )}
//           <h3 className="text-lg font-semibold mb-1">{decodeURIComponent(item.item.name)}</h3>
//           <p className="text-gray-600 mb-1">Price: ${decodeURIComponent(item.item.price)}</p>
//           <p className="text-gray-600 mb-1">Seller: {decodeURIComponent(item.item.seller)}</p>
//           <p className="text-gray-600 mb-1">Item ID: {decodeURIComponent(item.item.item_id)}</p>
//           <a
//             href={decodeURIComponent(item.item.url)}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 hover:underline"
//           >
//             View Item
//           </a>
//         </div>
//       ))}
//     </div>
//   )

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Wishlist Viewer</h1>
      
//       <form onSubmit={fetchUserWishlists} className="mb-6">
//         <div className="flex space-x-4">
//           <input
//             type="number"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//             placeholder="Enter user ID"
//             className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Fetch Wishlists
//           </button>
//           <button
//             type="button"
//             onClick={fetchAllUserItems}
//             className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             Fetch All Items
//           </button>
//         </div>
//       </form>

//       {error && (
//         <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md" role="alert">
//           <strong className="font-bold">Error!</strong>
//           <span className="block sm:inline"> {error}</span>
//         </div>
//       )}

//       {loading && (
//         <div className="flex justify-center items-center h-24">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       )}

//       {view === 'wishlists' && wishlists.length > 0 && (
//         <div className="mb-8">
//           <h2 className="text-xl font-bold mb-4">User Wishlists</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {wishlists.map((wishlist) => (
//               <button
//                 key={wishlist.wishlist_id}
//                 onClick={() => fetchWishlistItems(wishlist.wishlist_id)}
//                 className={`p-4 border rounded-md text-left transition-colors ${
//                   selectedWishlistId === wishlist.wishlist_id
//                     ? 'bg-blue-100 border-blue-500'
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 <p className="font-semibold">{wishlist.name}</p>
//                 <p className="text-sm text-gray-600">ID: {wishlist.wishlist_id}</p>
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {view === 'wishlists' && wishlistItems.length > 0 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Wishlist Items</h2>
//           {renderItems(wishlistItems)}
//         </div>
//       )}

//       {view === 'allItems' && userItems.length > 0 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">All User Items</h2>
//           {renderItems(userItems)}
//         </div>
//       )}
//     </div>
//   )
// }
'use client'

import { useState } from 'react'

export default function WishlistManager() {
  const [wishlists, setWishlists] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const [userItems, setUserItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [userId, setUserId] = useState('')
  const [selectedWishlistId, setSelectedWishlistId] = useState('')
  const [view, setView] = useState('wishlists') // 'wishlists' or 'allItems'

  const fetchUserWishlists = async (e) => {
    e.preventDefault()
    if (!userId) {
      setError('Please enter a user ID to fetch wishlists')
      return
    }

    setLoading(true)
    setError(null)
    setWishlists([])
    setWishlistItems([])
    setUserItems([])

    try {
      const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/userWishlists?user_id=${userId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch user wishlists')
      }
      const data = await response.json()
      setWishlists(data)
      setView('wishlists')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const fetchWishlistItems = async (wishlistId) => {
    setLoading(true)
    setError(null)
    setWishlistItems([])

    try {
      const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/viewWishlist?wishlist_id=${wishlistId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch wishlist items')
      }
      const data = await response.json()
      setWishlistItems(data)
      setSelectedWishlistId(wishlistId)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const fetchAllUserItems = async () => {
    if (!userId) {
      setError('Please enter a user ID to fetch all items')
      return
    }

    setLoading(true)
    setError(null)
    setUserItems([])

    try {
      const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/userItems?user_id=${userId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch user items')
      }
      const data = await response.json()
      setUserItems(data)
      setView('allItems')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const renderItems = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={decodeURIComponent(item.item.item_id)} className="border border-gray-600 rounded-lg p-4 shadow-sm bg-gray-700">
          {decodeURIComponent(item.item.image_url) && decodeURIComponent(item.item.image_url) !== "" ? (
            <img 
              src={decodeURIComponent(item.item.image_url)} 
              alt={decodeURIComponent(item.item.name)} 
              className="w-full h-48 object-cover rounded-md mb-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
              }}
            />
          ) : (
            <div className="w-full h-48 bg-gray-600 flex items-center justify-center rounded-md mb-2">
              <span className="text-gray-300">No Image Available</span>
            </div>
          )}
          <h3 className="text-lg font-semibold mb-1 text-gray-100">{decodeURIComponent(item.item.name)}</h3>
          <p className="text-gray-300 mb-1">Price: ${decodeURIComponent(item.item.price)}</p>
          <p className="text-gray-300 mb-1">Seller: {decodeURIComponent(item.item.seller)}</p>
          <p className="text-gray-300 mb-1">Item ID: {decodeURIComponent(item.item.item_id)}</p>
          <a
            href={decodeURIComponent(item.item.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View Item
          </a>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-700 rounded-xl shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-extrabold text-gray-100 text-center mb-8">Wishlist Viewer</h1>
          
          <form onSubmit={fetchUserWishlists} className="mb-6">
            <div className="flex space-x-4">
              <input
                type="number"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter user ID"
                className="flex-grow px-4 py-2 bg-gray-600 text-gray-100 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Fetch Wishlists
              </button>
              <button
                type="button"
                onClick={fetchAllUserItems}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Fetch All Items
              </button>
            </div>
          </form>

          {error && (
            <div className="mb-6 bg-red-900 border border-red-700 text-red-100 px-4 py-3 rounded-md" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}

          {loading && (
            <div className="flex justify-center items-center h-24">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

          {view === 'wishlists' && wishlists.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-100">User Wishlists</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {wishlists.map((wishlist) => (
                  <button
                    key={wishlist.wishlist_id}
                    onClick={() => fetchWishlistItems(wishlist.wishlist_id)}
                    className={`p-4 border rounded-md text-left transition-colors ${
                      selectedWishlistId === wishlist.wishlist_id
                        ? 'bg-blue-600 border-blue-400 text-white'
                        : 'bg-gray-600 border-gray-500 text-gray-100 hover:bg-gray-500'
                    }`}
                  >
                    <p className="font-semibold">{wishlist.name}</p>
                    <p className="text-sm text-gray-300">ID: {wishlist.wishlist_id}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {view === 'wishlists' && wishlistItems.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-100">Wishlist Items</h2>
              {renderItems(wishlistItems)}
            </div>
          )}

          {view === 'allItems' && userItems.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-100">All User Items</h2>
              {renderItems(userItems)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}