import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/sequelize";
import User from "./users.model";

class NewStory extends Model {
    public id_newStory?: number;
    public id_user?: number;
    public title!: string;
    public description!: string;
    public imageUrl?: string;
    public category!: string;
}

NewStory.init({
    id_newStory: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // field: 'id_newStory',
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id_user',
        },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,   
        allowNull: false
    },
    imageUrl:{
        type: DataTypes.TEXT,
    },
    category: {
        type: DataTypes.ENUM('Fantasmas', 'Vampiros', 'Zombies', 'Hombres lobo', 'Kikimora', 'Yōkai', 'Brujas', 'Demonios', 'Slenderman', 'Mutantes', 'Bogeyman', 'Duendes'),
        allowNull: false
    }
}, 
{
    sequelize,
    modelName: "NewStory",
    tableName: "newStories",
    timestamps: false   
});

// Relación con el modelo User
User.hasMany(NewStory, { foreignKey: 'id_user' });
NewStory.belongsTo(User, { foreignKey: 'id_user' });

// NewStory.belongsTo(User, { foreignKey: 'id_user' });

export default NewStory;



// NewStory.init(
//   {
//     id_new: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     image: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     category: {
//       type: DataTypes.ENUM('horror', 'fantasy', 'sci-fi'), // Añade los tipos de categorías que tengas.
//       allowNull: false,
//     },
//     id_user: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: User,
//         key: 'id_user',
//       },
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'new_stories',
//     timestamps: false,
//   }
// );

// // Relación con el modelo User
// User.hasMany(NewStory, { foreignKey: 'id_user' });
// NewStory.belongsTo(User, { foreignKey: 'id_user' });
