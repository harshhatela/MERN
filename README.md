# Harsh Hatela - Personal Portfolio

## Overview

A single-page personal portfolio website built as part of the BeeSkilled Full Stack Web Development (MERN) internship, Week 1 assignment. The entire site is built with vanilla HTML, CSS, and JavaScript — no frameworks, libraries, or build tools are used.

## Features

- Responsive navigation bar with a mobile hamburger menu (collapses below 768px)
- Home, About, Education, Projects, and Contact sections
- CSS Flexbox used for the navbar and education layout
- CSS Grid used for the projects layout
- Contact form with JavaScript validation (required fields, email format check, minimum message length of 10 characters)
- Inline error messages for invalid fields and a success message on valid submission

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Folder Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Installation / Running Locally

There are no dependencies, so no `npm install` or build step is needed.

1. Clone the repo:
   ```bash
   git clone https://github.com/harshhatela/MERN.git
   ```
2. Open `index.html` directly in a browser, or serve it with any static server (e.g. the VS Code Live Server extension).

## Deployment

This is a fully static site, so it can be deployed with no build configuration.

**Vercel:**
1. Import the GitHub repo on Vercel.
2. Set the framework preset to "Other".
3. Leave the build command empty.
4. Set the output directory to the root (`.`).

**GitHub Pages:**
1. Go to the repo's Settings → Pages.
2. Under "Source", select the `main` branch and root (`/`) folder.
3. Save — the site will be live at `https://harshhatela.github.io/MERN/`.

## Future Improvements

- Convert the site to React components for better maintainability as it grows.
- Connect the contact form to a real backend or email service (e.g. EmailJS or a Node.js/Express API) so messages are actually delivered.
- Add more projects to the portfolio as they are completed during the internship.
