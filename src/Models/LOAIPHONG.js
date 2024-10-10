import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class LOAIPHONG extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_LOAIPHG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TENLOAIPHG: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SLKHACH: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SLGIUONGDON: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SLGIUONGDOI: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'LOAIPHONG',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_LOAIPHG" },
        ]
      },
    ]
  });
  }
}
