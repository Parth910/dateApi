import { User } from '../entities/User';
export const users: any = [];


export const addUser: any = ({ socketid, token }) => {
    //console.log(token);

    User.findOne({ id: token })
        .then(user => {
            if (user) {
                //console.log(user);

                const usid = user.id;
                const tempUser = { usid, socketid };
                // console.log("addUser=>tempUser"+tempUser);

                users.push(tempUser);
                // console.log(users);

                return tempUser;
            }
        })


}

export const getUser = (usid) => users.find((user) => user.usid === usid);