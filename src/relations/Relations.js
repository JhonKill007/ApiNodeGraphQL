import { User } from "../models/User.js";
import { Role } from "../models/Role.js";
import { Status } from "../models/Status.js";

// Definir relaciones
User.belongsTo(Role, { foreignKey: "RoleID", as: "Role" });
Role.hasMany(User, { foreignKey: "RoleID", as: "UsersRole" });

User.belongsTo(Status, { foreignKey: "StatusID", as: "Status" });
Status.hasMany(User, { foreignKey: "StatusID", as: "UsersStatus" });
