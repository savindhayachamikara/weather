Weather-Dashboard 🌤️
Advanced Git & DevOps Team Collaboration Assignment – IT31023 – Systems Administration & Maintenance
A professional, responsive weather dashboard that fetches real-time weather data from OpenWeatherMap API and displays current weather and a 5-day forecast. The project now includes Docker containerization for easy deployment, environment consistency, and faster setup across machines.

👤 Project Information
* Student Name: I.R.G.S.C.Herath 
* Student ID: ITBIN-2211-0193 
* Role: Full-Stack Developer & DevOps Engineer (Individual Project) 

📖 Project Description
This project allows users to search for any city worldwide and see:
* Current temperature, weather condition, humidity, wind, visibility, and "feels like" temperature 
* 5-day forecast with daily icons and temperatures 
* Dynamic background changes based on weather conditions 
* Fully responsive UI for desktop and mobile 
* Real-time updates using OpenWeatherMap API 
* Containerized deployment with Docker and Docker Compose for consistent environments 
The application ensures seamless development, testing, and production deployments.

🛠️ Technologies Used
* HTML5, CSS3, JavaScript 
* OpenWeatherMap API 
* Font Awesome Icons 
* Docker & Docker Compose 
* GitHub Actions (CI/CD) 


✨ Features
* Search any city worldwide 
* Display current weather with icons and stats 
* 5-day forecast 
* Dynamic background transitions based on weather 
* Responsive design for mobile and desktop 
* Professional UI with colors, icons, and animations 
* Dockerized application for easy deployment 

🌿 Branch Strategy
* main – Production-ready branch (auto-deployed via CI/CD) 
* develop – Integration branch 
* feature/* – Feature development branches 

📌 Individual Contributions
I.R.G.S.C.Herath
* Repository setup and configuration 
* GitHub Actions CI/CD pipeline 
* Deployment setup to Vercel 
* Implemented dynamic weather dashboard features 
* Responsive design and UI styling 
* Integrated OpenWeatherMap API 
* Docker containerization and Compose orchestration 

⚙️ Setup Instructions
Prerequisites
* Node.js v18 or higher (for CI/CD or local scripts) 
* Git 
* Docker & Docker Compose (for containerized setup) 
Local Development
# Clone the repository
git clone https://github.com/savindhayachamikara/weather.git

# Navigate to project folder
cd weather

# Open index.html in browser OR use Live Server extension
Dockerized Deployment
# Build and start the containerized application
docker-compose up --build

# Access the application in browser
# If using Codespaces, the mapped port will be displayed in the terminal
# Default container port: 5000
Notes
* .dockerignore ensures unnecessary files are excluded from builds. 
* Environment variables can be configured in docker-compose.yml for development, testing, and production. 
* Health checks ensure the container restarts automatically if it becomes unhealthy. 

📚 References
* Docker Official Documentation 
* OpenWeatherMap API Documentation 
* Alpine Linux Official Documentation 
* CIS Docker Benchmark 

