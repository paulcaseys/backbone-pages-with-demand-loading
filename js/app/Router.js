
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
            App.Models.PageStateModel.showView(App.Views.HomePageView);
        },
        getGallery: function(){
            console.log('route: gallery');
            App.Models.PageStateModel.showView(App.Views.GalleryPageView);
        },
        getHelp: function(id){
            console.log('route: help '+ id );
            App.Models.PageStateModel.showView(App.Views.HelpPageView);
            // tels the panel to display correctly
            App.Models.HelpPanelsStateModel.showView(App.Views["HelpPanelView"+id]);

            // selects a menu item
            $("#submenu a").removeClass('active');
            $("#submenu a.menu-item-"+id).addClass('active');
            
        },
        getExample: function(){
            console.log('route: example');
            App.Models.PageStateModel.showView(App.Views.ExamplePageView);
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