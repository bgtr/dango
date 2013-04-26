define('model/blog', ['Backbone'], function (Backbone) {

    var Blog = Backbone.Model.extend({

        defaults: {
            id: 0
        },

        initialize: function (attrs, options) {
        },

        validate: function (attrs) {
        }
    });

    return Blog;
});