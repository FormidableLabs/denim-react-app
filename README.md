# denim-react-app

ReactJS application starter template for use with [denim](http://github.com/FormidableLabs/denim)

## Features

- Lint: eslint-config-formidable 
- Test: Karma/Mocha/Sinon/Chai/Enzyme
- Hot Reloading
- CSS Modules
- PWA Features (manifest, sw-precache, app icons)
- Polyfills
- React Router v4
- React Helmet
- Babel (`stage-0, react, 2015, constant-elements`)
- Webpack 2
  - `System.import` code splitting
  - Loaders: `babel, css, style, postcss, json, file, url`

## Usage

- If not already installed, install `denim` (`npm install -g denim`)
- From your command line, run `denim denim-react-app`
- `cd` into your created app directory
- Run `yarn` or `npm install`
- Run `npm run dev` and open `localhost:3000` to view your running application

## Scripts

- `npm run build` - Builds a production version of your application
- `npm run dev` - Starts your development server
- `npm run lint` - Eslint checks your code 
- `npm run prod` - Starts your production server, serves your build folder
- `npm run test` - Runs Mocha tests & coverage