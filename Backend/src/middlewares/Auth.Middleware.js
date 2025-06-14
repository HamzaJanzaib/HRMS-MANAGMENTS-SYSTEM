import User from '../models/User.js';
import { verifyToken } from '../utils/Jwt.js';

// General authentication middleware
export const authenticateUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: No token provided'
        });
    }
    try {
        const decoded = await verifyToken(token);
        req.user = { id: decoded.id };
        req.token = token;
        next();
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: Invalid token'
        });
    }
};

export const authenticateRole = async (req, res, next) => {
    try {
        // Ensure user is authenticated and user id is available
        if (!req.user || !req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: No user information found'
            });
        }

        // Find user by id and get details (excluding password)
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Attach user details and role to request
        req.user = {
            id: user._id,
            role: user.role,
            details: user
        };

        next();
    } catch (error) {
        console.error('Role check failed:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};
