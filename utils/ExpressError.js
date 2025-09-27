class ExpressError extends Error {
    constructor(status = 500, errorMessage = "Something went wrong") {
        super(errorMessage);
        this.statusCode = status;
        this.message = errorMessage;
        
    }
}

module.exports = ExpressError;
