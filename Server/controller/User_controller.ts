import User from "../models/User";
import bcrypt from "bcrypt";

const  Register = async (req: any, res: any) => {
    try {

        // Generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // Save user and respond
        const user = await newUser.save();
        res.status(200).json(user._id);
        console.log(`New user created with user id ${user._id} and username ${user.username}`);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}

const Login = async (req: any, res: any) => {
    try {
        // Find user
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong credentials");

        // Validate password
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Password");

        // Send response
        res.status(200).json({_id:user._id, username:user.username});
        console.log(`User ${user.username} logged in`);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}

export {Register,Login};
