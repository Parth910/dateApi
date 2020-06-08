import router from 'router';
import { User } from '../entities/User';
import { getConnection, getRepository } from 'typeorm';
import { verifyToken } from '../auth/verifyUser';

export const blockRouter = router();
blockRouter.route('/:id').post(verifyToken, async (req, res) => {
    const targetUser = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.id= :id", { id: req.params.id })
        .getOne();

    console.log((req as any).user.id);
    const cc = (req as any).user;
    const currentUser: any = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.id = :id", { id: (req as any).user.userid })
        .getOne();
    currentUser.blocklist.push(req.params.id);
    User.save(currentUser);

    res.json(cc);
})

