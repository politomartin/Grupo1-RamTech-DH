module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        last_name: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        mail: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: dataTypes.TEXT
        },
        user_roles_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user_roles',
              key: 'id'
            }
          }          
    };
    let config = {
        tableName: "users",
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsTo(models.Role, {
            as: 'roles',
            foreignKey: 'user_roles_id'
        });
    }

    return User
};