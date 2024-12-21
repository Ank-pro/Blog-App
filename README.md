Blog Application
A full-stack MERN blog application with AI-powered summary generation using Google's Gemini API.
Features

Create and view blog posts
Auto-generate blog summaries using Gemini AI
Responsive design
MongoDB integration
Real-time summary generation

Tech Stack

Frontend: React (Vite)
Backend: Node.js, Express.js
Database: MongoDB
AI Integration: Google Gemini API
Package Manager: pnpm
Deployment: Vercel

Setup & Installation

Clone Repository

Fork this repository
Clone to your local machine


Frontend Setup

Navigate to frontend directory
Install dependencies with pnpm install
Create .env file:
CopyVITE_GEMINI_API_KEY=your_gemini_api_key

Start frontend: pnpm dev


Backend Setup

Navigate to backend directory
Install dependencies with pnpm install
Create .env file:
CopyPORT=5000
DB_URI=your_mongodb_connection_string

Start backend: pnpm start


Database Setup

Create MongoDB Atlas account
Create new cluster
Get connection string
Add connection string to backend .env


Gemini API Setup

Get API key from Google AI Studio
Add to frontend .env file
