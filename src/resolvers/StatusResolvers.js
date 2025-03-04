import { Status } from "../models/Status.js";

const StatusResolvers = {
  Query: {
    getAllStatus: async () => {
      return await Status.findAll();
    },

    statusById: async (_, { id }) => {
      return await Status.findByPk(id);
    },

    createStatus: async (_, { name }) => {
      try {
        await Status.create({ name });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },

    deleteStatus: async (_, { id }) => {
      try {
        const status = await Status.findByPk(id);
        if (!status) {
          throw new Error("Status not found");
        }
        await status.destroy();
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};

export default StatusResolvers;
