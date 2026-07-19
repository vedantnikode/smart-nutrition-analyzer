# 🥗 Smart Nutrition Analyzer

A full-stack web application that helps users analyze their daily diet using trusted nutritional data. Users can build their diet from the college mess menu or search from a food database, then receive a complete nutrition report, health score, and personalized dietary recommendations.

---
## 🌐 Live Demo

- 🚀 **Frontend:** [smart-nutrition-analyzer.vercel.app](https://smart-nutrition-analyzer.vercel.app)
- ⚙️ **Backend API:** [smart-nutrition-analyzer-backend.onrender.com](https://smart-nutrition-analyzer-backend.onrender.com)
- 📖 **API Documentation:** [Swagger Docs](https://smart-nutrition-analyzer-backend.onrender.com/docs)

> **Note:** The backend is hosted on Render's free tier. If the API has been inactive, the first request may take **30–60 seconds** to wake up.
---
## 🌟 Features

### 🍽️ Daily Diet Planner
- Select a weekday
- View the college mess menu
- Add breakfast, lunch, and dinner items
- Search and add outside foods from the food database

### 📊 Nutrition Analysis
- Total Calories
- Protein
- Carbohydrates
- Fat
- Fiber
- Iron
- Calcium
- Vitamin C

### ❤️ Health Score
- Overall Nutrition Score
- Health Grade
- Personalized dietary recommendations
- Daily intake comparison

### 📱 Modern User Interface
- Responsive design
- Clean and intuitive interface
- Fast navigation
- Interactive food selection

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

## Backend
- FastAPI
- Python
- Pydantic

---

# 📂 Project Structure

```
Smart-Nutrition-Analyzer/
│
├── backend/
│   ├── main.py
│   ├── routes/
│   ├── models/
│   ├── data/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/vedantnikode/Smart-Nutrition-Analyzer.git
cd Smart-Nutrition-Analyzer
```

---

## Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux / macOS
source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 📸 Application Flow

🏠 Home

↓

🍽️ Daily Diet Planner

↓

📅 Select Day

↓

🍳 Add Breakfast

↓

🍛 Add Lunch

↓

🌙 Add Dinner

↓

📊 Nutrition Dashboard

↓

❤️ Health Score & Recommendations

---

# 🎯 Use Cases

- Analyze daily nutritional intake
- Evaluate college mess meals
- Compare nutrition across food choices
- Promote healthier eating habits

---

# 📷 Screenshots


![Home Page](assets/Screenshot%202026-07-19%20204039.png)

---

![Daily Diet Planner](assets/Screenshot%202026-07-19%20204052.png)

---


![College Mess Menu](assets/Screenshot%202026-07-19%20204113.png)

---


![Nutrition Dashboard](assets/Screenshot%202026-07-19%20204122.png)

---


![About the Project](assets/Screenshot%202026-07-19%20204136.png)


---

# 🔮 Future Improvements

- User authentication
- Meal history
- Weekly nutrition analytics
- Personalized diet plans
- Food image recognition
- Export nutrition reports as PDF

---

# 👨‍💻 Developer

**Vedant Nikode**

Bioengineering Undergraduate  
Indian Institute of Technology, Mandi

📧 Email: *vedantnikode1@gmail.com*

📷 Instagram: *(https://www.instagram.com/vedant._.2107)*

---

# 📄 License

This project was developed for educational and hackathon purposes.

---

## ⭐ If you like this project, consider giving it a star!
