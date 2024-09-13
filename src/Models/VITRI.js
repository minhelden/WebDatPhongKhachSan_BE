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
      type: DataTypes.STRING(255),
      allowNull: false
    },
    TINHTHANH: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    QUOCGIA: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    HINHANH: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    ]
  });
  }
}
