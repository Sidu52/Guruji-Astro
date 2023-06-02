require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Import the User model
const User = require('../models/User');

//Register a new User
async function register(req, res) {
    const { username, password } = req.body;
    try {
        const hasPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hasPassword });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: `Error Register User ${err}` });
    }
}

// Generate JWT Auth Token and Login User
async function login(req, res) {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'User not found, please sign up' });
        }

        const passwordValid = await bcrypt.compare(password, user.password);

        if (!passwordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error generating JWT Auth Token and user' });
    }
}

async function logout(req, res) {
    try {
        console
        // Clear the token from cookies
        res.clearCookie('token');
        return res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
        return res.status(500).json({ message: `Error logging out: ${err}` });
    }

}


module.exports = { register, login, logout };