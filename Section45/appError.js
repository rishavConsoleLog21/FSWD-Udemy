class AppError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        // this.name = 'AppError';
        // if (typeof message ==='string')
        // this.message = `${status}: ${message}`;
        // else
        // this.message = `Unknown error: (${status})`;
        // this.statusCode = status;
        // console.error(`[${this.name}]`, this); // eslint-disable-line
    }
}

module.exports = AppError;