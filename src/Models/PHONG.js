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
    KHACH: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PHONGNGU: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GIUONG: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PHONGTAM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MOTA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GIA_TIEN: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    HINHANH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MA_KS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'KHACHSAN',
        key: 'MA_KS'
      }
    },
    TRANGTHAI: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
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
    ]
  });
  }
}
