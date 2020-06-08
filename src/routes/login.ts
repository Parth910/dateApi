import router from 'router';

import { User } from '../entities/User';
import jwt from 'jsonwebtoken';
import { getConnection, getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

export const logInRouter = router();
logInRouter.route('/').post((req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, async (err, result) => {
                    if (err) {
                        return res.status(403).json({
                            message: "Auth failed"
                        })
                    }
                    if (result) {
                        const token = jwt.sign({
                            email: user.email,
                            userid: user.id,
                            signupid: user.signupuniqid
                        }, process.env.JWT_KEY, {
                            expiresIn: "1h"
                        })
                        await getConnection()
                            .createQueryBuilder()
                            .update(User)
                            .set({ token: token })
                            .where("email = :email", { email: req.body.email })
                            .execute();
                        return res.status(500).json({
                            message: "Auth Successful",
                            token: token
                        })
                    }
                })

            } else {
                return res.status(401).json({
                    message: "auth failed"
                })
            }
        })
})
