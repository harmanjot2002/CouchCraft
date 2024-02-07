import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ success: false, message: 'Forbidden' });

    req.user = user;
    next();
  });
};

export default authenticateJWT;
