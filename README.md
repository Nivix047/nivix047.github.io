# Portfolio Page

Welcome to my personal portfolio page, a project designed to showcase my notable projects and demonstrate my skills in React.js and Material UI (MUI). This portfolio is built with an eye for design and functionality, utilizing React's component-based architecture along with the versatility and aesthetic of MUI components.

## Project Overview

The purpose of this portfolio is twofold:

- **Showcase Work**: To present my notable projects, detailing the technologies used and the challenges overcome.
- **Demonstrate Skills**: To illustrate my proficiency in React.js and Material UI, highlighting my ability to create responsive, user-friendly web applications.

### Built With

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Material UI (MUI)](https://mui.com/) - A popular React UI framework offering a comprehensive suite of components and customization options.
- [EmailJS](https://www.emailjs.com/) - Allows sending emails directly from the frontend without needing a backend service, used for the contact form integration.

## Features

This portfolio includes several key features:

- **Responsive Navbar**: A dynamic navigation bar that adjusts to screen size, providing a seamless browsing experience on any device.
- **Custom Theme**: Utilizes MUI's `createTheme` for consistent styling across components, emphasizing a unique monospace typography.
- **Routing**: Implements React Router for smooth navigation between the Home, Contact, Resume, and Terms pages.
- **Contact Form**: A fully functional contact form built with emailjs-com integration, allowing visitors to reach out directly through the site.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the latest version of [Node.js](https://nodejs.org/) installed. This project was bootstrapped with [Create React App](https://create-react-app.dev/).

### Installation

1. **Install Dependencies**: Run `npm install` to install the required dependencies for the project.

2. **Environment Variables**: For the contact form to function properly, you'll need to set up environment variables required by EmailJS. Create a `.env` file in the root directory of your project and include the following variables:

- REACT_APP_EMAILJS_SERVICE_ID=<Your_EmailJS_Service_ID>
- REACT_APP_EMAILJS_TEMPLATE_ID=<Your_EmailJS_Template_ID>
- REACT_APP_EMAILJS_USER_ID=<Your_EmailJS_User_ID>

3. **Start the Application**: Run `npm start` to launch the application in development mode. The app will be accessible at [http://localhost:3000](http://localhost:3000), where you can view and interact with your portfolio.
