
// Not found middleware
const notfound = (req, res, next) => {
    const error = new Error(`Not found: ${req.originalUrl}`);
    res.status(404);
    console.log(error);

    next(error); // Pass the error to the errorHandler
};

// Error-handling middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    res.status(statusCode).json({ statusCode, message });
    console.log(err);
    next(err);
};


module.exports = { errorHandler, notfound };
