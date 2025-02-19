# Buse-Project
This backend will handle user login (simple validation) and transactions (viewing & adding).
Step 1: Backend Development (Node.js + Express)
mkdir transaction-tracker-backend && cd transaction-tracker-backend
npm init -y
npm install express cors body-parser
Run the Backend
Backend API is now running on http://localhost:3000 
App Structure
 TransactionTracker
│── /src
│   ├── /screens
│   │   ├── LoginScreen.js
│   │   ├── TransactionList.js
│   │   ├── AddTransaction.js
│   ├── /navigation
│   │   ├── AppNavigator.js
│   ├── App.js
