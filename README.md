# my-recipe-app

The application must:
have a restful api using crud action &#x2611
Be tested to a minimum of 40%
Have a .env file for storing username and passwords &#x2611
Be documented (readme including a how to use section) &#x2611

The application should:
Be able to fetch and present a recipe
Enter a new recipe
Update a recipe
Delete a recipe
Be nicely styled

The application could:
Have a react front end &#x2611

## Instructions to start
create a `.env` file

Install dependencies - `npm install`

Download Postgres

Install Knex globaly - `npm install knex -g`

Create two local Postgres databases - `recipes` and `recipes_test`

in the dotenv file add your:
DB_HOST
DB_USER
DB_PASS

Migrate - `knex migrate:latest --env development`

Seed - `knex seed:run --env development`

run `node server.js`

then in a new terminal run `npm start`

## Rorie 
### What I/we have learned
how to remove migration files with pg
### What challenges I/we overcame
having duplicate migrations
### What I/we struggled with
knex safly deleting migration file
### What I/we would do differently next time


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
