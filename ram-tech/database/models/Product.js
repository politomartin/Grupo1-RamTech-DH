module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(11, 2),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT
        },
        brands_id: {
            type: dataTypes.INTEGER,
            references: {
                model: 'brands',
                key: 'id'
            }
        },
        categories_id: {
            type: dataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
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
        Product.hasMany(models.ProductImages, {
            as: 'product_images',
            foreignKey: 'products_id'
        });
    };

    return Product
};