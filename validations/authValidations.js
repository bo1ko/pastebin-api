import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Wrong email format').isEmail(),
    body('username', 'Username is too small').isLength({ min: 3 }),
    body('password', 'The password must be at least 8 characters long'),
];
