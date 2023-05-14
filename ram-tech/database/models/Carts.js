module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
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
        },
        amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "carts",
        timestamps: false
    };
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = (models) => {
        Cart.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'products_id'
        });
        Cart.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'users_id'
        });
    }

    return Cart
};