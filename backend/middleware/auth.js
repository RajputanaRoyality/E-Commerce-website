import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : null;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Login again.' });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: token_decode.id }; // ✅ safe and conventional
        next();
    } catch (error) {
        console.error('JWT Error:', error.message);
        res.status(401).json({ success: false, message: 'Invalid or expired token.' });
    }
};

export default authUser;
