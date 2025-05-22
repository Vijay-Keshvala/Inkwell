import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState({ name: '', email: '' });
  const [orders, setOrders] = useState([]);
  const [updatedUser, setUpdatedUser] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchProfile();
    fetchOrders();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch('/api/user/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUser(data);
      setUpdatedUser({ name: data.name, email: data.email, password: '' });
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/user/orders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setOrders(data.orders);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Update failed');
      setMessage('Profile updated successfully!');
      fetchProfile();
    } catch (err) {
      setMessage(err.message);
    }
  };

  const pendingOrders = orders.filter((order) => order.status === 'pending');
  const completedOrders = orders.filter((order) => order.status === 'completed');

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {['profile', 'update', 'orders', 'pending'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'profile' && 'View Profile'}
            {tab === 'update' && 'Update Profile'}
            {tab === 'orders' && 'Past Orders'}
            {tab === 'pending' && 'Pending Orders'}
          </button>
        ))}
      </div>

      {/* Profile Info */}
      {activeTab === 'profile' && (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Your Info</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      {/* Update Form */}
      {activeTab === 'update' && (
        <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={updatedUser.password}
              onChange={(e) => setUpdatedUser({ ...updatedUser, password: e.target.value })}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
            Update Profile
          </button>
          {message && <p className="text-green-600">{message}</p>}
        </form>
      )}

      {/* Past Orders */}
      {activeTab === 'orders' && (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Past Orders</h3>
          {completedOrders.length === 0 ? (
            <p>No completed orders yet.</p>
          ) : (
            <ul className="space-y-2">
              {completedOrders.map((order) => (
                <li key={order.id} className="border p-4 rounded">
                  <p><strong>Order ID:</strong> {order.id}</p>
                  <p><strong>Total:</strong> ₹{order.total}</p>
                  <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Pending Orders */}
      {activeTab === 'pending' && (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Pending Orders</h3>
          {pendingOrders.length === 0 ? (
            <p>No pending orders.</p>
          ) : (
            <ul className="space-y-2">
              {pendingOrders.map((order) => (
                <li key={order.id} className="border p-4 rounded">
                  <p><strong>Order ID:</strong> {order.id}</p>
                  <p><strong>Total:</strong> ₹{order.total}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
