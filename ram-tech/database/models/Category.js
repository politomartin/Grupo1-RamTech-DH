module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: dataTypes.STRING(45)
        },
        icon : {
            type: dataTypes.STRING(45)
        },
    };
    let config = {
        tableName: "categories",
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categories_id'
        });
    }
    
    return Category
};