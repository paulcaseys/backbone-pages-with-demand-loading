
/**
 * Filename: js/app/AppConfig
 *
 * defines the app paths and initialises the app
 * 
 */
// 

// defines the app structure
var App = {};
App.Views = {};
App.Models = {};

// IE fix for console logs
if (!window.console) console = {log: function() {}};



requirejs.config({

	// defines paths that are used across the app
	paths: {

		// paths to common libraries
		'jquery': 		'js/libs/jquery/jquery-min',
		'backbone': 	'js/libs/backbone/backbone-min',
		'underscore': 	'js/libs/underscore/underscore-min',


		// paths to app initialiser
		'AppInit': 								'js/app/AppInit',

		// paths to app router (routes hash URIs)
		'App.Router': 						'js/app/Router',

		// paths to state model (tells which state to transition to)
		'App.Models.StateModel': 			'js/app/models/StateModel',

		// paths to views
		'App.Views.HomePageView': 			'js/app/views/HomePageView',
		'App.Views.GalleryPageView': 		'js/app/views/GalleryPageView',
		'App.Views.HelpPageView': 			'js/app/views/HelpPageView',
		'App.Views.HelpPanelView': 			'js/app/views/HelpPanelView',
		'App.Views.ExamplePageView': 		'js/app/views/ExamplePageView'


		// paths to collections
		//'App.Collections.ExampleCollection': 	'js/app/collections/ExampleCollection',

		// paths to models
		//'App.Models.ExampleModel': 			'js/app/models/ExampleModel'

	},

	// dependancies for certain javascript files
	shim: {
    'underscore': {
    	exports: '_'
    },
    'backbone': {
    	deps: ["underscore", "jquery"],
    	exports: "Backbone"
    }
  },
	

	// the duration that require.js should wait before abandoning the load 
	waitSeconds: 30,

	// prevents caching during development (remove data and time for live app)
	urlArgs: 'ver=5' + ((new Date()).getTime())

});





requirejs([

	// Load our app module and pass it to our definition function
	'AppInit'

	
], function(AppInit){
	// dependencies are now loaded
	
	// initialises app
	AppInit.initialize();


});