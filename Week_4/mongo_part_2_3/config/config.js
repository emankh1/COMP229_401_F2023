const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://emankhatib22:A8tWkHvbZ95e3S4j@mycluster.ieagp1m.mongodb.net/?retryWrites=true&w=majority"||
    process.env.MONGO_HOST ||
     'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') +
        "/mernproject",
}; 
//A8tWkHvbZ95e3S4j mongo password
export default config