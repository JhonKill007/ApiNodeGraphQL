import { Sequelize } from "sequelize";
import { User } from "../models/User.js";
const { Op } = Sequelize;

const UserResolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.findAll();
    },

    usersByRole: async (_, { role }) => {
      return await User.findAll({
        where: {
          role: role,
        },
      });
    },

    searchUser: async (_, { param }) => {
      return await User.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.like]: `%${param}%` } },
            { username: { [Op.like]: `%${param}%` } },
            { email: { [Op.like]: `%${param}%` } },
          ],
        },
      });
    },

    userById: async (_, { id }) => {
      return await User.findByPk(id);
    },

    createUser: async (_, { name, username, email, status, role }) => {
      try {
        await User.create({ name, username, email, status, role });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },

    updateUser: async (_, { id, name, username, email }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        if (name) user.name = name;
        if (username) user.username = username;
        if (email) user.email = email;
        await user.save();
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },

    // deleteUser: async (_, { id }) => {
    //   try {
    //     const user = await User.findByPk(id);
    //     if (!user) {
    //       throw new Error("User not found");
    //     }
    //     await user.destroy();
    //     return true;
    //   } catch (err) {
    //     console.log(err);
    //     return false;
    //   }
    // },
  },
};

export default UserResolvers;
