export default defineEventHandler(async (event) => {
    const body = useBody(event)
    const {username, email, password, repeatPassword, name} = body
    if (!username || !email || !password || !repeatPassword || !name) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Invalid params'}))
    }
    return {
        body: body
    }
})