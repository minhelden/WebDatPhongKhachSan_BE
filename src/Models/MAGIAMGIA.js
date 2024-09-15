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
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "MA_GIAMGIA"
    },
    PHANTRAM_GIAM: {
      type: DataTypes.DECIMAL(5,2),
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
      type: DataTypes.TEXT,
      allowNull: true
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
      {
        name: "MA_GIAMGIA",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_GIAMGIA" },
        ]
      },
    ]
  });
  }
}
