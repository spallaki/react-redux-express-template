"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_NAME, 'postgres', process.env.DATABASE_PASSWORD, {
    dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
      console.log('Connection has been established successfully.');
  })
  .catch(err => {
      console.error('Unable to connect to the database:', err);
  });

// Define models here
// YOUR CODE HERE
var User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    points: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

var Post = sequelize.define('post', {
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fk_users: {
        type: Sequelize.INTEGER
    },
    image_url: {
        type: Sequelize.STRING
    },
    parent_id: {
        type: Sequelize.INTEGER
    }
});

Post.belongsTo(User);
Post.hasMany( Post, { as: 'children', foreignKey: 'postId' } );
Post.belongsTo( Post, { as: 'parent', foreignKey: 'postId' } );

module.exports = {
  // Export models here
  // YOUR CODE HERE
    User,
    Post,
    sequelize,
    Sequelize
};
