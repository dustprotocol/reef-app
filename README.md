# Dust-App


## Developer section

When developing add `*` in .eslintignore. Do not forget to remove it before you create a new pull request!

## Developing with @dust-defi/react-lib

For developing the app and lib simultaneously you will need to do certain steps:

1. Fork/Clone [@dust-defi/react-lib](git@github.com:dustprotocol/dust-react-lib.git) besides dust-app project.
2. In `package.json` replace `"@dust-defi/react-components": "v..."` with `"@dust-defi/react-lib": "link:./../dust-react-lib/"`
3. `yarn`
4. `yarn start`

# Steps before Deployment when developing with react-lib * 
Do not forget to publish the lib before app deployment! 
In `package.json` replace `@dust-defi/react-lib` local link with the latest published version!
Install and test Dustapp

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
