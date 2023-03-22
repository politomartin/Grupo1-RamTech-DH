module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: dataTypes.DOUBLE,
            allowNull: false,
        },
        discount: {
            type: dataTypes.INT,
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: true,
        },
        brands_id: {
            type: dataTypes.INT,
            allowNull: false,
        },
        categories_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    };
    let config = {
        tableName: "products",
        timestamps: false,
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Brand, {
            as: 'brands',
            foreignKey: 'brands_id'
        });
    }

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: 'categories',
            foreignKey: 'categories_id'
        });
    }

    Product.associate = (models) => {
        Product.hasMany(models.Product_images, {
            as: 'product_images',
            foreignKey: 'products_id'
        });
    };

    return Product
};