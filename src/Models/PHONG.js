import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PHONG extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_PHONG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TENPHONG: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    MOTA: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    GIA_TIEN: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    HINHANH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TRANGTHAIPHG: {
      type: DataTypes.STRING(50),
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
    MALOAIPHG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'LOAIPHONG',
        key: 'MALOAIPHG'
      }
    },
    MA_KM: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'KHUYENMAI',
        key: 'MA_KM'
      }
    }
  }, {
    sequelize,
    tableName: 'PHONG',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_PHONG" },
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
        name: "MALOAIPHG",
        using: "BTREE",
        fields: [
          { name: "MALOAIPHG" },
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
