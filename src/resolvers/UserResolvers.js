// import data from "./database/data.js";
import { User } from "../models/User.js";

const UserResolvers = {
  Query: {
    users: async () => {
      return await User.findAll();
    },

    user: async (_, { id }) => {
      return await User.findByPk(id);
    },

    createUser: async (_, { name, username, email, role }) => {
      try {
        await User.create({ name, username, email, role });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },

    updateUser: async (_, { id, name, username, email, role }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        if (name) user.name = name;
        if (username) user.username = username;
        if (email) user.email = email;
        if (email) user.role = role;
        await user.save();
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },

    deleteUser: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        await user.destroy();
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};

export default UserResolvers;
