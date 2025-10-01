import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    
  return (
        <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-green-600">WhatsApp </h1>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-200"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-800 transition duration-300"
        >
          Register
        </Link>
      </div>
    </header>

  )
}

export default Header
