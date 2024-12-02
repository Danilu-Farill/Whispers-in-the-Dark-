import { sequelize } from "../config/sequelize";
import StoryExisting from "../models/existingStory";
import { Op } from "sequelize";

export const findTitle = async(title: string) => {
  const findTitle = await StoryExisting.findOne({
    where: {
      title: {
        [Op.iLike]: title,//BUSQUEDA COMPLETAMENTE IGUAL
      },
    },
  });
  return findTitle;
};//BUSCAR POR TITULO

export const findStoryOrder = async(order: "ASC" | "DESC") => {
  // const findOrder = await StoryExisting.findAll({
  //   order: [//cada arreglo interior contiene dos elementos
  //     ["title", "ASC"],// nombre de la columna que se quiere ordenar. //dirección del ordenamiento
  //     ["title", "DESC"]
  //   ],
  // });
  const findOrder = await StoryExisting.findAll({
    order: [//cada arreglo interior contiene dos elementos
      ["title", order]
    ],
  });
  if(!findOrder){
    throw new Error("No hay historias para ordenar");
  }
  return findOrder;
};

export const findIdStory = async(id: number) => {
  const findId = await StoryExisting.findByPk(id);
  if(!findId){
    throw new Error("No hay historias para este usuario");
  }
  return findId;
}

export const findStory = async() => {
  const story = await StoryExisting.findAll();
  if(!story){
    throw new Error("No hay historias");
  }
  return story;
};

export const findCategory = async() => {
  const story = await StoryExisting.findAll({
    attributes:[[sequelize.fn('DISTINCT', sequelize.col('category')), 'category']]
  });
  if(!story){
    throw new Error("No hay historias");
  }
  const categorie = story.map((item) => {//dataValues es una propiedad que se utiliza en Sequelize
    return item.dataValues.category;
  });
  return categorie;
};

export const findGetTitle = async(title: string) => {
  const findTitle = await StoryExisting.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,//OP.ILIKEinsensibles a mayúsculas/minúsculas
      },
    },
  });
  if (findTitle.length === 0) {
    throw new Error("Historia no encontrada");
  }
  return findTitle;
};

export const findStoryCategory = async(category: string) => {
  const findStory = await StoryExisting.findAll({
    where: {
        category: {
        //   [Op.iLike]: `%${category}%`, //QUITAR PARA COINCIDENCIA EXACTA
          [Op.eq]: category,
        },
      },
   });
   if(findStory.length === 0){
    throw new Error("No hay historias en esta categoria");
   };
   return findStory;
};

export const createStory = async(title: string, description: string, imageUrl: string, category: string ) => {
  if (!title || !description || !imageUrl || !category) {
    throw new Error("Todos los campos son obligatorios");
  }
//   const existingTitle = await StoryExisting.findOne({ where: { title } });
const existingTitle = await findTitle(title);
  if (existingTitle) {
    throw new Error("Título de la historia ya existe");
  }
  const story = await StoryExisting.create({
    title,
    description,
    imageUrl,
    category,
  });
  return story
};

export const updateStory = async(id_existing: number, title: string, description: string, imageUrl: string, category: string) => {
  const findUser = await findIdStory(id_existing);
  if (!findUser) {
    throw new Error("Historia no encontrada");
  }
  const updateUser = await StoryExisting.update({title, description, imageUrl, category}, {where:{id_existing: id_existing}});
  return updateUser;
};

export const removeStory = async( id_existing: number) => {
  const user = await findIdStory(id_existing);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  const deleteStory = await StoryExisting.destroy({where:{id_existing: id_existing}});
  return deleteStory;
}