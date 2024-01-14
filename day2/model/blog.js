module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
      name: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      });
  
    return Blog;
  };