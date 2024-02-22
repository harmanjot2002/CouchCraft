# Couch Craft - Dynamic Full-Stack Couch Surfing Website 🛋️

## Introduction:

Couch Craft is a comprehensive full-stack couch surfing website built with Node, Express, React, and various libraries. This project offers seamless user authentication, real-time mapping with Mapbox, image uploads with React Dropzone, and a secure backend with JWT encryption and bcrypt. Powered by Firebase, MongoDB (mongoose), and featuring an enhanced UI using Material-UI and Swiper, Couch Craft stands out as a versatile solution for those interested in building platforms for room-sharing, real estate, or renting rooms.

## Features:

- **Seamless User Authentication:** Simulated login process with global context and reducer for switching between logged and unlogged states. User sessions are saved in local storage for 24 hours, ensuring users stay logged in even after leaving the web app.

- **Profile Customization:** Users can upload a profile picture to serve as their avatar photo and update their name via a profile modal. Firebase storage stores user photos, while MongoDB stores image URLs and updated user names.

- **Responsive Footer Navigation:** Utilizing Material UI MUI5 with sx prop and BottomNav component, providing access to different sections (Map, Rooms, Add Room).

- **Interactive Room Creation:** Implemented a non-linear flexible stepper for creating new rooms. Steps include adding location, details, and room images. Features drag-and-drop functionality for image uploads and Firebase Storage integration.

- **Real-time Mapping with Mapbox:** The map automatically locates the user's city based on their IP address. Users can enable geolocation to find their exact location or search for any city or street address to add the room location.

- **Room Clustering:** Added rooms as clusters using Supercluster, showing rooms in the same location as a cluster in a circle icon with the number of available rooms.

- **Filtering and Search:** Integrated price slider filter and a search box input for filtering rooms by city using Mapbox Geocoder input. Combined both filters to work together.

- **Responsive Rooms Display:** Utilized Material UI ImageList component for displaying responsive images list in the Rooms section. CSS grid template columns ensure a responsive layout.

- **Popup Slider on Map:** Implemented a small popup slider on the Mapbox map with short information about the room when clicking on the user's avatar.

- **Admin Dashboard Panel:** Added access roles and permissions for admin, editor, and normal user. Admin and editor roles have privileges to access statistics, charts, view and edit users and rooms.

- **Charts on Admin Panel:** Included Pie Chart for room prices/categories and an Area Chart for a comparison between the number of users and rooms in the same month for the last 5 months.

- **User Management:** Implemented an advanced DataGrid component from Material UI5 in the dashboard for managing users. Customized pagination, spacing, and background for a visually appealing table.

- **Access Control:** Restricted access to the admin panel dashboard based on user roles. Admins have full access, editors have limited user management rights, and normal users can manage their own added rooms.

## Technologies Used:
- React.js
- Node.js
- Express
- MongoDB (Mongoose)
- Firebase
- Mapbox
- JWT Tokens

## Server Dependencies:
- **bcryptjs (v2.4.3):** Library for hashing passwords securely.
- **cors (v2.8.5):** Middleware for handling Cross-Origin Resource Sharing.
- **dotenv (v16.4.1):** Library for loading environment variables from a .env file.
- **express (v4.18.2):** Web application framework for Node.js.
- **jsonwebtoken (v9.0.2):** Library for creating and verifying JSON Web Tokens (JWT).
- **mongoose (v8.1.1):** MongoDB object modeling for Node.js.

## Server Development Dependency:
- **nodemon (v3.0.3):** Utility for monitoring changes in the application and automatically restarting the server during development.

## Client Dependencies:
- **@emotion/react (v11.11.3):** Core library for Emotion CSS-in-JS styling.
- **@emotion/styled (v11.11.0):** Library for styled components with Emotion.
- **@mapbox/mapbox-gl-geocoder (v5.0.2):** Mapbox Geocoding plugin for searching locations.
- **@mui/icons-material (v5.15.7):** Material-UI icons for React components.
- **@mui/material (v5.15.7):** Material-UI core library for React components.
- **@mui/x-data-grid (v6.19.4):** Material-UI DataGrid component for displaying data in a tabular format.
- **animate.css (v4.1.1):** Library for adding CSS animations to elements.
- **axios (v1.6.7):** HTTP client for making requests to the backend.
- **firebase (v10.8.0):** Firebase SDK for integrating Firebase services.
- **jwt-decode (v4.0.0):** Library for decoding JWT tokens.
- **mapbox-gl (v3.1.2):** Mapbox library for interactive maps.
- **moment (v2.30.1):** Library for handling dates and times in JavaScript.
- **react (v18.2.0):** Core library for building React applications.
- **react-dom (v18.2.0):** Library for handling the DOM in React applications.
- **react-dropzone (v14.2.3):** Library for handling file uploads with React.
- **react-map-gl (v7.1.7):** React wrapper for Mapbox GL JS.
- **react-router-dom (v6.22.0):** Routing library for React applications.
- **react-scripts (v5.0.1):** Set of scripts and configurations for Create React App.
- **recharts (v2.12.0):** Library for creating responsive charts with React.
- **supercluster (v8.0.1):** Library for clustering geographical points on a map.
- **uuid (v9.0.1):** Library for generating UUIDs.
- **web-vitals (v2.1.4):** Library for tracking web performance metrics.

## Deployment:

### Frontend Deployment - Vercel:
Byte Learn utilizes Vercel for seamless frontend deployment. Vercel provides an efficient and user-friendly platform for hosting React applications.

### Backend Deployment - Render:
For the backend, Couch Craft leverages Render for deployment. Render offers a reliable and scalable solution for hosting Node.js applications. With Render, you can ensure that your server is deployed and ready to handle requests.
