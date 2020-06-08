
import router from 'router';

import { User } from '../entities/User';
import { getConnection, getRepository } from 'typeorm';
import {verifyToken} from '../auth/verifyUser';
import { users } from '../function/activeUsers';

export const feedRouter = router();
feedRouter.route('/').get(verifyToken, async (req, res) => {
    //const {id} = req.params;
    const currentUser: any = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: (req as any).user.userid })
    .getOne();

    const user = await User.find();
    const showUser:any = [];
    if(user){
        user.forEach(async (f)=>{
            
           
            if(currentUser.blocklist.indexOf(f.id) > -1){
                return;
            }else{
                showUser.push(f);
            }

  

        })
    }
res.status(200).json(showUser);
})

