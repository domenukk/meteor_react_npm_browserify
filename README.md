This is a basic package assembled by domenukk.

It sports:
* meteor
* react
* react-material-ui
* user accounts
* a react component to scroll to places
* leaflet maps including a nifty sleep component (this is there to show how npm works)
* tapi18n translations (reactive and for react)
* moment.js via npm
* full support for npm including browserify client-side npm

__structure__

Our project uses Meteor and React.
Meteor is a platform combining server and client with modern web technologies.
Changes are automatically pushed to clients using websockets (dpd protocol)
The reactive changes are then applied to react, the frontend library, automatically.
The whole codebase uses javascript es6 or jsx, React es6-javascript files containing templates.

* `client`: only deployed on the client.
* `public`: Avaliable from the outside.
* `both` and `lib`: Avaliable on server and client likewise. Stuff in Lib is loaded first.
* `i18n`: contains the internationalization jsons. They can be used with the TAP or T React Tag.
* `packages` and `.meteor`: internal stuff. Ignore for now.
* `.meteor/packages`: contains meteor (athmosphere) packages to be installed
* `packages.json`: contains the npm packages that should be installed. 
* `client/lib/app.browserify.js`: inside _Deps, require everything you need to have loaded that was installed using npm. (Meteor stuff is avaliable automatically.)
* `client/styles`: Contains styles as scss and jsx files.
* `client/layouts`: Base app layouts
* `client/components`: Everything needed to render the app, minus the layouts
* `client/subscriptions.jsx`: Global subscriptons the client uses
* `server/methods.js`: The methods a client can all, exposed by to the clients.
* `server/publications.js`: Publications of the database (like reactive views) a client can subscribe to