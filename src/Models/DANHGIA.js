import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class DANHGIA extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_DG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SO_SAO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BINH_LUAN: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    NGAY_DG: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    MA_KS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'KHACHSAN',
        key: 'MA_KS'
      }
    },
    MA_ND: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NGUOIDUNG',
        key: 'MA_ND'
      }
    }
  }, {
    sequelize,
    tableName: 'DANHGIA',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_DG" },
        ]
      },
      {
        name: "MA_KS",
        using: "BTREE",
        fields: [
          { name: "MA_KS" },
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
