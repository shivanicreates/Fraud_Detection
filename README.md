# Fraud Detection Dashboard

This project is a **frontend dashboard** for visualizing transaction analysis and fraud detection results. The backend processes real-time transaction data using **Apache Flink** and stores results in **Couchbase**, while the frontend uses **React.js** (powered by **Vite**) to display fraud statistics, flagged transactions, and trends.

---

## Features

- Displays transaction details in a paginated table.
- Visualizes fraud trends with interactive charts (e.g., line charts, bar charts).
- Filters transactions by date, amount, and fraud status.
- Connects to a backend API for real-time data updates.

---

## Technologies Used

- **React.js**: Frontend framework for building user interfaces.
- **Vite**: Fast development server and build tool.
- **Chart.js**: Library for creating visualizations.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) and npm (Node Package Manager).
  - [Download Node.js](https://nodejs.org/)
- A backend API for fetching transaction data (ensure the API endpoint is running).

---

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install dependencies:
   ```
   npm install
   ```

---

### Running the Application

To start the development server:

1. Run the following command:
   ```
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Folder Structure

```plaintext
frontend/
├── public/                 # Static files (e.g., images, icons)
├── src/                    # Source files
│   ├── assets/             # Static assets like images or fonts
│   ├── components/         # Reusable React components
│   ├── App.jsx             # Main application entry
│   ├── index.css           # Global styles
│   ├── main.jsx            # Entry point for React and Vite
├── package.json            # Project configuration
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Documentation
```

---

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`
Starts the development server for local testing.

### `npm run build`
Builds the app for production in the `dist/` directory.

### `npm run preview`
Serves the production build locally for testing.

---

## Notes

- Ensure the backend API is running before starting the dashboard to fetch data successfully.
