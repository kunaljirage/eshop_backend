require ('dotenv').config();

const MONGODB_URL=process.env.MONGODB_URL

const JWT_SECRET=process.env.JWT_SECRET

module.exports.url=MONGODB_URL;
module.exports.secret=JWT_SECRET;