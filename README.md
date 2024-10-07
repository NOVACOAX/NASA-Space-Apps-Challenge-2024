# Her Climate

[Her Climate Website](https://her-climate.web.app)

**Her Climate** is a gender-climate model focused on leveraging available resources to empower the girl-child in vulnerable communities, particularly in the face of climate change. The platform seeks to provide education, leadership, and tailored resources to build climate resilience among women. 

This project was developed as part of the **NASA International Space Apps Challenge 2024**.

## Project Overview

At **Her Climate**, we recognize the deep connection between gender equality and climate action. Women, especially in vulnerable communities, are at the forefront of both climate impacts and solutions. Our platform focuses on empowering women to lead the charge towards a more equitable and sustainable future through a gender-responsive approach to climate action.

### Key Objectives:
1. **Empowering Women**: Educate and provide resources that enable women to take leadership roles in their communities.
2. **Building Resilience**: Offer tailored training and awareness programs to foster climate adaptation and sustainable practices.
3. **Data-Driven Action**: Use maps and gender data to identify areas where climate vulnerability disproportionately affects women.

## Website Features

- **Climate Justice Map**: Visualizes women's vulnerability to climate change across different regions of Kenya.

## Technologies Used

- **Frontend**: [Vue.js](https://vuejs.org/) (Vue 3)
- **CSS Framework**: Tailwind CSS (custom theme)
- **Backend**: Firebase Hosting
- **Additional Tools**: Vite, PostCSS, SCSS

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NOVACOAX/NASA-Space-Apps-Challenge-2024.git
   cd NASA-Space-Apps-Challenge-2024
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the project in your browser at `http://localhost:3000`.

### Firebase Setup

To connect the app with Firebase:

1. Create a Firebase project [here](https://firebase.google.com/).
2. Configure the Firebase settings by adding your project's Firebase credentials to `firebase.json`.

### Deployment

To deploy the project using Firebase Hosting:

```bash
npm run build
firebase deploy
```

## Folder Structure

- **src/**: Contains all the source code (components, pages, assets).
- **public/**: Static files (index.html, images).
- **firebase.json**: Firebase configuration for hosting and Firestore rules.
- **tailwind.config.js**: Custom configuration for Tailwind CSS.
- **vite.config.js**: Configuration for Vite (build tool).

## Key Pages

- **Home Page**: Overview of the Her Climate platform, gender-climate relationship, and key programs.
- **Gender and Climate**: Detailed insights into how climate change affects women differently and the need for gender equality in climate action.

## Contributors

This project was designed and developed by the following team as part of the **NASA International Space Apps Challenge 2024**:

- **Hugh** | **Lewis** | **Elizabeth** | **Natalie** | **Brenda** | **Rogers** | **Jackson**

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
