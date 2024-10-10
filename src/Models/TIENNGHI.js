import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class TIENNGHI extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_TIENNGHI: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TENTIENNGHI: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TIENNGHI',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_TIENNGHI" },
        ]
      },
    ]
  });
  }
}
