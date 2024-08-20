const errorHandler = (err, req, res, next) => {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' })
    }
  
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' })
    }
  
    console.error(err.message)
    return res.status(500).json({ error: 'Something went wrong' })
  };
  
  module.exports = errorHandler;
  