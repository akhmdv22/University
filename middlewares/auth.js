const jwt = require('jsonwebtoken');
const Admin = require('../Models/Admin');
const config = require('../configurations/config');

const adminRole = async (req, res, next) => {
  const  token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: `Iltimos autentifikatsiyadan o'ting...`});
  }

  try {
    const decodedToken = jwt.verify(token, config.secretKey);
    const admin = await Admin.findById(decodedToken.adminId);
    if (!admin) {
      return res.status(404).json({ message: 'Admin topilmadi' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Xato token' });
  }
};

module.exports = { adminRole };