import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  // console.log('Incoming token:', token); // Log the incoming token for debugging

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized - Missing token in the Authorization header',
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      console.error('Error during token verification:', err);
      return res.status(403).json({
        success: false,
        message: 'Forbidden - Invalid token or expired',
      });
    }

    req.user = {
      id: decodedToken.id,
      name: decodedToken.name,
      photoURL: decodedToken.photoURL,
    };

    next();
  });
};

export default authenticateJWT;
