# 🏨 Rustic React

A modern hotel management system built with **React** and **Django REST Framework**. Perfect for managing cabins, bookings, and guests with style! 🌟

![image](https://github.com/user-attachments/assets/cf495e5c-8013-4eca-8d9b-e95a80b8967b)



## ✨ Key Features

- 🔐 **Authentication & Authorization**
  - Secure token-based authentication
  - Protected routes
  - User roles and permissions
  - Password reset functionality
  - Email confirmation

- 📊 **Dashboard**
  - Real-time statistics
  - Occupancy rates
  - Revenue tracking
  - Stay duration charts
  - Booking statistics

- 📅 **Booking Management**
  - Real-time availability checking
  - Interactive date picker
  - Automatic price calculation
  - Breakfast add-on options
  - Smart validation rules
  - Custom observations

- 🏡 **Cabin Management**
  - Photo upload capability
  - Dynamic pricing
  - Discount management
  - Capacity settings
  - Detailed descriptions

- 👥 **Guest Management**
  - Guest profiles
  - Booking history
  - Contact information
  - National flags
  - Search and filter options

- ✔️ **Check-in/out System**
  - Streamlined check-in process
  - Payment confirmation
  - Breakfast add-on at check-in
  - Activity monitoring

- 🎨 **UI/UX Features**
  - Responsive design
  - Dark/Light mode
  - Interactive charts
  - Loading states
  - Toast notifications
  - Form validations
  - Mobile-friendly interface

## 🛠️ Tech Stack

### Frontend
- ⚛️ React 18
- 🛣️ React Router 6
- 🔄 React Query
- 💅 Styled Components
- 📝 React Hook Form
- 📊 Recharts
- 🍞 React Hot Toast
- 🎭 Framer Motion
- 🎨 React Icons
- 📅 DayPicker

### Backend
- 🐍 Django 4
- 🌐 Django REST Framework
- 🗄️ SQLite3
- 🔒 Django Authentication
- 🤝 Django CORS Headers

## ⚙️ Installation
### Prerequisites
- Node.js (v16 or higher)
- Python 3.x
- pip

### Complete Setup

1. **Clone the repository**
```bash
git clone https://github.com/RoboG-11/rustic-react.git
cd rustic-react
```

2. **Frontend Setup**
```bash
cd frontend
npm install
cp .envtest .env
```

3. **Backend Setup**
```bash
cd backend
cp .envtest .env
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

4. **Development Servers**
  - Terminal 1 (Backend)
```bash
cd backend
source venv/bin/activate  # On Windows use: venv\Scripts\activate
python manage.py runserver
```

  - Terminal 2 (Frontend)
```bash
cd frontend
npm run dev
```

## 🔑 Environment Variables
### Frontend (.env)
```env
VITE_API_URL=http://localhost:8000
```

### Backend (.env)
```env
# Django Settings
DEBUG=True
SECRET_KEY=django-insecure-your-secret-key

# Security Settings
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173

# Database Settings
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
```

## 🚀 Running the Application
**Start the backend server:**
```bash
cd backend
python manage.py runserver
```

Start the frontend development server:
```bash
cd frontend
npm run dev
```

## 📁 Project Structure
```env
rustic-react/
├── frontend/                # React application
│   ├── src/
│   │   ├── features/        # Feature-based components
│   │   ├── ui/              # Reusable UI components
│   │   ├── services/        # API services
│   │   ├── utils/           # Utility functions
│   │   └── hooks/           # Custom React hooks
│   └── public/              # Static files
└── backend/                 # Django application
    ├── authentication/      # Auth management
    ├── bookings/            # Booking management
    ├── cabins/              # Cabin management
    ├── guests/              # Guest management
    └── settings/            # Application settings
```

## 📱 UI Showcase  
![image](https://github.com/user-attachments/assets/90273e0a-2c8f-4013-b0eb-869964c63cde)
![image](https://github.com/user-attachments/assets/4a61346e-d423-4524-baa4-8088213ead29)
![image](https://github.com/user-attachments/assets/045e63dd-3b50-4da9-898e-997fd1d427db)
![image](https://github.com/user-attachments/assets/645292c5-6e51-4dd0-b8fa-7063a90f4a0f)
![image](https://github.com/user-attachments/assets/95301ef9-68df-40d8-a79d-c4c19fcf9872)




## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👤 Author
[Brian Rivera Martinez](https://www.instagram.com/robog._/)


## 🙏 Acknowledgments
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Django Documentation](https://docs.djangoproject.com/)
- The Open Source Community
