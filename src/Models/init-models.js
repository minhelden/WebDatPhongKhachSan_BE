import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _CHITIET_DATPHONG from  "./CHITIET_DATPHONG.js";
import _DATPHONG from  "./DATPHONG.js";
import _DATPHONG_NGUOIDUNG from  "./DATPHONG_NGUOIDUNG.js";
import _KHACHSAN from  "./KHACHSAN.js";
import _KHUYENMAI from  "./KHUYENMAI.js";
import _LICHSU_DATPHONG from  "./LICHSU_DATPHONG.js";
import _MAGIAMGIA from  "./MAGIAMGIA.js";
import _NGUOIDUNG from  "./NGUOIDUNG.js";
import _PHONG from  "./PHONG.js";
import _PHONG_KHUYENMAI from  "./PHONG_KHUYENMAI.js";
import _PHONG_TIENNGHI from  "./PHONG_TIENNGHI.js";
import _TIENNGHI from  "./TIENNGHI.js";
import _VITRI from  "./VITRI.js";

export default function initModels(sequelize) {
  const CHITIET_DATPHONG = _CHITIET_DATPHONG.init(sequelize, DataTypes);
  const DATPHONG = _DATPHONG.init(sequelize, DataTypes);
  const DATPHONG_NGUOIDUNG = _DATPHONG_NGUOIDUNG.init(sequelize, DataTypes);
  const KHACHSAN = _KHACHSAN.init(sequelize, DataTypes);
  const KHUYENMAI = _KHUYENMAI.init(sequelize, DataTypes);
  const LICHSU_DATPHONG = _LICHSU_DATPHONG.init(sequelize, DataTypes);
  const MAGIAMGIA = _MAGIAMGIA.init(sequelize, DataTypes);
  const NGUOIDUNG = _NGUOIDUNG.init(sequelize, DataTypes);
  const PHONG = _PHONG.init(sequelize, DataTypes);
  const PHONG_KHUYENMAI = _PHONG_KHUYENMAI.init(sequelize, DataTypes);
  const PHONG_TIENNGHI = _PHONG_TIENNGHI.init(sequelize, DataTypes);
  const TIENNGHI = _TIENNGHI.init(sequelize, DataTypes);
  const VITRI = _VITRI.init(sequelize, DataTypes);

  DATPHONG.belongsToMany(NGUOIDUNG, { as: 'MA_ND_NGUOIDUNGs', through: DATPHONG_NGUOIDUNG, foreignKey: "MA_DP", otherKey: "MA_ND" });
  DATPHONG.belongsToMany(PHONG, { as: 'MA_PHONG_PHONGs', through: CHITIET_DATPHONG, foreignKey: "MA_DP", otherKey: "MA_PHONG" });
  KHUYENMAI.belongsToMany(PHONG, { as: 'MA_PHONG_PHONG_PHONG_KHUYENMAIs', through: PHONG_KHUYENMAI, foreignKey: "MA_KM", otherKey: "MA_PHONG" });
  NGUOIDUNG.belongsToMany(DATPHONG, { as: 'MA_DP_DATPHONG_DATPHONG_NGUOIDUNGs', through: DATPHONG_NGUOIDUNG, foreignKey: "MA_ND", otherKey: "MA_DP" });
  PHONG.belongsToMany(DATPHONG, { as: 'MA_DP_DATPHONGs', through: CHITIET_DATPHONG, foreignKey: "MA_PHONG", otherKey: "MA_DP" });
  PHONG.belongsToMany(KHUYENMAI, { as: 'MA_KM_KHUYENMAIs', through: PHONG_KHUYENMAI, foreignKey: "MA_PHONG", otherKey: "MA_KM" });
  PHONG.belongsToMany(TIENNGHI, { as: 'MA_TIENNGHI_TIENNGHIs', through: PHONG_TIENNGHI, foreignKey: "MA_PHONG", otherKey: "MA_TIENNGHI" });
  TIENNGHI.belongsToMany(PHONG, { as: 'MA_PHONG_PHONG_PHONG_TIENNGHIs', through: PHONG_TIENNGHI, foreignKey: "MA_TIENNGHI", otherKey: "MA_PHONG" });
  CHITIET_DATPHONG.belongsTo(DATPHONG, { as: "MA_DP_DATPHONG", foreignKey: "MA_DP"});
  DATPHONG.hasMany(CHITIET_DATPHONG, { as: "CHITIET_DATPHONGs", foreignKey: "MA_DP"});
  DATPHONG_NGUOIDUNG.belongsTo(DATPHONG, { as: "MA_DP_DATPHONG", foreignKey: "MA_DP"});
  DATPHONG.hasMany(DATPHONG_NGUOIDUNG, { as: "DATPHONG_NGUOIDUNGs", foreignKey: "MA_DP"});
  LICHSU_DATPHONG.belongsTo(DATPHONG, { as: "MA_DP_DATPHONG", foreignKey: "MA_DP"});
  DATPHONG.hasMany(LICHSU_DATPHONG, { as: "LICHSU_DATPHONGs", foreignKey: "MA_DP"});
  PHONG.belongsTo(KHACHSAN, { as: "MA_KS_KHACHSAN", foreignKey: "MA_KS"});
  KHACHSAN.hasMany(PHONG, { as: "PHONGs", foreignKey: "MA_KS"});
  PHONG_KHUYENMAI.belongsTo(KHUYENMAI, { as: "MA_KM_KHUYENMAI", foreignKey: "MA_KM"});
  KHUYENMAI.hasMany(PHONG_KHUYENMAI, { as: "PHONG_KHUYENMAIs", foreignKey: "MA_KM"});
  DATPHONG.belongsTo(MAGIAMGIA, { as: "MA_MGG_MAGIAMGIum", foreignKey: "MA_MGG"});
  MAGIAMGIA.hasMany(DATPHONG, { as: "DATPHONGs", foreignKey: "MA_MGG"});
  DATPHONG_NGUOIDUNG.belongsTo(NGUOIDUNG, { as: "MA_ND_NGUOIDUNG", foreignKey: "MA_ND"});
  NGUOIDUNG.hasMany(DATPHONG_NGUOIDUNG, { as: "DATPHONG_NGUOIDUNGs", foreignKey: "MA_ND"});
  CHITIET_DATPHONG.belongsTo(PHONG, { as: "MA_PHONG_PHONG", foreignKey: "MA_PHONG"});
  PHONG.hasMany(CHITIET_DATPHONG, { as: "CHITIET_DATPHONGs", foreignKey: "MA_PHONG"});
  PHONG_KHUYENMAI.belongsTo(PHONG, { as: "MA_PHONG_PHONG", foreignKey: "MA_PHONG"});
  PHONG.hasMany(PHONG_KHUYENMAI, { as: "PHONG_KHUYENMAIs", foreignKey: "MA_PHONG"});
  PHONG_TIENNGHI.belongsTo(PHONG, { as: "MA_PHONG_PHONG", foreignKey: "MA_PHONG"});
  PHONG.hasMany(PHONG_TIENNGHI, { as: "PHONG_TIENNGHIs", foreignKey: "MA_PHONG"});
  PHONG_TIENNGHI.belongsTo(TIENNGHI, { as: "MA_TIENNGHI_TIENNGHI", foreignKey: "MA_TIENNGHI"});
  TIENNGHI.hasMany(PHONG_TIENNGHI, { as: "PHONG_TIENNGHIs", foreignKey: "MA_TIENNGHI"});
  KHACHSAN.belongsTo(VITRI, { as: "MA_VITRI_VITRI", foreignKey: "MA_VITRI"});
  VITRI.hasMany(KHACHSAN, { as: "KHACHSANs", foreignKey: "MA_VITRI"});

  return {
    CHITIET_DATPHONG,
    DATPHONG,
    DATPHONG_NGUOIDUNG,
    KHACHSAN,
    KHUYENMAI,
    LICHSU_DATPHONG,
    MAGIAMGIA,
    NGUOIDUNG,
    PHONG,
    PHONG_KHUYENMAI,
    PHONG_TIENNGHI,
    TIENNGHI,
    VITRI,
  };
}
