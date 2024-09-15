import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class LICHSU_DATPHONG extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_DP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'DATPHONG',
        key: 'MA_DP'
      }
    },
    TRANGTHAI: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NGAYCAPNHAT: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'LICHSU_DATPHONG',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_DP" },
          { name: "NGAYCAPNHAT" },
        ]
      },
    ]
  });
  }
}
