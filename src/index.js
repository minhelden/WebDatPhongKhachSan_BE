import express from 'express';
import cors from 'cors';
import rootRoutes from './Routes/rootRoutes.js';

const app = express();
app.use(express.json());
app.use(express.static("."));
app.use(cors());

// Thêm một route để xử lý POST request tại /api/reviews
app.post('/api/reviews', (req, res) => {
    const review = req.body;

    // Xử lý lưu trữ đánh giá vào cơ sở dữ liệu ở đây
    console.log("Đánh giá nhận được:", review);

    // Gửi phản hồi thành công
    res.status(201).send('Đánh giá đã được tạo thành công');
});

// Đường dẫn API chính
app.use("/api", rootRoutes);

app.listen(8080, () => {
    console.log("Server đang chạy tại http://127.0.0.1:8080/");
});
