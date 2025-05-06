# Portfolio Website

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) and Next.js.

## Features

- Responsive design that works on all devices
- Server-side rendering for improved SEO
- MongoDB database for storing projects, skills, and contact messages
- Express API for handling data operations
- React components for the frontend
- Next.js for server-side rendering and routing
- Tailwind CSS for styling
- TypeScript for type safety
- SEO optimizations (metadata, structured data, sitemap, robots.txt)

## Project Structure

The project follows the MVC (Model-View-Controller) architecture:

- **Models**: MongoDB schemas (server/src/models)
- **Views**: React components (client/src/components)
- **Controllers**: Express controllers (server/src/controllers)

### Directory Structure

```
/portfolio-root
├─ client/                  # Frontend (Next.js)
│  ├─ src/
│  │  ├─ app/               # Next.js App Router
│  │  ├─ components/        # React components
│  │  ├─ lib/               # Utility functions
│  │  └─ types/             # TypeScript types
├─ server/                  # Backend (Express)
│  ├─ src/
│  │  ├─ controllers/       # Express controllers
│  │  ├─ models/            # MongoDB schemas
│  │  ├─ routes/            # API routes
│  │  ├─ middleware/        # Express middleware
│  │  ├─ config/            # Configuration files
│  │  └─ index.ts           # Server entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the server directory based on `.env.example`
   - Create a `.env.local` file in the client directory with:
     ```
     NEXT_PUBLIC_API_URL=http://localhost:5000/api
     ```

4. Start the development servers:
   ```bash
   # Start the backend server
   cd server
   npm run dev

   # In a new terminal, start the frontend server
   cd client
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Deployment

### Backend Deployment

1. Build the server:
   ```bash
   cd server
   npm run build
   ```

2. Deploy to your preferred hosting service (Heroku, Vercel, AWS, etc.)

### Frontend Deployment

1. Build the client:
   ```bash
   cd client
   npm run build
   ```

2. Deploy to Vercel or your preferred hosting service

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
