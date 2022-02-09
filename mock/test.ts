export default [
    {
        url: '/test',
        method: 'get',
        response: ({
            query
        }) => {
            return { test: 'test' }
        }
    }
]