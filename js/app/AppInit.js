
/**
 * Filename: js/app/AppInit
 *
 * initialises the views
 * 
 */
// 


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone',

  // required app router
  'App.Router',

  // required models
  'App.Models.StateModel',

  // required views
  'App.Views.HomePageView',
  'App.Views.GalleryPageView',
  'App.Views.HelpPageView',
  'App.Views.ExamplePageView'



// require js: defines the 
], function($, _, Backbone, Router, StateModel, HomePageView, GalleryPageView, HelpPageView, ExamplePageView){


    

    // initialises various  app views
    var initialize = function(){

      // initialises the state controller
      App.Models.StateModel = new StateModel;

      // initialises the views onto the page
      App.Views.HomePageView = new HomePageView;
      App.Views.GalleryPageView = new GalleryPageView;
      App.Views.HelpPageView = new HelpPageView;
      App.Views.ExamplePageView = new ExamplePageView;

      // initialises the router
      Router.initialize();

      // calls eventlisteners in the view, as an example
      App.Views.HomePageView.trigger("testCall");
      App.Views.GalleryPageView.trigger("testCall");
      App.Views.HelpPageView.trigger("testCall");
      App.Views.ExamplePageView.trigger("testCall");

      

    };
  

    

    // require js: defines function/s to be accessed by require js
    return {
      initialize: initialize
    };


});
