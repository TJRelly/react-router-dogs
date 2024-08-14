# React Router Dog Finder

## Overview

The **React Router Dog Finder** is a single-page application (SPA) built with React and React Router. It demonstrates my ability to create dynamic, client-side routing for a user-friendly web application. The app allows users to navigate between different dog profiles, displaying specific information about each dog on their respective routes.

## Features

- **Dynamic Routing**: 
  - `/dogs`: The homepage that lists all available dogs.
  - `/dogs/:name`: Displays detailed information about the selected dog based on the route parameter.
  - Redirects any undefined routes to `/dogs`, ensuring a seamless user experience.
  
- **Component-based Architecture**:
  - **`<Nav />`**: A navigation bar that dynamically generates links based on the available dog names.
  - **`<DogList />`**: A component that displays a list of all dogs.
  - **`<DogDetails />`**: A component that provides detailed information about a single dog, including age and fun facts.

## Project Structure

```jsx
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    }
  ]
}

