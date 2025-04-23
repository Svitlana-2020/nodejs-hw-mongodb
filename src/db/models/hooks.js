export const handleSaveError = (error, doc, next) => {
    if (!this.name || !this.email) {
        error.status = 400,
        message = "Body cannot be empty",
        data = "Body cannot be empty"
    }
    next();
};