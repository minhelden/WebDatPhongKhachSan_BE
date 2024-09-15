import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PHONG_KHUYENMAI extends Model {
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
    MA_KM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'KHUYENMAI',
        key: 'MA_KM'
      }
    }
  }, {
    sequelize,
    tableName: 'PHONG_KHUYENMAI',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_PHONG" },
          { name: "MA_KM" },
        ]
      },
      {
        name: "MA_KM",
        using: "BTREE",
        fields: [
          { name: "MA_KM" },
        ]
      },
    ]
  });
  }
}
