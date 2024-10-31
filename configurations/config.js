
require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    connectionString: process.env.CONNECTION_STRING,
    secretKey: process.env.SECRET_KEY,

    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET,
    awsBucketName: process.env.AWS_BUCKET_NAME
}