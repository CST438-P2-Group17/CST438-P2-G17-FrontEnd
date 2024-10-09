import React from 'react'

function UserProfile() {
  // Default values for the user object

  if(localStorage.getItem(`userData`) == null){
    return <></>
  }
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
      </div>
      <div className="px-6 py-4 space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600">Name:</p>
          <p className="text-sm text-gray-800">{JSON.parse(localStorage.getItem('userData')).username}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600">Email:</p>
          <p className="text-sm text-gray-800">{JSON.parse(localStorage.getItem('userData')).email}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600">Admin Status:</p>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            JSON.parse(localStorage.getItem('userData')).isAdmin 
              ? "bg-green-100 text-green-800" 
              : "bg-gray-100 text-gray-800"
          }`}>
            {JSON.parse(localStorage.getItem('userData')).isAdmin ? "Admin" : "Regular User"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600">ID Number:</p>
          <p className="text-sm text-gray-800">{JSON.parse(localStorage.getItem('userData')).user_id}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile