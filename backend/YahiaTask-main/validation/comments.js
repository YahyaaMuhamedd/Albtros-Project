const { body } = require('express-validator');

module.exports = [
  body('comment')
    .trim()
    .notEmpty()
    .withMessage('The comment should not be empty')
    .isLength({ min: 3, max: 255 })
    .withMessage('The comment must be between 3 and 255 characters long'),

  body('userName')
    .trim()
    .notEmpty()
    .withMessage('The user should not be empty')
    .isLength({ min: 3, max: 255 })
    .withMessage('The user name must be between 3 and 255 characters long'),
  body('userEmail').normalizeEmail()
    .isEmail().withMessage('invalid email')
    .notEmpty().withMessage('email should not be empty')
];
