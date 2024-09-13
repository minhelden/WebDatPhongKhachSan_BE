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
    }
  }, {
    sequelize,
    tableName: 'DATPHONG',
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
    ]
  });
  }
}
