# Minimal React Starter

A basic starter kit for React web applications that gets out of your way.

## Technologies

|  | Target Audience | Notes
|---|---|---|
| Javascript | Intermediate | If you aren't comfortable with Javascript you may want to start with something simpler than a bundled ES6 React app (bleeding edge tech). |
| ES2015/ES6 | Beginner | ES6 is immensely more powerful, it is worth migrating to in all of your apps.  This application maintains a consistent, verbose syntax to aid in the migration process which is still ongoing for most people.  |
| React | Beginner | ES6 class-based components. Includes [react-a11y](https://github.com/rackt/react-a11y) helper library because I don't discriminate and neither should you. |
| Webpack | Beginner | Verbose, consistent feature usage with helpful comments. |

## Project Overview

| Stability | Full Stack | Tests | Deployable
|---|---|---|---|
| **1**\* | No | No | Yes

\* *Stability Legend*

1. **Suitable for learning & hobby projects.  Does not include elaborate production build pipeline.**
2. Suitable for small to mid-sized projects.  Includes reasonable production build tools.
3. Suitable for all projects. Extensive tooling included for large-scale application development and deployment.

## Get Started

```sh
$ git clone https://github.com/tcrosen/minimal-react-starter.git my-new-app
$ cd my-new-app
$ npm install
$ npm start
```

Visit [http://localhost:8080]() to view the site.  

> Tip: While this is running, any changes made to the code will cause Webpack to recompile the application
and reload the browser.

## Workflow Commands

```sh
$ npm start
```

Starts development server in watch mode.

```sh
$ npm run build
```

Builds the application for distribution.

```sh
$ npm run clean
```

Cleans the distribution folder.
