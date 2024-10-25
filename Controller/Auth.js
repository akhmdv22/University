const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../Models/Admin');
const config = require('../configurations/config');
const adminErrors = require('../errorMessages/Admin');
    
  const register = async (req, res, next) => {
        const { name, surname, email, password } = req.body;
      
        try {
          const salt = await bcrypt.genSalt();
          const hashedPassword = await bcrypt.hash(password, salt);
          const admin = new Admin({ name, surname, email, password: hashedPassword });
          await admin.save();
          res.json({ message: 'Registration successful' });
        } catch (error) {
          next(error);
        }
      };

  const verifyAdminLogin = async (email,password)=>{
    try {
      const admin = await Admin.findOne({email});
      if(!admin){
        return {status: 'error', message: "Admin not found!"}
      }
      if(await bcrypt.compare(password, admin.password)){
          // creating a JWT token
          const token = jwt.sign({ adminId: admin._id }, config.secretKey, {
            expiresIn: '1 hour'
          });
          return {status: 200, data:token}
      }
      return {status:'error',error:'invalid password'}
  } catch (error) {
      console.log(error);
      return {status:'error',error:'timed out'}
  }
  }
      
      // Login with an existing user
  const login = async (req, res, next) => {

          const { email, password } = req.body;

          const response = await verifyAdminLogin(email,password);
          if (response.status === 200) {
            res.cookie('token', response.data,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
            res.json({message: "Login"})
            next();
          } else{
            res.json(response);
          }
        } 

      module.exports = {register, login};
