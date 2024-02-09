const {DataTypes} = require('sequelize')

module.exports = {
    FavoriteModel: conn => {
        conn.define(
            'favorite',
            {
                id: {
                    type: DataTypes.INTEGER, // DataTypes.UUID = "c8f024e0-8b1a-441b-8138-013fdbf42e3e"
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: true
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                }, 
                status: {
                    type: DataTypes.ENUM("Alive", "Dead", "unknown"),
                    allowNull: false
                }, 
                species: {
                    type: DataTypes.STRING,
                    allowNull: false
                }, 
                gender: {
                    type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
                    allowNull: false
                }, 
                origin: {
                    type: DataTypes.JSON,
                    allowNull: false,
                },
                image: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            {
                // tableName: 'users'
                timestamps: false // created_at, updated_at
            }
        )
    }
}