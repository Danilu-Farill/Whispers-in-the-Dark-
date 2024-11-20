import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";

class User extends Model {
  public id_user?: number;
  public email!: string;
  public password!: string;
}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users",
    tableName: "users",
    timestamps: false,
  },
);

export default User;
