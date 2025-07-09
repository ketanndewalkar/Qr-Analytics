const jwt = require("jsonwebtoken");

const AuthMiddleware = (req, res, next) => {
    const token = req.cookies.token; // Assuming token is stored in cookies
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const valid = jwt.verify(token,"Ketan");
    if (!valid) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
    req.user = valid.user;
    next();
}


module.exports = AuthMiddleware; // Exporting the AuthMiddleware