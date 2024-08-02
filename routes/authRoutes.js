import express from "express";
import { authController } from '../controllers/index.js';
import handleValidationError from "../utils/handleValidationError.js";
import { registerValidation } from "../validations/authValidations.js";

const router = express.Router();

router.post('/', registerValidation, handleValidationError, authController.register);

export default router;
