export default {
    database: {
        mongodb: {
            HOST: process.env.MONGODB_HOST || 'localhost',
            PORT: process.env.MONGODB_PORT || 27017,
            USER: process.env.MONGODB_USER ,
            PASSWORD: process.env.MONGODB_PASSWORD ,
            DATABASE: process.env.MONGODB_DATABASE,
        }
    }
}