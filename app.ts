// never type

function generateError(message: string, code: number) {
    throw {
        code,
        message
    }
}

const error = generateError('Internal Server Error', 500);