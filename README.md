# Backend (CodeSandbox)

## Chạy local

```bash
npm install
npm start
```

Mặc định lắng nghe port **3001** (hoặc `PORT` từ môi trường).

## CodeSandbox

1. Import repo hoặc fork; sandbox sẽ đọc `.codesandbox/tasks.json` — task **API server** tự chạy `node server.mjs` **một lần** khi mở.
2. **Đừng** mở thêm terminal và gõ `npm start` nếu task đã chạy — sẽ báo **`EADDRINUSE`** (port 3001 đã có process).
3. Nếu vẫn lỗi port: menu sandbox **Restart server** hoặc **Restart container**.
4. Preview URL (ví dụ `https://xxxxx-3001.csb.app`) — không có `/` cuối khi đưa vào `REACT_APP_API_URL`.

### Lỗi `npm … Cannot read properties of null (reading 'matches')`

Thường do lỗi phiên bản npm trên cloud. Thử trong terminal sandbox:

```bash
rm -rf node_modules
npm cache clean --force
npm install
```

Hoặc chỉ chạy server trực tiếp (bỏ qua npm nếu đã có `node_modules`):

```bash
node server.mjs
```

Dùng **một** công cụ: hoặc toàn **npm**, hoặc toàn **pnpm** — đừng trộn `pnpm install` rồi `npm start`.

## API

- `GET /test/info`
- `GET /user/list`
- `GET /user/:id`
- `GET /photosOfUser/:id`

`models.js` là bản copy dữ liệu mẫu từ lab.
