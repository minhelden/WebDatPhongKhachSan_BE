import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PHONG_TIENNGHI extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_PHONG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PHONG',
        key: 'MA_PHONG'
      }
    },
    MA_TIENNGHI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TIENNGHI',
        key: 'MA_TIENNGHI'
      }
    }
  }, {
    sequelize,
    tableName: 'PHONG_TIENNGHI',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_PHONG" },
          { name: "MA_TIENNGHI" },
        ]
      },
      {
        name: "MA_TIENNGHI",
        using: "BTREE",
        fields: [
          { name: "MA_TIENNGHI" },
        ]
      },
    ]
  });
  }
}
