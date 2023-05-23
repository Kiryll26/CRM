class ApiError extends Error {
    constructor(result, status, message) {
        super()
        this.result = result
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        return new ApiError(0, 404, message)
    }

    static internal(message) {
        return new ApiError(0, 500, message)
    }

    static forbidden(message) {
        return new ApiError(0, 403, message)
    }
}

module.exports = ApiError
