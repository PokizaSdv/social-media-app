import { catchAsync } from "../utils/catch-async.js";
import { userService } from "../services/user.service.js";

class UserController {
    signUp = catchAsync(async (req, res) => {
        const { body } = req;

        const input = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            dateOfBirth: body.dateOfBirth,
            password: body.password
        }

        await userService.signUp(input);
        res.status(201).json({
            message: "Success"
        })
    });
}

export const userController = new UserController();
