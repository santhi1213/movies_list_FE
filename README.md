# 🎬 MovieManager - Frontend

A modern, professional React application for managing your personal movie and TV show collection. Features a beautiful gradient UI with smooth animations, infinite scroll, and seamless authentication flow.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

- 🔐 User authentication (Register/Login) with JWT
- 🎬 Browse movie collection with infinite scroll
- ➕ Add new movies/TV shows with poster uploads
- ✏️ Edit existing movie details
- 🗑️ Delete movies from collection
- 🎨 Modern gradient UI with professional design
- 📱 Fully responsive layout
- 🖼️ Movie poster preview and upload
- 🔄 Real-time navbar state updates
- ⚡ Fast and optimized with Vite

## 🛠️ Tech Stack

- **React** 18.2.0 - UI library
- **React Router DOM** 6.20.0 - Client-side routing
- **Axios** 1.6.2 - HTTP client for API calls
- **Lucide React** 0.294.0 - Beautiful icon library
- **Tailwind CSS** 3.3.6 - Utility-first CSS framework
- **Vite** 5.0.0 - Next-generation frontend build tool

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (v9.x or higher) - Comes with Node.js
- **Backend API** running - [Backend Repository Link]

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/movie-manager-frontend.git
cd movie-manager-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure API Endpoint

Update the API base URL in all component files if your backend is running on a different URL:

**Current backend URL:** `https://movies-list-be-1.onrender.com`

If running backend locally, replace all instances with:
```javascript
// Example in Login.jsx, Register.jsx, AddMovie.jsx, etc.
const API_URL = "http://localhost:5000";

// Then use in API calls
axios.post(`${API_URL}/api/auth/login`, form);
```

Alternatively, create a `.env` file:
```env
VITE_API_URL=http://localhost:5000
```

And update components to use:
```javascript
const API_URL = import.meta.env.VITE_API_URL || "https://movies-list-be-1.onrender.com";
```

### 4. Start Development Server
```bash
npm run dev
```

The application will run on **http://localhost:5173**

## 📦 Package Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "axios": "^1.6.2",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "vite": "^5.0.8"
  }
}
```

## 🎨 Tailwind CSS Configuration

### 1. Create `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Create `postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📁 Project Structure
```
movie-manager-frontend/
├── public/
├── src/
│   ├── components/
│   │   └── MovieTable.jsx           # Table component for movie list
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.jsx            # Login page
│   │   │   └── Register.jsx         # Registration page
│   │   ├── Home.jsx                 # Home page with movie list
│   │   ├── AddMovie.jsx             # Add movie form
│   │   └── EditMovie.jsx            # Edit movie form
│   ├── App.jsx                      # Main app component with routing
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles with Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎯 Component Overview

### 1. **App.jsx**
Main application component with:
- Router setup
- Navbar with authentication state
- Route configuration
- Login state management

### 2. **MovieTable.jsx**
Displays movies in a beautiful table with:
- Poster thumbnails
- Movie details
- Edit/Delete buttons with icons
- Hover effects and animations

### 3. **Login.jsx**
User login page featuring:
- Email and password inputs
- Form validation
- Success/error messages
- `onLoginSuccess` callback for navbar update

### 4. **Register.jsx**
User registration page with:
- Username, email, and password fields
- Account creation flow
- Redirect to login after success

### 5. **Home.jsx**
Main dashboard showing:
- Hero section with gradient
- Movie collection table
- Infinite scroll pagination
- Empty state with call-to-action
- Loading indicators

### 6. **AddMovie.jsx**
Form to add new movies with:
- Title, type, director fields
- Budget, location, duration, year inputs
- Image upload with preview
- Icon labels for better UX

### 7. **EditMovie.jsx**
Edit existing movies with:
- Pre-populated form data
- Image preview and replacement
- Update functionality

## 🔑 Key Features Explained

### Authentication Flow
1. User registers → stored in backend database
2. User logs in → receives JWT token
3. Token stored in localStorage
4. Protected routes check for token
5. Navbar updates immediately via callback

### Infinite Scroll
- Loads 5 movies per page
- Automatically loads more on scroll
- Shows loading indicator
- Detects end of collection

### Image Upload
- Users can upload movie posters
- Preview before submission
- FormData used for multipart upload
- Fallback to placeholder on error

## 🎨 Design System

### Color Palette
- **Primary Gradient:** Indigo (600) to Purple (600)
- **Hover States:** Indigo (700) to Purple (700)
- **Success:** Green (50, 700)
- **Error:** Red (50, 700)
- **Neutral:** Gray scale (50-900)

### Icons Used (Lucide React)
- `Film` - Movie/app branding
- `Plus` - Add actions
- `Home` - Home navigation
- `LogIn` / `LogOut` - Authentication
- `UserPlus` - Registration
- `Edit2` - Edit actions
- `Trash2` - Delete actions
- `User`, `DollarSign`, `MapPin`, `Clock`, `Calendar` - Form labels

## 📝 Available Scripts
```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## 🌐 API Integration

The frontend connects to the following backend endpoints:

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Authenticate user and receive JWT

### Movies
- `GET /api/movies?page={page}&limit={limit}` - Get paginated movies
- `GET /api/movies/:id` - Get single movie details
- `POST /api/movies` - Add new movie (requires auth token)
- `PUT /api/movies/:id` - Update movie (requires auth token)
- `DELETE /api/movies/:id` - Delete movie (requires auth token)

### Authorization Header
Protected routes require JWT token in headers:
```javascript
headers: {
  Authorization: `Bearer ${localStorage.getItem("token")}`
}
```

## 🐛 Troubleshooting

### Common Issues:

**1. Module Not Found - Lucide React**
```bash
npm install lucide-react
```

**2. Tailwind Styles Not Working**
- Ensure `tailwind.config.js` is properly configured
- Check that `index.css` has Tailwind directives
- Restart dev server after config changes

**3. API Connection Failed**
- Verify backend is running
- Check CORS is enabled on backend
- Confirm API URL is correct in components

**4. Images Not Displaying**
- Check backend uploads directory exists
- Verify image URLs are being returned from API
- Ensure fallback placeholder path is correct

**5. Navbar Not Updating After Login**
- Confirm `onLoginSuccess` callback is being called
- Check localStorage is storing the token
- Verify `isLoggedIn` state in App.jsx

**6. Build Errors**
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Environment Variables for Production

Set these in your hosting platform:
```
VITE_API_URL=https://your-backend-api.com
```

## 🔒 Security Notes

- JWT tokens are stored in localStorage
- No sensitive data in frontend code
- All API calls use HTTPS in production
- Form validation on both frontend and backend
- Protected routes redirect to login

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎭 Animations & Transitions

- Smooth hover effects on buttons
- Transform animations on interactive elements
- Gradient transitions
- Loading spinners
- Fade-in effects

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Your Name - Santhi Raju

Frontend Repository: https://github.com/santhi1213/movies_list_FE.git

Backend Repository: https://github.com/santhi1213/movies_list_BE.git

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

⭐️ If you like this project, please give it a star!
