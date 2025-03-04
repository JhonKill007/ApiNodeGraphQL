import { Role } from "../models/Role.js";

const RoleResolvers = {
  Query: {
    getAllRole: async () => {
      return await Role.findAll();
    },

    roleById: async (_, { id }) => {
      return await Role.findByPk(id);
    },

    createRole: async (_, { name }) => {
      try {
        await Role.create({ name });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },

    deleteRole: async (_, { id }) => {
      try {
        const role = await Role.findByPk(id);
        if (!role) {
          throw new Error("User not found");
        }
        await role.destroy();
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};

export default RoleResolvers;
