import express from "express";
import { authController } from '../controllers/index.js';
import handleValidationError from "../utils/handleValidationError.js";
import { registerValidation, loginValidation } from "../validations/authValidations.js";

const router = express.Router();

router.post('/register', registerValidation, handleValidationError, authController.register);
router.post('/login', loginValidation, handleValidationError, authController.login);

export default router;
