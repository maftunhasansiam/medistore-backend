import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { AuthService } from "./auth.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await AuthService.createUserIntoDb(req.body);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result
        });
    } catch (error: any) {
        console.error(error); // This lets you see the error in your terminal
        return res.status(400).json({
            success: false,
            message: error.message || 'Registration failed'
        });
    }
}

export const AuthController = {
    createUser
};