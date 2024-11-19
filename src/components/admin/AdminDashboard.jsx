import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/https://e-learn-ncux.onrender.com/api/users'); 
                setUsers(response.data); // Update state with fetched users
            } catch (error) {
                console.error('Error fetching users:', error); // Handle fetch errors
            }
        };

        fetchUsers(); 
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <h2 className="text-xl font-bold mt-6">Manage Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="p-4 bg-gray-200 rounded shadow mt-2">
                        {user.username} - Role: {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;5
