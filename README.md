# Sambandh Advertising & PR — Full Stack Website

A premium MERN stack website for Sambandh Advertising & PR.

## Project Structure

```
sambandh/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/    # Navbar, Footer, PageWrapper, SectionHeader, ScrollToTop
│   │   ├── pages/         # Home, Services, About, Directors, Contact
│   │   └── utils/         # api.js (Axios instance)
│   ├── index.html
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── backend/           # Node.js + Express + MongoDB
    ├── config/        # db.js
    ├── controllers/   # contactController.js
    ├── middleware/    # validate.js
    ├── models/        # Contact.js
    ├── routes/        # contact.js
    └── server.js
```

---

## Quick Start

### 1. Clone or unzip the project
```bash
# Navigate into the root folder
cd sambandh
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env — set your MONGODB_URI
npm run dev
```

### 3. Frontend Setup (new terminal)
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend runs at: http://localhost:5173  
Backend runs at: http://localhost:5000

---

## MongoDB Setup

### Option A — Local MongoDB
```
MONGODB_URI=mongodb://localhost:27017/sambandh
```

### Option B — MongoDB Atlas (Cloud, Recommended)
1. Go to https://cloud.mongodb.com
2. Create a free cluster
3. Click "Connect" → "Drivers" → copy the URI
4. Replace `<password>` with your DB user password
5. Paste it as `MONGODB_URI` in backend/.env

---

## API Endpoints

| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| POST   | /api/contact   | Submit contact form      |
| GET    | /api/contact   | Get all messages (admin) |
| GET    | /api/health    | Server health check      |

### Test with curl:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello from Sambandh!"}'
```

---

## Deployment

### Frontend → Vercel
1. Push `frontend/` to a GitHub repo
2. Import in https://vercel.com
3. Set root directory to `frontend`
4. Add env var: `VITE_API_URL=https://your-backend.onrender.com/api`
5. Deploy!

### Backend → Render
1. Push `backend/` to a GitHub repo
2. Create a "Web Service" on https://render.com
3. Build command: `npm install`
4. Start command: `node server.js`
5. Add environment variables:
   - `MONGODB_URI=your_atlas_uri`
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://your-frontend.vercel.app`
6. Deploy!

---

## Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `ECONNREFUSED` on contact form | Backend not running — run `npm run dev` in `/backend` |
| MongoDB connection error | Check `MONGODB_URI` in `.env`; whitelist your IP in Atlas |
| CORS error in browser | Set `FRONTEND_URL` correctly in backend `.env` |
| `vite: command not found` | Run `npm install` in `/frontend` first |
| Port 5000 already in use | Change `PORT` in `.env` or kill the process |

---

## Future Improvements

- [ ] Admin dashboard to view/reply to messages
- [ ] Email notifications on new contact submissions (Nodemailer)
- [ ] Blog/News section with MongoDB content management
- [ ] Image optimisation with Cloudinary
- [ ] Analytics with Google Analytics 4
- [ ] SEO: sitemap.xml + robots.txt + meta tags per page
- [ ] Auth for admin panel (JWT + bcrypt)
- [ ] Rate limiting per IP for contact form
