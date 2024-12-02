"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeStory = exports.updateStory = exports.createStory = exports.findStoryCategory = exports.findGetTitle = exports.findCategory = exports.findStory = exports.findIdStory = exports.findStoryOrder = exports.findTitle = void 0;
const sequelize_1 = require("../config/sequelize");
const existingStory_1 = __importDefault(require("../models/existingStory"));
const sequelize_2 = require("sequelize");
const findTitle = async (title) => {
    const findTitle = await existingStory_1.default.findOne({
        where: {
            title: {
                [sequelize_2.Op.iLike]: title, //BUSQUEDA COMPLETAMENTE IGUAL
            },
        },
    });
    return findTitle;
}; //BUSCAR POR TITULO
exports.findTitle = findTitle;
const findStoryOrder = async (order) => {
    // const findOrder = await StoryExisting.findAll({
    //   order: [//cada arreglo interior contiene dos elementos
    //     ["title", "ASC"],// nombre de la columna que se quiere ordenar. //dirección del ordenamiento
    //     ["title", "DESC"]
    //   ],
    // });
    const findOrder = await existingStory_1.default.findAll({
        order: [
            ["title", order]
        ],
    });
    if (!findOrder) {
        throw new Error("No hay historias para ordenar");
    }
    return findOrder;
};
exports.findStoryOrder = findStoryOrder;
const findIdStory = async (id) => {
    const findId = await existingStory_1.default.findByPk(id);
    if (!findId) {
        throw new Error("No hay historias para este usuario");
    }
    return findId;
};
exports.findIdStory = findIdStory;
const findStory = async () => {
    const story = await existingStory_1.default.findAll();
    if (!story) {
        throw new Error("No hay historias");
    }
    return story;
};
exports.findStory = findStory;
const findCategory = async () => {
    const story = await existingStory_1.default.findAll({
        attributes: [[sequelize_1.sequelize.fn('DISTINCT', sequelize_1.sequelize.col('category')), 'category']]
    });
    if (!story) {
        throw new Error("No hay historias");
    }
    const categorie = story.map((item) => {
        return item.dataValues.category;
    });
    return categorie;
};
exports.findCategory = findCategory;
const findGetTitle = async (title) => {
    const findTitle = await existingStory_1.default.findAll({
        where: {
            title: {
                [sequelize_2.Op.iLike]: `%${title}%`, //OP.ILIKEinsensibles a mayúsculas/minúsculas
            },
        },
    });
    if (findTitle.length === 0) {
        throw new Error("Historia no encontrada");
    }
    return findTitle;
};
exports.findGetTitle = findGetTitle;
const findStoryCategory = async (category) => {
    const findStory = await existingStory_1.default.findAll({
        where: {
            category: {
                //   [Op.iLike]: `%${category}%`, //QUITAR PARA COINCIDENCIA EXACTA
                [sequelize_2.Op.eq]: category,
            },
        },
    });
    if (findStory.length === 0) {
        throw new Error("No hay historias en esta categoria");
    }
    ;
    return findStory;
};
exports.findStoryCategory = findStoryCategory;
const createStory = async (title, description, imageUrl, category) => {
    if (!title || !description || !imageUrl || !category) {
        throw new Error("Todos los campos son obligatorios");
    }
    //   const existingTitle = await StoryExisting.findOne({ where: { title } });
    const existingTitle = await (0, exports.findTitle)(title);
    if (existingTitle) {
        throw new Error("Título de la historia ya existe");
    }
    const story = await existingStory_1.default.create({
        title,
        description,
        imageUrl,
        category,
    });
    return story;
};
exports.createStory = createStory;
const updateStory = async (id_existing, title, description, imageUrl, category) => {
    const findUser = await (0, exports.findIdStory)(id_existing);
    if (!findUser) {
        throw new Error("Historia no encontrada");
    }
    const updateUser = await existingStory_1.default.update({ title, description, imageUrl, category }, { where: { id_existing: id_existing } });
    return updateUser;
};
exports.updateStory = updateStory;
const removeStory = async (id_existing) => {
    const user = await (0, exports.findIdStory)(id_existing);
    if (!user) {
        throw new Error("Usuario no encontrado");
    }
    const deleteStory = await existingStory_1.default.destroy({ where: { id_existing: id_existing } });
    return deleteStory;
};
exports.removeStory = removeStory;
