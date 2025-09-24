# Calvin University Computer Science Club - Website MVP

This repository contains a React-based MVP for the Calvin University Computer Science Club website. The goal is a clean, responsive single-page application showcasing events, projects, leadership, and a basic signup layout.

What I built
- SPA with React Router and four main sections: Home, Projects, About, Join Us
- Home: Interactive event calendar (4 sample events), hover effects, and a modal with full event details
- Projects: 4 example projects with GitHub links
- About: Leadership cards and club mission statement
- Join Us: Non-functional sign-up form layout
- Header and Footer with quick links and social links
- Prominent CTA button linking to the Calvin Hackathon (opens in a new tab)
- Styling via CSS Modules, responsive grid layouts, subtle animations

Color palette
- Primary accents: green `#99C17B`, `#648942`
- Neutral backgrounds: whites and grays for readability

Files changed / added
- `src/components/Header.js`, `src/components/Footer.js`
- `src/AppRouter.js` (routing)
- `src/pages/Home.js`, `src/pages/Projects.js`, `src/pages/About.js`, `src/pages/JoinUs.js`
- CSS modules under `src/pages/*.module.css` and `src/components/*.module.css`

How to run locally
1. Install dependencies (from project root):

```powershell
npm install
```

2. Start development server:

```powershell
npm start
```

Notes and assumptions
- The signup form is non-functional as requested (MVP). It can be wired to an API or server later.
- Images included as attachments were not directly imported; drop images into `public/images/` and update component markup where indicated (leadership photos, project thumbnails). Placeholder text is used instead.
- Uses React Router v5 style `Switch` and `BrowserRouter` consistent with the existing CRA setup in the repo.

Accessibility and responsiveness
- Semantic headings and landmarks included
- Keyboard support for opening event cards (Enter key)
- Modal traps clicks and can be closed by clicking overlay or close button

Next steps (suggested)
- Wire the signup form to a backend or a Google Form
- Add real images and alt text for leadership and projects
- Add unit tests and linting rules
- Add a CMS or markdown-driven events listing for easy editing

If you want me to wire the images included in your attachments into the site now, I can add them under `public/images` and update the pages to reference them.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
