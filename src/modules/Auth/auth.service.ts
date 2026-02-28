import { create } from "node:domain";
import { prisma } from "../../lib/prisma";

const createUserIntoDb = async (payload: any) => {
    const result = await prisma.user.create({ data: payload });
    return result;
}

export const AuthService = {
    // Add service methods here
    createUserIntoDb
};