import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _CHITIET_DATPHONG from  "./CHITIET_DATPHONG.js";
import _DANHGIA from  "./DANHGIA.js";
import _KHACHSAN from  "./KHACHSAN.js";
import _KHUYENMAI from  "./KHUYENMAI.js";
import _LOAIPHONG from  "./LOAIPHONG.js";
import _MAGIAMGIA from  "./MAGIAMGIA.js";
import _NGUOIDUNG from  "./NGUOIDUNG.js";
import _PHIEUDATPHONG from  "./PHIEUDATPHONG.js";
import _PHONG from  "./PHONG.js";
import _PHONG_TIENNGHI from  "./PHONG_TIENNGHI.js";
import _QUOCGIA from  "./QUOCGIA.js";
import _TIENNGHI from  "./TIENNGHI.js";
import _TINHTHANH from  "./TINHTHANH.js";
import _VITRI from  "./VITRI.js";

export default function initModels(sequelize) {
  const CHITIET_DATPHONG = _CHITIET_DATPHONG.init(sequelize, DataTypes);
  const DANHGIA = _DANHGIA.init(sequelize, DataTypes);
  const KHACHSAN = _KHACHSAN.init(sequelize, DataTypes);
  const KHUYENMAI = _KHUYENMAI.init(sequelize, DataTypes);
  const LOAIPHONG = _LOAIPHONG.init(sequelize, DataTypes);
  const MAGIAMGIA = _MAGIAMGIA.init(sequelize, DataTypes);
  const NGUOIDUNG = _NGUOIDUNG.init(sequelize, DataTypes);
  const PHIEUDATPHONG = _PHIEUDATPHONG.init(sequelize, DataTypes);
  const PHONG = _PHONG.init(sequelize, DataTypes);
  const PHONG_TIENNGHI = _PHONG_TIENNGHI.init(sequelize, DataTypes);
  const QUOCGIA = _QUOCGIA.init(sequelize, DataTypes);
  const TIENNGHI = _TIENNGHI.init(sequelize, DataTypes);
  const TINHTHANH = _TINHTHANH.init(sequelize, DataTypes);
  const VITRI = _VITRI.init(sequelize, DataTypes);

  PHONG.belongsToMany(TIENNGHI, { as: 'MA_TIENNGHI_TIENNGHIs', through: PHONG_TIENNGHI, foreignKey: "MA_PHONG", otherKey: "MA_TIENNGHI" });
  TIENNGHI.belongsToMany(PHONG, { as: 'MA_PHONG_PHONGs', through: PHONG_TIENNGHI, foreignKey: "MA_TIENNGHI", otherKey: "MA_PHONG" });
  PHONG.belongsTo(KHACHSAN, { as: "MA_KS_KHACHSAN", foreignKey: "MA_KS"});
  KHACHSAN.hasMany(PHONG, { as: "PHONGs", foreignKey: "MA_KS"});
  PHONG.belongsTo(KHUYENMAI, { as: "MA_KM_KHUYENMAI", foreignKey: "MA_KM"});
  KHUYENMAI.hasMany(PHONG, { as: "PHONGs", foreignKey: "MA_KM"});
  PHONG.belongsTo(LOAIPHONG, { as: "MALOAIPHG_LOAIPHONG", foreignKey: "MALOAIPHG"});
  LOAIPHONG.hasMany(PHONG, { as: "PHONGs", foreignKey: "MALOAIPHG"});
  PHIEUDATPHONG.belongsTo(MAGIAMGIA, { as: "MA_MGG_MAGIAMGIum", foreignKey: "MA_MGG"});
  MAGIAMGIA.hasMany(PHIEUDATPHONG, { as: "PHIEUDATPHONGs", foreignKey: "MA_MGG"});
  CHITIET_DATPHONG.belongsTo(NGUOIDUNG, { as: "MA_ND_NGUOIDUNG", foreignKey: "MA_ND"});
  NGUOIDUNG.hasMany(CHITIET_DATPHONG, { as: "CHITIET_DATPHONGs", foreignKey: "MA_ND"});
  DANHGIA.belongsTo(NGUOIDUNG, { as: "MA_ND_NGUOIDUNG", foreignKey: "MA_ND"});
  NGUOIDUNG.hasMany(DANHGIA, { as: "DANHGIa", foreignKey: "MA_ND"});
  CHITIET_DATPHONG.belongsTo(PHIEUDATPHONG, { as: "MA_DP_PHIEUDATPHONG", foreignKey: "MA_DP"});
  PHIEUDATPHONG.hasMany(CHITIET_DATPHONG, { as: "CHITIET_DATPHONGs", foreignKey: "MA_DP"});
  CHITIET_DATPHONG.belongsTo(PHONG, { as: "MA_PHONG_PHONG", foreignKey: "MA_PHONG"});
  PHONG.hasMany(CHITIET_DATPHONG, { as: "CHITIET_DATPHONGs", foreignKey: "MA_PHONG"});
  DANHGIA.belongsTo(PHONG, { as: "MA_PHONG_PHONG", foreignKey: "MA_PHONG"});
  PHONG.hasMany(DANHGIA, { as: "DANHGIa", foreignKey: "MA_PHONG"});
  PHONG_TIENNGHI.belongsTo(PHONG, { as: "MA_PHONG_PHONG", foreignKey: "MA_PHONG"});
  PHONG.hasMany(PHONG_TIENNGHI, { as: "PHONG_TIENNGHIs", foreignKey: "MA_PHONG"});
  TINHTHANH.belongsTo(QUOCGIA, { as: "MA_QUOCGIA_QUOCGIum", foreignKey: "MA_QUOCGIA"});
  QUOCGIA.hasMany(TINHTHANH, { as: "TINHTHANHs", foreignKey: "MA_QUOCGIA"});
  PHONG_TIENNGHI.belongsTo(TIENNGHI, { as: "MA_TIENNGHI_TIENNGHI", foreignKey: "MA_TIENNGHI"});
  TIENNGHI.hasMany(PHONG_TIENNGHI, { as: "PHONG_TIENNGHIs", foreignKey: "MA_TIENNGHI"});
  VITRI.belongsTo(TINHTHANH, { as: "MA_TINHTHANH_TINHTHANH", foreignKey: "MA_TINHTHANH"});
  TINHTHANH.hasMany(VITRI, { as: "VITRIs", foreignKey: "MA_TINHTHANH"});
  KHACHSAN.belongsTo(VITRI, { as: "MA_VITRI_VITRI", foreignKey: "MA_VITRI"});
  VITRI.hasMany(KHACHSAN, { as: "KHACHSANs", foreignKey: "MA_VITRI"});

  return {
    CHITIET_DATPHONG,
    DANHGIA,
    KHACHSAN,
    KHUYENMAI,
    LOAIPHONG,
    MAGIAMGIA,
    NGUOIDUNG,
    PHIEUDATPHONG,
    PHONG,
    PHONG_TIENNGHI,
    QUOCGIA,
    TIENNGHI,
    TINHTHANH,
    VITRI,
  };
}
