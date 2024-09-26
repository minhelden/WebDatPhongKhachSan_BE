import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MAGIAMGIA extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_MGG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MA_GIAMGIA: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MAGIAMGIA',
    hasTrigger: true,
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
