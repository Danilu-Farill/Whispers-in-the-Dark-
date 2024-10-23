// CREATE TABLE users (
//     id_user integer PRIMARY KEY,
//     username varchar,
//     email varchar,
//     password varchar
//   );
  
//   CREATE TABLE new_stories (
//     id_new integer PRIMARY KEY,
//     title varchar,
//     description varchar,
//     image varchar,
//     category category_type,
//     id_user integer REFERENCES users(id_user)
//   );
  
//   CREATE TABLE existing_stories (
//     id_existing integer PRIMARY KEY,
//     title varchar,
//     description varchar,
//     image varchar,
//     category category_type
//   );
  
//   CREATE TABLE user_existing_stories (
//     id_user integer REFERENCES users(id_user),
//     id_existing integer REFERENCES existing_stories(id_existing),
//     PRIMARY KEY (id_user, id_existing)
//   );