import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class KHACHSAN extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_KS: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_KS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    MO_TA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MA_VITRI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'VITRI',
        key: 'MA_VITRI'
      }
    },
    HINHANH: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KHACHSAN',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_KS" },
        ]
      },
      {
        name: "MA_VITRI",
        using: "BTREE",
        fields: [
          { name: "MA_VITRI" },
        ]
      },
    ]
  });
  }
}
