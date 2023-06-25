export const mongooseError = (error, data, next) => {
    const {code, name} = error;
    error.status = (code === 11000 && name === "MongoServerError") ? 409 : 400;
    next();
}
