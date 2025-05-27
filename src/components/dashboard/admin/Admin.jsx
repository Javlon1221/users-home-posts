import React from 'react'

const Admin = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg text-gray-700">Foydalanuvchilar</h2>
          <p className="text-2xl font-bold mt-2">120</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg text-gray-700">Savdolar</h2>
          <p className="text-2xl font-bold mt-2">$4,560</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg text-gray-700">Buyurtmalar</h2>
          <p className="text-2xl font-bold mt-2">38</p>
        </div>
      </div>
    </div>
  )
}

export default Admin
