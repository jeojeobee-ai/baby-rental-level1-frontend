# baby-rental-level1-frontend

햇빛구 육아용품 대여실 관리 웹앱의 **프론트엔드**(Next.js)입니다.
직원이 육아용품 목록·상세를 보고, 용품·대여 기록·소독 기록을 등록하는 화면입니다.
기획 내용은 [기획서.md](./기획서.md)에 있고, 모든 데이터는 가상입니다.

- 백엔드 저장소: [baby-rental-level1-backend](https://github.com/jeojeobee-ai/baby-rental-level1-backend)
- 배포 주소: (배포 후 기입)

## 화면

| 번호 | 화면 | 주소 |
|---|---|---|
| S1 | 용품 목록 | `/items` |
| S2 | 용품 상세 (대여·소독 기록, 반납 처리) | `/items/[id]` |
| S3 | 용품 등록 | `/items/new` |
| S4 | 대여 기록 등록 | `/items/[id]/rentals/new` |
| S5 | 소독 기록 등록 | `/items/[id]/sanitizations/new` |

## 설치

Node.js 20.9 이상이 필요합니다.

```bash
npm install
```

## 실행 (내 컴퓨터)

1. 백엔드를 먼저 켭니다 (백엔드 저장소 README 참고, 기본 주소 `http://localhost:4000`).
2. 환경변수 파일을 만듭니다.

   ```bash
   cp .env.example .env.local
   ```

3. 개발 서버를 켜고 브라우저에서 http://localhost:3000 을 엽니다.

   ```bash
   npm run dev
   ```

## 환경변수

| 이름 | 뜻 | 예시 |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | 백엔드 주소 | `http://localhost:4000` |

`.env.local`은 GitHub에 올라가지 않습니다.

## 배포 (Vercel)

1. Vercel에서 이 저장소를 Import 합니다. 프레임워크는 Next.js로 자동 인식됩니다.
2. Environment Variables에 `NEXT_PUBLIC_API_URL` = Render 백엔드 주소(예: `https://baby-rental-api.onrender.com`)를 넣습니다.
3. Deploy 합니다. 이후 `main`에 push하면 자동으로 다시 배포됩니다.
4. 배포된 주소를 백엔드(Render)의 `FRONTEND_ORIGIN`에 넣어야 화면에서 API를 부를 수 있습니다.

CLI로 배포할 때:

```bash
npx vercel link
npx vercel env add NEXT_PUBLIC_API_URL production
npx vercel --prod
```

## 빌드 확인

```bash
npm run build
```
