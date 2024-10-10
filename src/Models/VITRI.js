import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class VITRI extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_VITRI: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TENVITRI: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    HINHANH: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    MA_TINHTHANH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TINHTHANH',
        key: 'MA_TINHTHANH'
      }
    }
  }, {
    sequelize,
    tableName: 'VITRI',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_VITRI" },
        ]
      },
      {
        name: "MA_TINHTHANH",
        using: "BTREE",
        fields: [
          { name: "MA_TINHTHANH" },
        ]
      },
    ]
  });
  }
}
