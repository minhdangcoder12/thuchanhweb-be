# Backend (CodeSandbox)

## Chạy local

```bash
npm install
npm start
```

Mặc định lắng nghe port **3001** (hoặc `PORT` từ môi trường).

## CodeSandbox

1. Import repo; `.codesandbox/tasks.json` **chỉ** chạy `npm install` khi setup — **không** tự chạy server thêm (tránh trùng với `npm start` mà CodeSandbox đã bật).
2. Sandbox thường tự chạy **`npm start` một lần**. **Không** gõ thêm `npm start` / `node server.mjs` trong terminal khác.
3. Lỗi **`EADDRINUSE`**: **Restart sandbox**, đóng terminal thừa, rồi để một process duy nhất.
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
