module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        "^.+\\.vue$": "@vue/vue3-jest",
        "^.+\\.tsx?$": "ts-jest" 
    }
}