import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MAGIAMGIA extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_MGG: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    PHANTRAM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NGAYBATDAU: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    NGAYKETTHUC: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DIEU_KIEN: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MAGIAMGIA',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_MGG" },
        ]
      },
    ]
  });
  }
}
