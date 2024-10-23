    import { DataTypes, Model } from "sequelize";
    import {sequelize} from "../config/sequelize";

    class StoryExisting extends Model {
        public id_existing?: number;
        // public id_user?: number;
        public title!: string;
        public description!: string;
        public imageUrl?: string;
        public category!: string;
    }

    StoryExisting.init({
        id_existing: {
            type: DataTypes.INTEGER,
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

    }, {
        sequelize,
        modelName: "StoryExisting",
        tableName: "existings",
        timestamps: false   
    });

    export default StoryExisting;
