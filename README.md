## Recipe App (Angular 18+)

A small Single Page Application built with Angular 18+ using the DummyJSON REST API.

## Tech Stack

- Angular 18+
- Standalone Components (no NgModules)
- RxJS & Observables
- Angular Router
- TypeScript
- Bulma CSS

## Features

- Recipe list with pagination
- Recipe detail view
- User profile view
- History-based navigation
- aync pipe used

## Requirements

Make sure you have installed:

- Node.js (latest LTS version recommended)
- npm (comes with Node)
- Angular CLI (v18+)

## Installation

Check versions:

```bash
node -v
npm -v
ng version
```

Clone the repository:
```bash
git clone https://github.com/JanisTauteDev/Recipe-App
```

Navigate into the project folder (if needed):

```bash
cd recipe-app
```

Install npm dependencies:

```bash
npm install
```

Start the deployment server (**recommended**):

```bash
npm start
```

Alternatively: install Angular CLI globally:

```bash
npm install -g @angular/cli
```

And start the deployment Server with:

```bash
ng serve
```

now open the link that gets displayed in the terminal after npm start or ng serve with your browser:

http://localhost:4200

This application should run locally without errors.

## API

Data is fetched from:
- https://dummyjson.com/recipes
- https://dummyjson.com/users

## Possible Improvements

- Improve/evaluate caching
- More responsive/interactive
- Markdown Menu for Language Support
- Rating System for Recipes
- fix: ensure consistent card sizing on recipe list when not in fullscreen