# Feedback Collection System

A full-stack web application for collecting and managing user feedback, built with React.js frontend and Node.js/Express backend with MongoDB database.

## 🚀 Features

- **Submit Feedback**: Users can submit feedback with their name and message
- **View Feedback**: All submitted feedback is displayed in real-time
- **Delete Feedback**: Admin can delete inappropriate or outdated feedback
- **Responsive Design**: Beautiful UI with Tailwind CSS styling
- **Real-time Updates**: Instant feedback display without page refresh

## 🛠️ Tech Stack

**Frontend:**
- React.js 18
- Tailwind CSS
- Axios for API calls

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- CORS enabled

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd "feedback system"
```

### 2. Backend Setup
```bash
cd server
npm install
```

**Important:** Create a `.env` file in the server directory with your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/feedback-db
```

You can use the provided `.env.example` as a template.

### 3. Frontend Setup
```bash
cd client
npm install
```

## 🚀 Running the Application

### Start the Backend Server
```bash
cd server
npm run dev    # For development with nodemon
# or
npm start      # For production
```
Server will run on `http://localhost:5000`

### Start the Frontend Application
```bash
cd client
npm start
```
Frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
feedback system/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── index.jsx        # React entry point
│   │   └── index.css        # Tailwind CSS imports
│   ├── package.json
│   └── tailwind.config.js
├── server/
│   ├── index.js             # Express server & API routes
│   └── package.json         # Backend dependencies
├── .env.example             # Environment variables template
└── readme.md               # Project documentation
```

## 🔌 API Endpoints

### GET `/api/feedback`
- **Description**: Retrieves all feedback entries
- **Response**: Array of feedback objects sorted by date (newest first)
- **Status**: 200 OK

### POST `/api/feedback`
- **Description**: Creates a new feedback entry
- **Required fields**: `name` (string), `message` (string)
- **Response**: Created feedback object with auto-generated `_id` and `date`
- **Status**: 201 Created

### DELETE `/api/feedback/:id`
- **Description**: Deletes a specific feedback entry by MongoDB ObjectId
- **Parameters**: `id` - MongoDB document ID
- **Response**: Success message or error
- **Status**: 200 OK / 500 Error

## 💾 Database Schema

**Feedback Collection (MongoDB):**
```javascript
{
  _id: ObjectId,              // Auto-generated MongoDB ID
  name: String,               // User's name
  message: String,            // Feedback message
  date: Date,                 // Auto-generated timestamp
  __v: Number                 // Mongoose version key
}
```

## 🎨 UI Features

- **Gradient Background**: Beautiful blue to purple gradient
- **Responsive Cards**: Clean feedback display cards
- **Interactive Forms**: Styled input fields with focus states
- **Hover Effects**: Smooth transitions and shadows
- **Delete Functionality**: Easy feedback management with confirmation

## ⚙️ Environment Variables

Create a `.env` file in the server directory:

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | ✅ Yes |

## 🔒 Security Considerations

⚠️ **Important**: This is a demo application. For production use, implement:

- **Authentication & Authorization**: User login and role-based access
- **Input Validation**: Sanitize and validate all user inputs
- **Environment Variables**: Keep sensitive data in `.env` files
- **Rate Limiting**: Prevent API abuse and spam
- **Error Handling**: Proper error responses and logging
- **HTTPS**: Secure data transmission
- **MongoDB Security**: Use connection strings with authentication
- **CORS Configuration**: Restrict origins in production

## 🐛 Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Ensure your `.env` file contains a valid `MONGODB_URI`
   - Check your MongoDB Atlas network access settings
   - Verify your database credentials

2. **Port Already in Use**
   - Kill the process using port 5000: `netstat -ano | findstr :5000`
   - Or change the port in [`server/index.js`](server/index.js)

3. **CORS Issues**
   - Ensure the backend server is running on port 5000
   - Check that CORS is properly configured in [`server/index.js`](server/index.js)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or run into issues:
- Create an issue in the repository
- Check the troubleshooting section above
- Review the MongoDB connection setup

---

**Happy Coding! 🚀**
