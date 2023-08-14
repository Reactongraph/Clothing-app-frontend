import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Next13 - Unauthorized Access</h1>
        <p className="text-gray-600 mb-6">
          Sorry, you don't have permission to access this page. Please log in or contact the administrator for assistance.
        </p>
        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Go to Login
        </Link>
      </div>
    </div>
  )
}