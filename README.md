A Backbone.js base
==================================================

Using common PureMVC and Gaia framework conventions. A good starting point for backbone.js projects.

* Most functionality is in `js/app`
* Libraries are in `js/libs`
* Entrypoint is `index.html`

## Script overview

`js/libs/require/require.js`
require.js is loaded first. It is a JavaScript file loader library. More information: http://requirejs.org/

`js/app/AppConfig.js`
Configures the backbone app, then loads AppInit.js

`js/app/AppInit.js`
Where the views and router are initialised

`js/app/Router.js`
Where the '#hash' URIs are routed 

`js/app/models/StateModel.js`
This model defines the state of views. 

Create a new state instance by: `App.Models.StateModel = new StateModel;`

Change the view of this instance can be done by `App.Models.StateModel.showView(App.Views.HomePageView);`

You can make as many state instances as you like, so this model can be used to control the state of small panels inside a view.


## Previewing the app

You need to run Chrome with the `--disable-web-security` argument to stop it blocking cross-origin requests. On a Mac, run:

    open -a 'Google Chrome' --args --disable-web-security