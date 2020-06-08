import { User } from '../entities/User';
export const users: any = [];


export const addUser: any = ({ socketid, token }) => {


    User.findOne({ id: token })
        .then(user => {
            if (user) {


                const usid = user.id;
                const tempUser = { usid, socketid };

                users.push(tempUser);

                return tempUser;
            }
        })


}

export const getUser = (usid) => users.find((user) => user.usid === usid);