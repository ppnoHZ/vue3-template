export default [
    {
        url: '/getUser',
        method: 'get',
        response: ({
            query
        }) => {
            return { user: 'mock test' }
        }
    }
]