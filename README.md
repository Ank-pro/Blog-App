**Setup & Installation**
1. Clone Repository
Fork this repository.
Clone it to your local machine using the following command:
git clone https://github.com/your-username/blog-app.git

2. Frontend Setup
Navigate to the frontend directory.
Install dependencies by running:

pnpm install

Create a .env file in the frontend directory and add your Google Gemini API key:

VITE_GEMINI_API_KEY=your_gemini_api_key

Start the frontend server by running:

pnpm run dev
The frontend will be running on http://localhost:5173.

3. Backend Setup
Navigate to the backend directory.

Install dependencies by running:

pnpm install
Create a .env file in the backend directory and add your MongoDB connection string and port:

PORT=5000
DB_URI=your_mongodb_connection_string
Start the backend server by running:

nodemon index
The backend will be running on http://localhost:5000.

4. Database Setup
Create a MongoDB Atlas account (if you don't have one).
Create a new cluster.
Get the connection string from the MongoDB Atlas dashboard.
Add the connection string to the DB_URI variable in the backend/.env file.

6. Gemini API Setup
Get your API key from Google AI Studio.
Add the key to the .env file in the frontend directory:

VITE_GEMINI_API_KEY=your_gemini_api_key
