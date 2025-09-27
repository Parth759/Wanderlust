🌍 Wanderlust – Airbnb Clone
Wanderlust is a full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS. It allows users to explore, create, and manage property listings with reviews and authentication features.

🚀 Features
🔑 User Authentication & Authorization – Secure login, signup, and session handling with Passport.js
🏡 Listings Management – Create, read, update, and delete (CRUD) travel stay listings
⭐ Review System – Add and manage reviews with server-side validation
📱 Responsive Design – Mobile-friendly UI using Bootstrap
⚡ Data Validation & Error Handling – Joi validation and custom error handling middleware

🛠️ Tech Stack

Frontend: EJS, Bootstrap
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: Passport.js, bcrypt
Validation & Security: Joi, Express middleware


🔧 Installation & Setup

Clone the repository
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust


Install dependencies
npm install


Create a .env file and add the following:
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key


Run the application
node app.js

App will be running at: http://localhost:3000

📌 Future Improvements
🌐 Integrate Cloudinary for image uploads
📍 Add Google Maps API for geolocation
🏷️ Add booking and payment system

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to improve.
