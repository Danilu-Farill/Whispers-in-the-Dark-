import User from "./users.model";
import StoryExisting from "./existingStory";
import NewStory from "./newStorys.model";
import UserExistingStory from "./UserExistingStory.model";

// NewStory.belongsTo(User, { foreignKey: 'id_user' });

// User.js
User.hasMany(NewStory, { foreignKey: 'id_user' });
User.belongsToMany(StoryExisting, { through: UserExistingStory });

// NewStory.js
NewStory.belongsTo(User, { foreignKey: 'id_user' });

// ExistingStory.js
StoryExisting.belongsToMany(User, { through: UserExistingStory });