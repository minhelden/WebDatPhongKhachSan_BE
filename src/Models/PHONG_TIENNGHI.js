import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PHONG_TIENNGHI extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    SLTIENNGHI: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MA_TIENNGHI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TIENNGHI',
        key: 'MA_TIENNGHI'
      }
    },
    MA_PHONG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PHONG',
        key: 'MA_PHONG'
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
          { name: "MA_TIENNGHI" },
          { name: "MA_PHONG" },
        ]
      },
      {
        name: "MA_PHONG",
        using: "BTREE",
        fields: [
          { name: "MA_PHONG" },
        ]
      },
    ]
  });
  }
}
