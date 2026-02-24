## Recipe App (Angular 18+)

A small Single Page Application built with Angular 18+ using the DummyJSON REST API.

The application demonstrates modern Angular architecture with standalone components, RxJS Observables, routing, pagination via query parameters, and clean separation of concerns.

## Tech Stack

- Angular 18+
- Standalone Components (no NgModules)
- RxJS (Observables)
- Angular Router
- Angular HttpClient
- TypeScript
- Bulma CSS
- DummyJSON REST API

## Features

- Recipe list with server-side pagination
- Pagination state persisted via query parameters (`?skip=`)
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
If Angular CLI is not installed:

```bash
npm install -g @angular/cli
```
Navigate into the project folder:

```bash
cd recipe-app
```
Install dependencies:

```bash
npm install
```
Start the deployment server:

```bash
ng serve
```
Open your browser:

[http://localhost:4200]

This application should run locally without errors

## API
Data is fetched from:
- [https://dummyjson.com/recipes]
- [https://dummyjson.com/users]