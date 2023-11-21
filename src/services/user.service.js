import { prisma } from "../prisma/index.js";
import { crypto } from "../utils/crypto.js";
import { mailer } from "../utils/mailer.js";
import { bcrypt } from "../utils/bcrypt.js";


class UserService {
    signUp = async(input) => {
        const hashedPassword = await bcrypt.hash(input.password);
        const activationToken = crypto.createToken();
        const hashedActivationToken = crypto.hash(activationToken);

        const user = await prisma.user.create({
            data: {
                ...input,
                password: hashedPassword,
                activationToken: hashedActivationToken
            },
            select: {
                id: true
            }
        });

        
        await mailer.sendActivationMail(input.email, activationToken);
    }
}

export const userService = new UserService();
