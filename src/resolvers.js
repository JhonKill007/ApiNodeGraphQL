// import data from "./database/data.js";
import { User } from "./models/User.js";

const resolvers = {
  Query: {
    users: async () => await User.findAll(),

    // user: (_, { id }) => {
    //   return data.find((user) => user.id === id) || null;
    // },

    createUser: async (_, { name, username, email, rool }) => {
      await User.create({
        Id: 0,
        Name: name,
        Username: username,
        Email: email,
        Rool: rool,
      })();
      // if (data.find((user) => user.id === id)) return false;
      // data.push({ id, name, email });
      // return true;
    },

    // updateUser: (_, { id, name, email }) => {
    //   const users = data.map((u) => {
    //     if (u.id == id) {
    //       u.id = id;
    //       u.name = name;
    //       u.email = email;
    //       return u;
    //     }
    //   });
    //   data = users;
    //   return true;
    // },

    // deleteUser: (_, { id }) => {
    //   if (data.find((user) => user.id === id)) return false;
    //   delete data[id];
    //   return true;
    // },
  },
};

export default resolvers;
