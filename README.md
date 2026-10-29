# 햇빛구 육아용품 대여실 — 프론트엔드 (Next.js)

직원용 관리 화면입니다. 화면 S1~S5는 `기획서.md` 5장을 따릅니다. 모든 데이터는 가상입니다.

## 내 컴퓨터에서 실행

```bash
npm install
cp .env.example .env.local   # 백엔드 주소 (기본 http://localhost:4000)
npm run dev                  # http://localhost:3000
```

백엔드(`backend/`)가 먼저 켜져 있어야 목록이 보입니다.

## 환경변수

| 이름 | 뜻 |
|---|---|
| `NEXT_PUBLIC_API_URL` | 백엔드 주소. Vercel에서는 Render 백엔드 주소를 넣습니다 |

`.env.local`은 GitHub에 올라가지 않습니다.
