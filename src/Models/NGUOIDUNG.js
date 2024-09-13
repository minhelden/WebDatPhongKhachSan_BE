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
      type: DataTypes.STRING(255),
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(255),
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
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MA_DP: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'DATPHONG',
        key: 'MA_DP'
      }
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
      {
        name: "MA_DP",
        using: "BTREE",
        fields: [
          { name: "MA_DP" },
        ]
      },
    ]
  });
  }
}
