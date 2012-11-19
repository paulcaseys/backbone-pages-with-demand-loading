
/**
 * Filename: js/app/AppConfig
 *
 * defines the app paths and initialises the app
 * 
 */
// 

// APP STRUCTURE
// defines the app structure
var App = {};
App.Views = {};
App.Models = {};
App.Data = {};


// DATA SERVICES
// define data service paths
App.Data.GalleryData = 'data/GalleryData.json' + '?ver=' + ((new Date()).getTime());


// CONSOLE FIX
// Avoid `console` errors in browsers that lack a console (from html5 boilerplate)
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



// APP CONFIG
requirejs.config({

	// defines paths that are used across the app
	paths: {

		// paths to common libraries
		'jquery': 		'js/libs/jquery/jquery-min',
		'backbone': 	'js/libs/backbone/backbone-min',
		'underscore': 	'js/libs/underscore/underscore-min',
		'json': 		'js/libs/json2/json2',

		// jquery easing
		'jquery.easing': 'js/libs/jquery/jquery.easing',

		// kendo 
		'kendo.console': 	'js/libs/kendo/console',
		'kendo.dataviz': 	'js/libs/kendo/kendo.dataviz.min',

		// raphael 
		'raphael': 	'js/libs/raphael/raphael.min',

		// waypoints (scrolling)
		'waypoints': 	'js/libs/waypoints/waypoints.min',

		// fixie (lorem ipsum generator)
		'fixie': 	'js/libs/fixie/fixie.min',

		// modernizr (html5 conditional and tag correction)
		'modernizr': 	'js/libs/modernizr/modernizr.min',
		
		// paths to app initialiser
		'AppInit': 								'js/app/AppInit',

		// paths to app router (routes hash URIs)
		'App.Router': 						'js/app/Router',

		// paths to the config model (for constants)
		'App.Models.ConfigModel': 			'js/app/models/ConfigModel',

		// paths to state PAGE/PANEL model (tells which state to transition to)
		'App.Models.StateModel': 			'js/app/models/StateModel',

		// paths to state MENU model (tells which menu item to select)
		'App.Models.StateMenuModel': 			'js/app/models/StateMenuModel',

		// paths to views
		'App.Views.HomePageView': 			'js/app/views/HomePageView',
		'App.Views.GalleryPageView': 		'js/app/views/GalleryPageView',
		'App.Views.HelpPageView': 			'js/app/views/HelpPageView',
		'App.Views.HelpPanelView': 			'js/app/views/HelpPanelView',
		'App.Views.DatavisPageView': 		'js/app/views/DatavisPageView',
		'App.Views.RaphaelPageView': 		'js/app/views/RaphaelPageView',
		'App.Views.ParallaxPageView': 		'js/app/views/ParallaxPageView',
		'App.Views.ExamplePageView': 		'js/app/views/ExamplePageView',

		// paths to collections
		//'App.Collections.ExampleCollection': 	'js/app/collections/ExampleCollection',

		// paths to models
		//'App.Models.ExampleModel': 			'js/app/models/ExampleModel'
		'App.Models.GalleryModel': 			'js/app/models/GalleryModel'

	},

	// dependancies for certain javascript files
	shim: {
    'underscore': {
    	exports: '_'
    },
    'backbone': {
    	deps: ["underscore", "jquery"],
    	exports: "Backbone"
    },
    'kendo.console': {
    	deps: ["jquery"]
    },
    'kendo.dataviz': {
    	deps: ["jquery", "kendo.console"]
    },
    'waypoints': {
    	deps: ["jquery"]
    },
    'modernizr': {
    	deps: ["jquery"]
    },
    'jquery.easing': {
    	deps: ["jquery"]
    },
    'raphael': {
    	deps: ["jquery"],
    	exports: "raphael"
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