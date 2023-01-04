const httpStatus = require("http-status-codes");
exports.logError = (error, req, res, next) => {
    console.log(error.stack);
    next(error);
}

exports.noPageFound = (req, res) => {
    let errorCode = httpStatus.StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
}

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR
    console.log(`ERROR: ${error.stack}`);
    res.send(`${errorCode} | Sorry, we are experiencing some technical difficulties`)
}