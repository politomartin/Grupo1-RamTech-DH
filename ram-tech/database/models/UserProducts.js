module.exports = (sequelize, dataTypes) => {
    let alias = "FavouriteProducts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        users_id: {
            type: dataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        products_id: {
            type: dataTypes.INTEGER,
            references: {
                model: 'products',
                key: 'id'
            }
        }
    };
    let config = {
        tableName: "user_has_products",
        timestamps: false
    };
    const User_has_products = sequelize.define(alias, cols, config);

    User_has_products.associate = (models) => {
        User_has_products.belongsToMany(models.Product, {
            as: 'products',
            through: 'users_has_products',
            foreignKey: 'users_id',
            otherKey: 'products_id'
        });
    }
    User_has_products.associate = (models) => {
        User_has_products.belongsToMany(models.User, {
            as: 'users',
            through: 'users_has_products',
            foreignKey: 'products_id',
            otherKey: 'users_id'
        });
    }
    return User_has_products
};