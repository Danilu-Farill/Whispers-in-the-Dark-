"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class StoryExisting extends sequelize_1.Model {
}
StoryExisting.init({
    id_existing: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // field: 'id_existing',
    },
    // id_user: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: Story,
    //         key: 'id_user',
    //     },
    // },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: sequelize_1.DataTypes.TEXT,
    },
    category: {
        type: sequelize_1.DataTypes.ENUM('Fantasmas', 'Vampiros', 'Zombies', 'Hombres lobo', 'Kikimora', 'Yōkai', 'Brujas', 'Demonios', 'Slenderman', 'Mutantes', 'Bogeyman', 'Duendes'),
        allowNull: false
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "StoryExisting",
    tableName: "existings",
    timestamps: false
});
exports.default = StoryExisting;
