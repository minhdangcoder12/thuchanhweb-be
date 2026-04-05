# Backend (CodeSandbox)

## Chạy local

```bash
npm install
npm start
```

Mặc định lắng nghe port **3001** (hoặc `PORT` từ môi trường).

## CodeSandbox

1. Tạo sandbox kiểu **Node** (hoặc Express), upload/copy toàn bộ thư mục này.
2. Lệnh start: `npm start` (đã khai báo trong `package.json`).
3. Sau khi chạy, copy **URL preview** của backend (ví dụ `https://xxxxx-3001.csb.app`) — không có dấu `/` cuối.

## API

- `GET /test/info`
- `GET /user/list`
- `GET /user/:id`
- `GET /photosOfUser/:id`

`models.js` là bản copy dữ liệu mẫu từ lab.
