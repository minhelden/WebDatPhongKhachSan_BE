import sequelize from "../Models/index.js";
import initModels from "../Models/init-models.js";
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;
const model = initModels(sequelize);

const getDiscount = async (req, res) =>{
    try {
        const data = await model.MAGIAMGIA.findAll();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")
    }
}

const createRoom = async (req, res) =>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.status(401).send("Người dùng không được xác thực");
        }
        const decodedToken = jwt.verify(token, 'MINHNGHIA');
        if (decodedToken.data.VAITRO !== "Admin") {
            return res.status(403).send("Không có quyền truy cập chức năng này");
        }
        let { TENPHONG, KHACH, PHONGNGU, GIUONG, PHONGTAM, MOTA, GIA_TIEN, HINHANH, MA_KS, TRANGTHAI} = req.body;
        let roomData = {
            TENPHONG,
            KHACH,
            PHONGNGU,
            GIUONG,
            PHONGTAM,
            MOTA,
            GIA_TIEN,
            HINHANH,
            MA_KS,
            TRANGTHAI
        }
        await model.PHONG.create(roomData);
        res.status(200).send("Bạn đã tạo phòng thành công");
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")
    }
}

const selectRoom = async (req, res) =>{
    try {
        const { MA_PHONG } = req.params;
        const data = await model.PHONG.findOne({
            where:{
                MA_PHONG: MA_PHONG
            }
        })
        if (!data){
            return res.status(404).send("Không tìm thấy phòng");
        }
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")
    }
}

const updateRoom = async (req, res) =>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.status(401).send("Người dùng không được xác thực");
        }
        const decodedToken = jwt.verify(token, 'MINHNGHIA');
        if (decodedToken.data.VAITRO !== "Admin") {
            return res.status(403).send("Không có quyền truy cập chức năng này");
        }
        let { MA_PHONG } = req.params;
        let { TENPHONG, KHACH, PHONGNGU, GIUONG, PHONGTAM, MOTA, GIA_TIEN, HINHANH, MA_KS, TRANGTHAI } = req.body;
        await model.PHONG.update(
            { TENPHONG, KHACH, PHONGNGU, GIUONG, PHONGTAM, MOTA, GIA_TIEN, HINHANH, MA_KS, TRANGTHAI },
            {
                where:{
                    MA_PHONG
                }
            }
        )
        res.status(200).send("Cập nhật phòng thành công");
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")
    }
}

const deleteRoom = async (req, res)=>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.status(401).send("Người dùng không được xác thực");
        }
        const decodedToken = jwt.verify(token, 'MINHNGHIA');
        if (decodedToken.data.VAITRO !== "Admin") {
            return res.status(403).send("Không có quyền truy cập chức năng này");
        }
        let { MA_PHONG } = req.body;
        if (!MA_PHONG){
            return res.status(400).send("Mã phòng không hợp lệ");
        }
        const destroyRoom = await model.PHONG.destroy({
            where:{
                MA_PHONG
            }
        });
        if (!destroyRoom){
            return res.status(404).send("Không tìm thấy phòng");
        }
        res.status(200).send("Xóa phòng thành công");
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")  
    }
}

const getSearchNameRoom = async (req, res) => {
    const { TENPHONG } = req.params;
    const data = await model.PHONG.findAll({
        where: {
            TENPHONG: {
                [Op.like]: `%${TENPHONG}%`
            }
        }
    });
    res.status(200).send(data);
}

export { getDiscount }