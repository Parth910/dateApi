import {getUser} from '../function/activeUsers';
import {io} from '../index';

export const notify = (req, res, targetUserToken, currentUserToken, notificationMsg) => {
    //  res.send(globalAny.activeSocketUsers[targetUserToken]);
    const targetUserid = getUser(targetUserToken.id);
    const currentUserid = getUser(currentUserToken.id);
    if (targetUserid) {
        io.emit('notification', notificationMsg);
        res.send("Noti sent");
    } else {
        res.send("err occured");
    }
}