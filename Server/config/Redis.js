const {createClient} = require('redis')
require('dotenv').config()
host = process.env.REDIS_HOST
port = process.env.REDIS_PORT
password = process.env.REDIS_PASSWORD
const Connectionurl = `rediss://${host}:${port}`;
const redisClient = createClient ({
    url : Connectionurl,
    password: password,
    socket: {
    tls: true,
    rejectUnauthorized: false,
    connectTimeout: 10000
  },
  disableOfflineQueue:true
})
redisClient.on('error', (err) => console.error('Redis Error', err));
redisClient.on('connect', () => console.log('✅ Redis connected'));
(async () => {
    await redisClient.connect();
  })();
module.exports = redisClient
