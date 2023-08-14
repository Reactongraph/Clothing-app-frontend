import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {

  return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <div className="space-y-6">
            <p className="text-red-600">
              Invalid user information. Please check the details and try again.
            </p>
            <p className="text-red-600">
              A user with the user@example.com email address already exists.
            </p>
            <p className="text-red-600">
              An error occurred while processing your request. Please try again later.
            </p>
          </div>
          <Link href='/signup' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Go Back
          </Link>
        </div>
      </div>
  )
}