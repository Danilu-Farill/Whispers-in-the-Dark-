import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import User from "./users.model";
import StoryExisting from "./existingStory";

class UserExistingStory extends Model {
  public id_user?: number;
  public id_existing?: number;
}

UserExistingStory.init({
  id_user: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    references: {
      model: User,
      key: 'id_user',
    },
    primaryKey: true,
  },
  id_existing: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    references: {
      model: StoryExisting,
      key: 'id_existing',
    },
    primaryKey: true,
  },
}, {
  sequelize,
  modelName: "UserExistingStory",
  tableName: "user_existing_stories",
  timestamps: false,
  // Elimina columnas generadas automáticamente
  indexes: [
    {
      unique: true,
      fields: ['id_user', 'id_existing'],
    },
  ],
});

// Relación many-to-many entre User y ExistingStory
User.belongsToMany(StoryExisting, { through: UserExistingStory, foreignKey: 'id_user' });
StoryExisting.belongsToMany(User, { through: UserExistingStory, foreignKey: 'id_existing' });


// UserExistingStory.belongsTo(User, { foreignKey: 'id_user' });
// UserExistingStory.belongsTo(StoryExisting, { foreignKey: 'id_existing' });

export default UserExistingStory;
