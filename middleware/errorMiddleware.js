// Custom error handler
const errorHandler = (err, req, res, next) => {
  console.error(`❌ Error: ${err.message}`);

  // Set default status code (500 if not set)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = errorHandler;