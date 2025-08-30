# NxtWatch - A Modern Video Streaming Platform

Welcome to **NxtWatch**, a responsive video streaming application built with **React**. This platform allows users to log in, browse a wide variety of videos, view trending content, explore gaming videos, and save their favorites for later. With a sleek interface that supports both light and dark themes, NxtWatch provides a seamless and personalized viewing experience.

---

## ✨ Features

* **Authentication**: Secure login and logout functionality for a personalized user experience.
* **Video Discovery**: Browse through an extensive collection of videos on the home page.
* **Search Functionality**: Easily find specific videos using the search bar.
* **Categorized Sections**: Dedicated pages for Trending and Gaming videos.
* **Video Player**: A fully functional video player page to watch selected content, view details, and interact with options like 'Like', 'Dislike', and 'Save'.
* **Saved Videos**: Users can save videos to a personal playlist and view them on the "Saved Videos" page.
* **Dark/Light Theme**: Toggle between a light and dark theme for comfortable viewing in any lighting condition.
* **Responsive Design**: The application is fully responsive and works beautifully on devices of all sizes, from mobile phones to desktops.
* **Protected Routes**: Content pages are protected, ensuring that only authenticated users can access them.

---

## 🛠️ Technologies Used

* **React**: A JavaScript library for building user interfaces.
* **React Router**: For handling client-side routing and navigation between pages.
* **React Context API**: For managing global state like the theme (light/dark) and the list of saved videos.
* **CSS3**: For styling components and creating a responsive layout.
* **js-cookie**: To manage JWT tokens for user authentication.
* **react-loader-spinner**: To display loading indicators during asynchronous operations.
* **react-icons**: For including a rich set of icons in the UI.

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

* Node.js and npm (or yarn) installed on your machine.

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/nxtwatch.git
```

Navigate to the project directory:

```bash
cd nxtwatch
```

Install the dependencies:

```bash
npm install
```

or if you use yarn:

```bash
yarn install
```

### Running the Application

Start the development server:

```bash
npm start
```

Open your browser and navigate to:

```
http://localhost:3000
```

---

## 📂 Project Structure

The project is organized into a `src` directory containing the following key folders:

* **components/**: Contains all the individual React components that make up the UI (e.g., NavBar, Home, Video, Login).
* **context/**: Holds the React Context files (`ThemeContext.js`, `savedVideosContext.js`) used for global state management.
* **App.js**: The main application component where routing is configured.
* **index.js**: The entry point of the React application.

---

## 🙌 Thank You

Thank you for checking out **NxtWatch**! 🎉
