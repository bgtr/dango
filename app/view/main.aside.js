define('view/main.aside', ['lungo', 'Backbone'], function (lungo, Backbone) {

    var viewMainAside = new function() {

        var view = this;

        view.initialize = function() {
            lungo.dom('#second-article').on('load', function(event){
                lungo.Notification.success(
                    "Success",                  //Title
                    "Successful operation",     //Description
                    "check",                    //Icon
                    1,                          //Time on screen
                    function(){}          //Callback function
                );
            });
        }

        return view;
    }

    return viewMainAside;
});