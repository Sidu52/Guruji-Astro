require('dotenv').config();
const jwt = require('jsonwebtoken');

function isAuthenticateToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Invalid token' });
        }
        req.user = decoded.username;
        next();
    });
}

module.exports = { isAuthenticateToken };
