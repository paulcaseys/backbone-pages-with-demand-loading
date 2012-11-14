A Backbone.js base
==================================================

Using common PureMVC and Gaia framework conventions. A good starting point for backbone.js projects.

* Most of the functionality is in `js/app`
* Third-party libraries are in `js/libs`
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

Create a new state instance by: `App.Models.PageStateModel = new StateModel;`

Change the view of this instance can be done by `App.Models.PageStateModel.showView(App.Views.HomePageView);`

You can make as many state instances as you like, so this model can be used to control the state of smaller panels inside a view. 


## Views and how they are controlled

For example, the `HelpPageView` contains 3x panels

		// creates three panel views
		App.Views.HelpPanelView1 = new HelpPanelView({el: '#help-panel-1'});
		App.Views.HelpPanelView2 = new HelpPanelView({el: '#help-panel-2'});
		App.Views.HelpPanelView3 = new HelpPanelView({el: '#help-panel-3'});

And I create a StateModel, to define the state 

		// initialises the state model/controller
		App.Models.HelpPanelsStateModel = new StateModel;

Then I can control the state in the Router.js

        // defines which panel to display 
        App.Models.HelpPanelsStateModel.showView(App.Views["HelpPanelView"+id]);



## Views: consistant transitionIn transitionOut

Each View has a `transitionIn()` and `transitionOut()` method

`transitionIn()` displays the page: this is automatically called by the state model when the state is updated
`transitionOut()` hides the page that was previously displayed: this is automatically called by the state model when the state is updated

We can add much nicer transitions. i am just using show() and hide() for the moment, but a 'transition' could be scrolling from one part of the page to another, it could be fading, or sliding, or whatever. It is VERY flexible.


## Previewing the app

You need to run Chrome with the `--disable-web-security` argument to stop it blocking cross-origin requests. On a Mac, run:

    open -a 'Google Chrome' --args --disable-web-security