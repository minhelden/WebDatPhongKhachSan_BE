import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CHITIET_DATPHONG extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    NGAYDATPHG: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    TRANGTHAI: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MA_PHONG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PHONG',
        key: 'MA_PHONG'
      }
    },
    MA_DP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PHIEUDATPHONG',
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
    tableName: 'CHITIET_DATPHONG',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NGAYDATPHG" },
          { name: "MA_PHONG" },
          { name: "MA_DP" },
          { name: "MA_ND" },
        ]
      },
      {
        name: "MA_PHONG",
        using: "BTREE",
        fields: [
          { name: "MA_PHONG" },
        ]
      },
      {
        name: "MA_DP",
        using: "BTREE",
        fields: [
          { name: "MA_DP" },
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
