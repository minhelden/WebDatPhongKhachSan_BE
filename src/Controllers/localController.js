import sequelize from "../Models/index.js";
import initModels from "../Models/init-models.js";
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;
const model = initModels(sequelize);

const getCountry = async (req, res) => {
    try {
        const data = await model.QUOCGIA.findAll({
            attributes: [
                'MA_QUOCGIA',
                'TEN_QUOCGIA', 
                'HINHANH',    
                [sequelize.fn('COUNT', model.KHACHSAN.MA_KS), 'hotelCount']
            ],
            include: [
                {
                    model: model.TINHTHANH,
                    as: "TINHTHANHs", 
                    include: [
                        {
                            model: model.VITRI,
                            as: "VITRIs",
                            include: [
                                {
                                    model: model.KHACHSAN,
                                    as: "KHACHSANs", 
                                    attributes: [], 
                                },
                            ],
                        },
                    ],
                },
            ],
            group: 'QUOCGIA.MA_QUOCGIA',
            order: [[sequelize.col('hotelCount'), 'DESC']],
            limit: 6, 
        });
        
        const countryData = data.map(country => ({
            MA_QUOCGIA: country.MA_QUOCGIA,
            TEN_QUOCGIA: country.TEN_QUOCGIA,
            HINHANH: country.HINHANH
        }));

        res.status(200).send(countryData);
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu");
    }
};

const getProvince = async (req, res) =>{
    try {
        const data = await model.TINHTHANH.findAll({
            include: ['MA_QUOCGIA_QUOCGIum']
        });
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi khi lấy dữ liệu")
    }
}


export { getCountry, getProvince }