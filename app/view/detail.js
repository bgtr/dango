define('view/detail', [
    'lungo',
    'Backbone',
    'collection/blogs',
    'util/cache'
], function (lungo, Backbone, Blogs, cache) {

    var viewDetail = new function() {

        var view = this;

        view.initialize = function() {
            blogs = new Blogs();
            blogs.add([{id:1, body:"あああああああああああああ"},
                {id:2, body:"いいいいいいいいいいいいいいいいいいい"}]);

            lungo.dom('#detail').on('load', function(event){

            });
        }

        view.loadHandler = function(e){
            lung.dom($(e.target).id).title("aa");
        }

        return view;
    }

    return viewDetail;
});
