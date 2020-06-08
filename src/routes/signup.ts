import router from 'router';
import { User } from '../entities/User';
import bcrypt from 'bcrypt';

export const signUpRouter = router();
signUpRouter.route('/').post((req, res) => {
   


    User.findOne({ email: req.body.email })

        .then(user => {
            if (user) {
                return res.status(409).json({
                    message: "mail exist already"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const uniqD = new Date().getTime();
                        const user = User.create({
                            email: req.body.email,
                            signupuniqid: uniqD,
                            password: hash

                        });
                        user
                            .save()
                            .then(result => {
                                res.status(201).json({
                                    message: "user is created"
                                });
                            })
                            .catch();
                    }
                });
            }
        })




    // jwt.sign({ user }, 'secretkey', (err, token) => {
    //     res.json({
    //         token
    //     });
    // });
});

