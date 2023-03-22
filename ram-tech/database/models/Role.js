module.exports = (sequelize, dataTypes) => {
    let alias = "Role";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name : {
            type: dataTypes.TEXT,
        },
    };
    let config = {
        tableName: "user_roles",
        timestamps: false,
    };
    const Role = sequelize.define(alias, cols, config);

    Role.associate = (models) => {
        Role.hasMany(models.User, {
            as: 'users',
            foreignKey: 'user_roles_id'
        }); 
    }
    
    return Role
};