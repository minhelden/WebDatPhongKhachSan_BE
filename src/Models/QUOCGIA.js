import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class QUOCGIA extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_QUOCGIA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_QUOCGIA: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    HINHANH: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QUOCGIA',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_QUOCGIA" },
        ]
      },
    ]
  });
  }
}
