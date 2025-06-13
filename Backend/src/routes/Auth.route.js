import express from 'express';
import { authenticateRole, authenticateUser } from '../middlewares/Auth.Middleware.js';
import { validlogin, validregister } from './../middlewares/validregister';
import { login, logout, profile, register, verify } from '../controllers/Auth.Controller.js';

const router = express.Router();

router.post('/register', validregister, register);
router.post('/login', validlogin, login);
router.get('/logout', logout);
router.get('/check-auth', authenticateUser, authenticateRole, verify);
router.get("/profile", authenticateUser, authenticateRole, profile)

export default router;