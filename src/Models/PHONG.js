import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PHONG extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MA_PHONG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TENPHONG: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    KHACH: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PHONGNGU: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GIUONG: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PHONGTAM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MOTA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GIA_TIEN: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    HOBOI: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MAYGIAT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BANLA: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TIVI: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DIEUHOA: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    WIFI: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BEP: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DOXE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BANUI: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    HINHANH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MA_DP: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'DATPHONG',
        key: 'MA_DP'
      }
    },
    MA_VITRI: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'VITRI',
        key: 'MA_VITRI'
      }
    }
  }, {
    sequelize,
    tableName: 'PHONG',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MA_PHONG" },
        ]
      },
      {
        name: "MA_DP",
        using: "BTREE",
        fields: [
          { name: "MA_DP" },
        ]
      },
      {
        name: "MA_VITRI",
        using: "BTREE",
        fields: [
          { name: "MA_VITRI" },
        ]
      },
    ]
  });
  }
}
