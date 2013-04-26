define('view/main.aside', ['lungo', 'Backbone', 'jquery'], function (lungo, Backbone, $) {

    var viewMainAside = new function() {

        var view = this;

        view.initialize = function() {
////            lungo.dom('#top-aside').on('load', function(event){
//                $('#plus').on('tap', function(event){
//                    lungo.Notification.error(
//                        "Oops... Not implement yet.",                  //Title
//                        "Successful operation",     //Description
//                        "check",                    //Icon
//                        1,                          //Time on screen
//                        function(){}          //Callback function
//                    );
//                });
////            });
        }

        return view;
    }

    return viewMainAside;
});