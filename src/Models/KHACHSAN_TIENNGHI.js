import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class KHACHSAN_TIENNGHI extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_TIENNGHI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TIENNGHI',
        key: 'MA_TIENNGHI'
      }
    },
    MA_KS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'KHACHSAN',
        key: 'MA_KS'
      }
    }
  }, {
    sequelize,
    tableName: 'KHACHSAN_TIENNGHI',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_TIENNGHI" },
          { name: "MA_KS" },
        ]
      },
      {
        name: "MA_KS",
        using: "BTREE",
        fields: [
          { name: "MA_KS" },
        ]
      },
    ]
  });
  }
}
