import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class DATPHONG extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_DP: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NGAYDEN: {
      type: DataTypes.DATE,
      allowNull: false
    },
    NGAYDI: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SO_LUONG_KHACH: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MA_MGG: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'MAGIAMGIA',
        key: 'MA_MGG'
      }
    }
  }, {
    sequelize,
    tableName: 'DATPHONG',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_DP" },
        ]
      },
      {
        name: "MA_MGG",
        using: "BTREE",
        fields: [
          { name: "MA_MGG" },
        ]
      },
    ]
  });
  }
}
