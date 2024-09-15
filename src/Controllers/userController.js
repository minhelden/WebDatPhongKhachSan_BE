import sequelize from "../Models/index.js";
import initModels from "../Models/init-models.js";
import bcrypt from "bcrypt";
import {taoToken} from "../Config/jwtConfig.js";
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;
const model = initModels(sequelize);

const signUp = async (req, res) => {
    try {
        let { HOTEN_ND, EMAIL, MATKHAU, SDT_ND, NGAYSINH, GIOITINH, NGAYDANGKY, ANHDAIDIEN, CHUCVU } = req.body;
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!passwordRegex.test(MATKHAU)) {
            res.status(400).send("Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất 1 chữ cái thường, 1 chữ cái hoa và 1 ký tự đặc biệt.");
            return;
        }

        let whereCondition = {};
        if (SDT_ND) {
            whereCondition.SDT_ND = SDT_ND;
        }
        if (EMAIL) {
            whereCondition.EMAIL = EMAIL;
        }

        let checkTK = await model.NGUOIDUNG.findOne({
            where: whereCondition,
        });

        if (checkTK) {
            res.status(200).send("Email hoặc số điện thoại đã tồn tại!");
            return;
        }
        
        if (!SDT_ND && !EMAIL) {
            res.status(400).send("Vui lòng cung cấp ít nhất một trong hai thông tin: Email hoặc Số điện thoại");
            return;
        }

        EMAIL = EMAIL || "";
        SDT_ND = SDT_ND || "";

        ANHDAIDIEN = ANHDAIDIEN || "noimg.png";
        CHUCVU = CHUCVU || "USER";
        NGAYDANGKY = NGAYDANGKY || new Date();

        let newData = {
            SDT_ND,
            EMAIL,
            MATKHAU: bcrypt.hashSync(MATKHAU, 10),
            NGAYSINH,
            GIOITINH,
            HOTEN_ND,
            ANHDAIDIEN,
            CHUCVU,
            NGAYDANGKY
        };
        
        await model.NGUOIDUNG.create(newData);
        res.status(200).send("Đăng ký tài khoản thành công!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Đã có lỗi trong quá trình xử lý");
    }
};

const login = async (req, res) => {
    try {
        let { EMAIL, SDT_ND, MATKHAU } = req.body;

        if (!EMAIL && !SDT_ND) {
            res.status(400).send("Vui lòng cung cấp email hoặc số điện thoại");
            return;
        }

        let checkTK = await model.NGUOIDUNG.findOne({
            where: {
                [Op.or]: [
                    EMAIL ? { EMAIL } : {}, 
                    SDT_ND ? { SDT_ND } : {}
                ]
            },
        });

        if (checkTK) {
            let checkPass = bcrypt.compareSync(MATKHAU, checkTK.MATKHAU);
            if (checkPass) {
                let token = taoToken(checkTK);
                res.status(200).send(token);
            } else {
                res.status(400).send("Mật khẩu không đúng");
            }
        } else {
            res.status(400).send("Tài khoản không đúng");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Đã có lỗi trong quá trình xử lý");
    }
};

export { signUp, login }