import Router from 'router';
import { User } from '../entities/User';
import { getRepository } from 'typeorm';
import { verifyToken } from '../auth/verifyUser';
import { notify } from '../function/notify';

export const likeRouter = Router();
likeRouter.route('/:id').post(verifyToken, async (req, res) => {
    const targetUser = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.imgId= :imgId", { imgId: req.params.id })
        .getOne();
    const currentUser = (req as any).user;

    const notificationMsg = `someone liked your pic`;
    notify(req, res, targetUser, currentUser, notificationMsg);

})

