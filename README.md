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
- History-based navigation (Location API)
- aync pipe used

## Requirements

Make sure you have installed:

- Node.js (v18 or newer recommended)
- npm (comes with Node)
- Angular CLI (v18+)

Check versions:

```bash
node -v
npm -v
ng version
```

Install npm dependencies:

```bash
npm install
```

If Angular CLI is not installed:

```bash
npm install @angular/cli
```

Clone the repository:
```bash
git clone https://github.com/JanisTauteDev/Recipe-App
```
Navigate into the project folder (if needed):

```bash
cd recipe-app
```

Start the deployment server:

```bash
ng serve
```
Open your browser:

http://localhost:4200

This application should run locally without errors

## API
Data is fetched from:
- https://dummyjson.com/recipes
- https://dummyjson.com/users

## Possible Improvements
- Caching Layer for images (when the browser isn't in fullscreen)
- more responsive