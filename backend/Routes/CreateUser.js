// const express = require('express');
// require('dotenv').config();
// const router = express.Router();
// const User = require('../models/User');
// const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const jwtSecret = process.env.JWT_SECRET; 

// router.post(
//   '/createuser',
//   [
//     body('email').isEmail(),
//     body('name').isLength({ min: 5 }),
//     body('password', 'Incorrect Password').isLength({ min: 5 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const salt = await bcrypt.genSalt(10);
//     let secPassword = await bcrypt.hash(req.body.password, salt)

//     try {
//       await User.create({
//         name: req.body.name,
//         password: secPassword,
//         email: req.body.email,
//         location: req.body.location,
//       });

//       // Log the inserted data
//       console.log('Inserted data:', req.body);

//       res.json({ success: true });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

// router.post('/loginuser',   [
//   body('email').isEmail(),
//   body('password', 'Incorrect Password').isLength({ min: 5 }),
// ],async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   let email = req.body.email
//     try {
//     let userData =  await User.findOne({email});
//       if(!userData){
//         return res.status(400).json({ errors: "Try logging with correct credentials"});
//       }
//       const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
//       if(!pwdCompare){
//         return res.status(400).json({ errors: "Try logging with correct credentials"});
//       }
//       const data = {
//         user:{
//           id:userData.id
//         }
//       }
//       const authToken= jwt.sign(data,jwtSecret);
//       return res.json({ success:true,authToken:authToken});

//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

// module.exports = router;


const express = require('express');
require('dotenv').config();
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

router.post(
  '/createuser',
  [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('name').isLength({ min: 5 }).withMessage('Name must be at least 5 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });

      console.log('Inserted data:', req.body);

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false, errors: [{ msg: 'Server Error' }] });
    }
  }
);


router.post('/loginuser', [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: [{ msg: 'No user found with this email' }] });
    }

    const pwdCompare = await bcrypt.compare(password, userData.password);
    if (!pwdCompare) {
      return res.status(400).json({ errors: [{ msg: 'Incorrect password' }] });
    }

    const data = {
      user: {
        id: userData.id
      }
    };
    const authToken = jwt.sign(data, jwtSecret);
    return res.json({ success: true, authToken: authToken });

  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: [{ msg: 'Server error, please try again later' }] });
  }
});

module.exports = router;
