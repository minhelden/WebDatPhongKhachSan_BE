import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class NGUOIDUNG extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_ND: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HOTEN_ND: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    MATKHAU: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SDT_ND: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    NGAYSINH: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    GIOITINH: {
      type: DataTypes.ENUM('Nam','Nữ','Khác'),
      allowNull: false
    },
    CHUCVU: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NGAYDANGKY: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ANHDAIDIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NGUOIDUNG',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_ND" },
        ]
      },
    ]
  });
  }
}
