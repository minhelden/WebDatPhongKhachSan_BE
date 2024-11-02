import sequelize from "../Models/index.js";
import initModels from "../Models/init-models.js";
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;
const model = initModels(sequelize);

// const getHotel = async (req, res) =>{
//     try {
//         const data = await model.KHACHSAN.findAll({
//             include: ['MA_VITRI_VITRI']
//         });
//         res.status(200).send(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Lỗi khi lấy dữ liệu")
//     }
// }

const getHotel = async (req,res) =>{
    try {
        const data = await model.KHACHSAN.findAll({
            include: [
                {
                    model: model.VITRI,
                    as: 'MA_VITRI_VITRI',
                    required: true,
                    attributes: ['TENVITRI'],
                    include: [
                        {
                            model: model.TINHTHANH,
                            as: 'MA_TINHTHANH_TINHTHANH',
                            required: true,
                            attributes: ['TEN_TINHTHANH'],
                            include: [
                                {
                                    model: model.QUOCGIA,
                                    as: 'MA_QUOCGIA_QUOCGIum',
                                    required: true,
                                    attributes: ['TEN_QUOCGIA']
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")
    }
}

const getHotelLocal = async (req,res) =>{
    try {
        const { MA_VITRI } = req.params;
        const data = await model.KHACHSAN.findAll({
            where: {
                MA_VITRI: MA_VITRI  
            },
            include: [
                {
                    model: model.VITRI,
                    as: 'MA_VITRI_VITRI',
                    required: true,
                    attributes: ['TENVITRI'],
                    include: [
                        {
                            model: model.TINHTHANH,
                            as: 'MA_TINHTHANH_TINHTHANH',
                            required: true,
                            attributes: ['TEN_TINHTHANH'],
                            include: [
                                {
                                    model: model.QUOCGIA,
                                    as: 'MA_QUOCGIA_QUOCGIum',
                                    required: true,
                                    attributes: ['TEN_QUOCGIA']
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")
    }
}

const getHotelCountry = async (req, res) => {
    try {
        const { MA_QUOCGIA } = req.params;
        const data = await model.KHACHSAN.findAll({
            include: [
                {
                    model: model.VITRI, 
                    as: 'MA_VITRI_VITRI',
                    required: true,
                    attributes: ['TENVITRI'], 
                    include: [
                        {
                            model: model.TINHTHANH,
                            as: 'MA_TINHTHANH_TINHTHANH',
                            required: true,
                            attributes: ['TEN_TINHTHANH'], 
                            where: {
                                MA_QUOCGIA: MA_QUOCGIA
                            },
                            include: [
                                {
                                    model: model.QUOCGIA,
                                    as: 'MA_QUOCGIA_QUOCGIum',
                                    required: true,
                                    attributes: ['TEN_QUOCGIA']
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu");
    }
};

const getHotelID = async (req, res) => {
    try {
        const { MA_KS } = req.params;
        const data = await model.KHACHSAN.findAll({
            where: {
                MA_KS: MA_KS
            },
            include: [
                {
                    model: model.VITRI, 
                    as: 'MA_VITRI_VITRI',
                    attributes: ['TENVITRI'], 
                    include: [
                        {
                            model: model.TINHTHANH,
                            as: 'MA_TINHTHANH_TINHTHANH',
                            required: true,
                            attributes: ['TEN_TINHTHANH'],
                            include: [
                                {
                                    model: model.QUOCGIA,
                                    as: 'MA_QUOCGIA_QUOCGIum',
                                    required: true,
                                    attributes: ['TEN_QUOCGIA']
                                }
                            ]
                        }
                    ],
                }
            ]
        });
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu");
    }
};


const createHotel = async (req, res) =>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.status(401).send("Người dùng không được xác thực");
        }
        const decodedToken = jwt.verify(token, 'MINHNGHIA');
        if (decodedToken.data.CHUCVU !== "Admin") {
            return res.status(403).send("Không có quyền truy cập chức năng này");
        }
        let { TEN_KS, MO_TA, MA_VITRI, HINHANH} = req.body;
        let hotelData = {
            TEN_KS,
            MO_TA,
            MA_VITRI,
            HINHANH
        }
        await model.KHACHSAN.create(hotelData);
        res.status(200).send("Bạn đã tạo phòng thành công");
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")
    }
}

const selectHotel = async (req, res) =>{
    try {
        const { MA_KS } = req.params;
        const data = await model.KHACHSAN.findOne({
            where:{
                MA_KS: MA_KS
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

const updateHotel = async (req, res) =>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.status(401).send("Người dùng không được xác thực");
        }
        const decodedToken = jwt.verify(token, 'MINHNGHIA');
        if (decodedToken.data.VAITRO !== "Admin") {
            return res.status(403).send("Không có quyền truy cập chức năng này");
        }
        let { MA_KS } = req.params;
        let { TEN_KS, MO_TA, MA_VITRI, HINHANH } = req.body;
        await model.KHACHSAN.update(
            { TEN_KS, MO_TA, MA_VITRI, HINHANH },
            {
                where:{
                    MA_KS
                }
            }
        )
        res.status(200).send("Cập nhật phòng thành công");
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")
    }
}

const deleteHotel = async (req, res)=>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.status(401).send("Người dùng không được xác thực");
        }
        const decodedToken = jwt.verify(token, 'MINHNGHIA');
        if (decodedToken.data.VAITRO !== "Admin") {
            return res.status(403).send("Không có quyền truy cập chức năng này");
        }
        let { MA_KS } = req.body;
        if (!MA_KS){
            return res.status(400).send("Mã phòng không hợp lệ");
        }
        const destroyRoom = await model.KHACHSAN.destroy({
            where:{
                MA_KS
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

const getSearchNameHotel = async (req, res) => {
    const { searchParam } = req.params;
    const { numberOfGuests, numberOfRooms, NGAYDEN, NGAYDI } = req.query;

    try {
        const data = await model.KHACHSAN.findAll({
            where: {
                [Op.or]: [
                    { TEN_KS: { [Op.like]: `%${searchParam}%` } },
                    { '$MA_VITRI_VITRI.TENVITRI$': { [Op.like]: `%${searchParam}%` } },
                    { '$MA_VITRI_VITRI.MA_TINHTHANH_TINHTHANH.TEN_TINHTHANH$': { [Op.like]: `%${searchParam}%` } },
                    { '$MA_VITRI_VITRI.MA_TINHTHANH_TINHTHANH.MA_QUOCGIA_QUOCGIum.TEN_QUOCGIA$': { [Op.like]: `%${searchParam}%` } }
                ]
            },
            include: [
                {
                    model: model.PHONG,
                    as: 'PHONGs',
                    required: true,
                    attributes: ['MA_LOAIPHG', 'MA_PHONG'],
                    include: [
                        {
                            model: model.LOAIPHONG,
                            as: 'MA_LOAIPHG_LOAIPHONG',
                            required: true,
                            attributes: ['SLKHACH'],
                            where: {
                                SLKHACH: { [Op.gte]: numberOfGuests }
                            }
                        }
                    ]
                },
                {
                    model: model.VITRI,
                    as: 'MA_VITRI_VITRI',
                    required: true,
                    attributes: ['TENVITRI'],
                    include: [
                        {
                            model: model.TINHTHANH,
                            as: 'MA_TINHTHANH_TINHTHANH',
                            required: true,
                            attributes: ['TEN_TINHTHANH'],
                            include: [
                                {
                                    model: model.QUOCGIA,
                                    as: 'MA_QUOCGIA_QUOCGIum',
                                    required: true,
                                    attributes: ['TEN_QUOCGIA'],
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        // Lọc khách sạn có phòng phù hợp
        const resultData = await Promise.all(data.map(async hotel => {
            const availableRooms = await Promise.all(hotel.PHONGs.map(async room => {
                // Kiểm tra trạng thái đặt phòng cho từng phòng
                const bookings = await model.PHIEUDATPHG.findAll({
                    where: {
                        MA_PHONG: room.MA_PHONG,
                        TRANGTHAI: 'Đặt thành công',
                        [Op.or]: [
                            {
                                NGAYDEN: { [Op.between]: [new Date(NGAYDEN), new Date(NGAYDI)] }
                            },
                            {
                                NGAYDI: { [Op.between]: [new Date(NGAYDEN), new Date(NGAYDI)] }
                            },
                            {
                                [Op.and]: [
                                    { NGAYDEN: { [Op.lte]: new Date(NGAYDEN) } },
                                    { NGAYDI: { [Op.gte]: new Date(NGAYDI) } }
                                ]
                            }
                        ]
                    }
                });

                // Trả về phòng nếu không có đặt phòng nào
                return bookings.length === 0 ? room : null;
            }));

            // Lọc các phòng phù hợp
            const filteredRooms = availableRooms.filter(room => room !== null);

            // Chỉ trả về khách sạn nếu có phòng phù hợp
            return filteredRooms.length >= numberOfRooms ? {
                ...hotel.dataValues,
                PHONGs: filteredRooms, // Chỉ giữ lại các phòng đã lọc
            } : null; // Trả về null nếu số lượng phòng không đủ
        }));

        // Lọc lại dữ liệu để chỉ trả về các khách sạn đã lọc
        const finalResultData = resultData.filter(hotel => hotel !== null);

        if (!finalResultData || finalResultData.length === 0) {
            return res.status(404).json({ message: 'No hotels found with the given criteria' });
        }

        res.status(200).send(finalResultData);
    } catch (error) {
        console.error('Error fetching hotels:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { getHotel, createHotel, updateHotel, deleteHotel, selectHotel, getSearchNameHotel, getHotelLocal, getHotelCountry, getHotelID }