
/**
 * Filename: js/app/router
 *
 * routes uris and logs a history
 * 
 */
// 


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone'

  // required views
  //'App.Views.TodoPageView',
  //'App.Views.ExamplePageView'



// require js: defines the 
], function($, _, Backbone){

    var AppRouter = Backbone.Router.extend({
        routes: {
            "gallery/": "getGallery",
            "help/:id": "getHelp",
            "example/": "getExample",
            "*actions": "defaultRoute" // Backbone will try match the route above first
        },



        defaultRoute: function(){
            console.log('route: home');
            App.Models.StateModel.showView(App.Views.HomePageView);
        },
        getGallery: function(){
            console.log('route: gallery');
            App.Models.StateModel.showView(App.Views.GalleryPageView);
        },
        getHelp: function(id){
            console.log('route: help '+ id );
            App.Models.StateModel.showView(App.Views.HelpPageView);
        },
        getExample: function(){
            console.log('route: example');
            App.Models.StateModel.showView(App.Views.ExamplePageView);
        }


    });



  
    


    var initialize = function(){

        // Instantiate the router
        var app_router = new AppRouter;

        // Start Backbone history a necessary step for bookmarkable URL's
        Backbone.history.start();
    };

    // require js: defines function/s to be accessed by require js
    return {
      initialize: initialize
    };


});