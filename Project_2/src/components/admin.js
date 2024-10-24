'use client'

import { useState } from 'react'

export default function AdminFeatures() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [adminUserId, setAdminUserId] = useState('')
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [deleteUserEmail, setDeleteUserEmail] = useState('')
  const [deleteUserName, setDeleteUserName] = useState('')
  const [updateUserId, setUpdateUserId] = useState('')
  const [updateUserEmail, setUpdateUserEmail] = useState('')
  const [updateUserName, setUpdateUserName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newIsAdmin, setNewIsAdmin] = useState(false)

  const fetchUsers = async () => {
    if (!adminUserId) {
      setError('Please enter an admin user ID')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/users?user_id=${adminUserId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      const data = await response.json()
      setUsers(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const createUser = async (e) => {
    e.preventDefault()
    if (!adminUserId || !newUserEmail || !newUserName) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // const response = await fetch('https://cst438p2g17s-cors-fnuajnq4udmr.herokuapp.com/createUser', {
      const response = await fetch('https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/createUser', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            user_id: parseInt(adminUserId),
            email: newUserEmail,
            username: newUserName
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create user')
      }

      // const newUser = await response.json();
      // setUsers([...users, newUser.parse()])
      setNewUserEmail('')
      setNewUserName('')
      alert('User created successfully!')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const deleteUser = async (e) => {
    e.preventDefault()
    if (!adminUserId || !deleteUserEmail || !deleteUserName) {
      setError('Please fill in all fields for deletion')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/deleteUser', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            user_id: parseInt(adminUserId),
            email: deleteUserEmail,
            username: deleteUserName
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to delete user')
      }

      setUsers(users.filter(user => user.email !== deleteUserEmail && user.username !== deleteUserName))
      setDeleteUserEmail('')
      setDeleteUserName('')
      alert('User deleted successfully!')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const updateUser = async (e) => {
    e.preventDefault()
    if (!adminUserId || !updateUserId || !updateUserEmail || !updateUserName) {
      setError('Please fill in all required fields for update')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/updateUser', {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            user_id: parseInt(adminUserId),
            email: updateUserEmail,
            username: updateUserName,
            ...(newEmail && { newEmail }),
            ...(newUsername && { newUsername }),
            ...(newIsAdmin !== null && { isAdmin: newIsAdmin }),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update user')
      }

      const updatedUser = await response;
      setUsers(users.map(user => user.user_id === updatedUser.user_id ? updatedUser : user))
      setUpdateUserId('')
      setUpdateUserEmail('')
      setUpdateUserName('')
      setNewEmail('')
      setNewUsername('')
      setNewIsAdmin(false)
      alert('User updated successfully!')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Get Users</h1>
            <form onSubmit={(e) => { e.preventDefault(); fetchUsers(); }} className="space-y-4">
              <input
                type="number"
                value={adminUserId}
                onChange={(e) => setAdminUserId(e.target.value)}
                placeholder="Enter admin user ID"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Fetch Users
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Create New User</h1>
            <form onSubmit={createUser} className="space-y-4">
              <input
                type="number"
                value={adminUserId}
                onChange={(e) => setAdminUserId(e.target.value)}
                placeholder="Admin User ID"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                placeholder="New User Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="New User Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Create User
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Delete User</h1>
            <form onSubmit={deleteUser} className="space-y-4">
              <input
                type="number"
                value={adminUserId}
                onChange={(e) => setAdminUserId(e.target.value)}
                placeholder="Admin User ID"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                value={deleteUserEmail}
                onChange={(e) => setDeleteUserEmail(e.target.value)}
                placeholder="User Email to Delete"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={deleteUserName}
                onChange={(e) => setDeleteUserName(e.target.value)}
                placeholder="User Name to Delete"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete User
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Update User</h1>
            <form onSubmit={updateUser} className="space-y-4">
              <input
                type="number"
                value={adminUserId}
                onChange={(e) => setAdminUserId(e.target.value)}
                placeholder="Admin User ID"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                value={updateUserId}
                onChange={(e) => setUpdateUserId(e.target.value)}
                placeholder="User ID to Update"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                value={updateUserEmail}
                onChange={(e) => setUpdateUserEmail(e.target.value)}
                placeholder="Current User Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={updateUserName}
                onChange={(e) => setUpdateUserName(e.target.value)}
                placeholder="Current User Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="New Email (optional)"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="New Username (optional)"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isAdmin"
                  checked={newIsAdmin}
                  onChange={(e) => setNewIsAdmin(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="isAdmin">Is Admin (optional)</label>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Update User
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}

          {loading && (
            <div className="flex justify-center items-center h-24">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

          {users.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
              <h2 className="text-2xl font-bold mb-4">User List</h2>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.user_id}>
                      <td className="px-6 py-4 whitespace-nowrap">{user.user_id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                      <td className="px-6 py-4  whitespace-nowrap">{user.is_admin ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
