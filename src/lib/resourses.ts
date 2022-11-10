
import bcrypt from "bcryptjs";

export const comparePassword = async(password: string, verifyPassword: string) => {
    return await bcrypt.compare(password, verifyPassword);
} // nosirve :c solo me retorna false

export const encryptPassword = async (password: string) => {
    const encrypt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, encrypt);
}