import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PHIEUDATPHONG extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_DP: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NGAYDEN: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    NGAYDI: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    SLKHACH: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MA_MGG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MAGIAMGIA',
        key: 'MA_MGG'
      }
    }
  }, {
    sequelize,
    tableName: 'PHIEUDATPHONG',
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
