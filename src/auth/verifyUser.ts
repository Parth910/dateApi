import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
    try {
        
        const token = req.headers.authorization.split(" ")[1];
           
        if (token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) return res.send(err);
            user.token = token;
            
            
            req.user = user;
            next();
        });

    } catch (err) {
        return res.status(401).json({
            message: "Auth failed"
        })
    }

}
