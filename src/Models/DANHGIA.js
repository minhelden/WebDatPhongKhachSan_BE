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
    MA_PHONG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PHONG',
        key: 'MA_PHONG'
      }
    },
    MA_ND: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NGUOIDUNG',
        key: 'MA_ND'
      }
    },
    SO_SAO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BINH_LUAN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NGAY_DG: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
        name: "MA_PHONG",
        using: "BTREE",
        fields: [
          { name: "MA_PHONG" },
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
