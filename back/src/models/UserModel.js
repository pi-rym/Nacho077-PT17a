const {DataTypes} = require('sequelize')

module.exports = {
    UserModel: conn => {
        conn.define(
            'user',
            {
                id: {
                    type: DataTypes.INTEGER, // DataTypes.UUID = "c8f024e0-8b1a-441b-8138-013fdbf42e3e"
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: true
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: true
                    }
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    validate: {
                        isAlphanumeric: true,
                        len: [6, 10]
                    }
                }
            },
            {
                // tableName: 'users'
                timestamps: false // created_at, updated_at
            }
        )
    }
}