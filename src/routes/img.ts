import Router from 'router';
import { User } from '../entities/User';
import { getConnection, getRepository } from 'typeorm';
import { verifyToken } from '../auth/verifyUser';
import { upload } from '../function/multer';
export const imgRouter = Router();

imgRouter.route("/").post(verifyToken, upload.single('userimage'), async (req, res) => {

    const imgId = (req as any).file.path.substring(
        (req as any).file.path.lastIndexOf(":") + 1,
        (req as any).file.path.lastIndexOf(";")
    );
    console.log(imgId);

    await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({ imgPath: (req as any).file.path, imgId: imgId })
        .where("email = :email", { email: (req as any).user.email })
        .execute();


});

