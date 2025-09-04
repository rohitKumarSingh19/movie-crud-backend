const logger = (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl;
  const time = new Date().toISOString();
  console.log(`📌 [${time}] ${method} ${url}`);
  next();
};

module.exports = logger;