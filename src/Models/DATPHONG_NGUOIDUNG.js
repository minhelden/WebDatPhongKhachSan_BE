import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class DATPHONG_NGUOIDUNG extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_DP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'DATPHONG',
        key: 'MA_DP'
      }
    },
    MA_ND: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'NGUOIDUNG',
        key: 'MA_ND'
      }
    }
  }, {
    sequelize,
    tableName: 'DATPHONG_NGUOIDUNG',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_DP" },
          { name: "MA_ND" },
        ]
      },
      {
        name: "MA_ND",
        using: "BTREE",
        fields: [
          { name: "MA_ND" },
        ]
      },
    ]
  });
  }
}
