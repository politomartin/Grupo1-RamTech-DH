module.exports = (sequelize, dataTypes) => {
    let alias = "Brand";
    let cols = {
        id: {
            type: dataTypes.INT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.TEXT,
        },
    };
    let config = {
        tableName: "brands",
        timestamps: false,
    };
    const Brand = sequelize.define(alias, cols, config);
    
    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brands_id'
        });
    }
    return Brand
};