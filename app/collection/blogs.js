define('collection/blogs', ['Backbone', 'model/blog'], function (Backbone, blog) {
    console.log(Backbone.Collection.extend({model: blog}));
    var Blogs = Backbone.Collection.extend({
        model: blog
    });

    return Blogs;
});