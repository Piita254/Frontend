import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                setIsAuthenticated(false);
                return;
            }

            try {
                // Decode the token (if it's a JWT) to check expiry
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                if (decodedToken.exp * 1000 < Date.now()) {
                    throw new Error('Token expired');
                }

                // OPTIONAL: Validate token with server
                const response = await axios.get('https://e-learn-ncux.onrender.com/api/auth/validate', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUserRole(response.data.role); // Get user role from server response
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Authentication error:', error.message);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        validateToken();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(userRole)) {
        // Redirect to a default page based on user role
        const defaultRedirects = {
            admin: '/admin/dashboard',
            contributer: '/contributer/dashboard',
            learner: '/learner/dashboard',
        };

        return <Navigate to={defaultRedirects[userRole] || '/'} replace />;
    }

    // Render the protected component if all checks pass
    return children;
};

export default ProtectedRoute;
