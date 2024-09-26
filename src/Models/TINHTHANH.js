import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class TINHTHANH extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_TINHTHANH: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_TINHTHANH: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    MA_QUOCGIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'QUOCGIA',
        key: 'MA_QUOCGIA'
      }
    },
    HINHANH: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TINHTHANH',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_TINHTHANH" },
        ]
      },
      {
        name: "MA_QUOCGIA",
        using: "BTREE",
        fields: [
          { name: "MA_QUOCGIA" },
        ]
      },
    ]
  });
  }
}
