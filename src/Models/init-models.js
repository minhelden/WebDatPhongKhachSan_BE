import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _DATPHONG from  "./DATPHONG.js";
import _NGUOIDUNG from  "./NGUOIDUNG.js";
import _PHONG from  "./PHONG.js";
import _VITRI from  "./VITRI.js";

export default function initModels(sequelize) {
  const DATPHONG = _DATPHONG.init(sequelize, DataTypes);
  const NGUOIDUNG = _NGUOIDUNG.init(sequelize, DataTypes);
  const PHONG = _PHONG.init(sequelize, DataTypes);
  const VITRI = _VITRI.init(sequelize, DataTypes);

  NGUOIDUNG.belongsTo(DATPHONG, { as: "MA_DP_DATPHONG", foreignKey: "MA_DP"});
  DATPHONG.hasMany(NGUOIDUNG, { as: "NGUOIDUNGs", foreignKey: "MA_DP"});
  PHONG.belongsTo(DATPHONG, { as: "MA_DP_DATPHONG", foreignKey: "MA_DP"});
  DATPHONG.hasMany(PHONG, { as: "PHONGs", foreignKey: "MA_DP"});
  PHONG.belongsTo(VITRI, { as: "MA_VITRI_VITRI", foreignKey: "MA_VITRI"});
  VITRI.hasMany(PHONG, { as: "PHONGs", foreignKey: "MA_VITRI"});

  return {
    DATPHONG,
    NGUOIDUNG,
    PHONG,
    VITRI,
  };
}
