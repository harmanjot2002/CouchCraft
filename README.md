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
