/**
 * ref: https://www.tutorialspoint.com/backbonejs/index.htm
 * BackboneJS is a light weight JavaScript library that allows to develop and structure client side applications 
 * that run in a web browser. It offers MVC framework which abstracts 
 * data into models, DOM (Document Object Model) into views 
 * and bind these two using events.
 * BackboneJS was developed by Jeremy Ashkenas and was initially released on October 13th, 2010 
 * It manages the data model which includes the user data and displays that data at the server side with the same 
 * format written at the client side. 
 * BackboneJS has a soft dependency with jQuery and a hard dependency with Underscore.js.
 */
------- functions.php
//exclusive scripts
//wp_enqueue_script( 'jquery', '', '', '1.0', true); 
wp_enqueue_script( 'underscore', '', array('jquery'), '1.8.3', true ); 
wp_enqueue_script( 'backbone', '', array('underscore'), '1.2.3', true );
wp_enqueue_script( 'customjs', get_theme_file_uri( '/assets/js/customscript.js' ), array('backbone'), '0.1', true ); 
wp_enqueue_script( 'customjs', get_theme_file_uri( '/assets/js/customscript.js' ), array('jquery', 'underscore', 'backbone'), '0.1', true ); 

------- customscript.js
/**
 * backbone script file
 * backbone version 1.2.3 
 */
jQuery(document).ready(function($){ alert('this'); });
(function( $ ) {
    "use strict";  
    // javascript code here. i.e.: $(document).ready( function(){} ); 
})(jQuery);
var AppView = Backbone.View.extend ({
   // el - stands for element. Every view has an element associated with HTML content, will be rendered. 
   el: '#content',
            
   // It's the first function called when this view is instantiated.
   initialize: function() {
     this.render(); 
   },
            
   // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content.
            
   //Like the Hello TutorialsPoint in this case.
   render: function() {
     //this.$el.html("Hello TutorialsPoint!!!");
     this.$el.append("Hello TutorialsPoint!!!");
   }
});
var appView = new AppView();
 
