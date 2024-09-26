import sequelize from "../Models/index.js";
import initModels from "../Models/init-models.js";
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;
const model = initModels(sequelize);

const getCountry = async (req, res) => {
    try {
        const data = await model.QUOCGIA.findAll();
        res.status(200).send(data);
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