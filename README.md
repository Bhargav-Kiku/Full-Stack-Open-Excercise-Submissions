# Full Stack Open — Solutions & Submissions

> My solutions and notes for the Full Stack Open course (University of Helsinki).  
> A collection of exercises, projects, and reference implementations that track my progress through the course.

---

## Table of contents
- [About](#about)
- [Course](#course)
- [What's in this repo](#whats-in-this-repo)
- [Repository structure](#repository-structure)
- [Technologies used](#technologies-used)
- [Getting started](#getting-started)
- [How to run a part](#how-to-run-a-part)
- [Testing](#testing)
- [Contributing](#contributing)
- [Notes & tips](#notes--tips)
- [Course link](#course-link)
- [Contact](#contact)

---

## About
This repository contains my solutions for the Full Stack Open course. Each course part is stored in its own folder and usually contains exercises, example apps, and a small README describing how to run that specific part.

Purpose:
- Track learning progress
- Keep working solutions and notes
- Serve as examples and references for future projects

---

## Course
Full Stack Open covers modern full-stack web development topics including:
- React (components, hooks)
- Frontend testing (Jest, React Testing Library)
- HTTP & REST API communication (Axios, fetch)
- Node.js & Express backends
- MongoDB (with Mongoose)
- Authentication (token-based)
- GraphQL basics
- TypeScript in full-stack apps
- CI/CD workflows and testing with Cypress
- React Native basics

---

## What's in this repo
Top-level folders match the course parts. Inside each part you will typically find the exercises and example projects.

Example:
```
part1/
 ├── courseinfo/
 ├── unicafe/
 └── anecdotes/
part2/
part3/
...
```

---

## Repository structure
- part0/ – introductory exercises and notes
- part1/ … part10/ – course parts, each containing exercises and apps
- README.md – this file with overview and instructions

(Each `partX/` directory may include its own README with part-specific steps.)

---

## Technologies used
- JavaScript & TypeScript
- React
- Node.js & Express
- MongoDB (Mongoose)
- Vite / Webpack
- Jest, React Testing Library, Cypress
- REST & GraphQL
- Git & GitHub

---

## Getting started
Prerequisites:
- Node.js (LTS recommended)
- npm or yarn
- For backend parts: a running MongoDB (local or cloud)

General steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Bhargav-Kiku/Full-Stack-Open-Excercise-Submissions.git
   cd Full-Stack-Open-Excercise-Submissions
   ```
2. Navigate to the part folder you want to run:
   ```bash
   cd partX/some-exercise
   ```
3. Install dependencies and start (typical):
   ```bash
   npm install
   npm start
   # or
   npm run dev
   ```
   See that part's README for precise commands — some parts use create-react-app, others use Vite, or a Node backend.

Environment variables:
- Backend parts often expect MONGODB_URI and PORT. Check the specific part's README or `.env.example` if present.

---

## How to run a part
Each part may have a slightly different setup. Common patterns:
- Frontend React apps: `npm install`, `npm start` (runs local dev server)
- Backend Node/Express apps: `npm install`, set environment variables (e.g., `MONGODB_URI`), then `npm run dev` or `node index.js`
- Full-stack examples: run backend and frontend in separate terminals

If a part has its own README, follow that first — it contains part-specific instructions.

---

## Testing
- Unit tests: `npm test` (where available)
- E2E: Some parts include Cypress; run `npx cypress open` or `npx cypress run` as documented in the part
- Linting & formatting may vary per part — check part-specific configs

---

## Contributing
This repo is mainly a personal learning record, but contributions and suggestions are welcome:
- Open an issue if you spot inaccuracies or improvements
- Propose small PRs for documentation fixes or added clarifications

If you want me to add badges, CI status, screenshots, or a LICENSE file, I can prepare and push those changes.

---

## Notes & tips
- Many parts are independent — there is no single unified install across the whole repo.
- If you get errors starting a backend, double-check the MongoDB connection string and required environment variables.
- Look for a README inside each `partX/` folder — it often contains the exact run instructions.

---

## Course link
Full Stack Open — https://fullstackopen.com/

---

## Contact
Author: Bhargav-Kiku  
Repository: https://github.com/Bhargav-Kiku/Full-Stack-Open-Excercise-Submissions
