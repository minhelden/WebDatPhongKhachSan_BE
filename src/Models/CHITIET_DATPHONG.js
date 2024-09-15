import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CHITIET_DATPHONG extends Model {
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
    tableName: 'CHITIET_DATPHONG',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_DP" },
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
