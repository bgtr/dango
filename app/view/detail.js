define('view/detail', [
    'lungo',
    'Backbone',
    'collection/blogs',
    'util/cache',
    'util/translator'
], function (lungo, Backbone, Blogs, cache, Translator) {

    var viewDetail = new function() {

        var view = this;

        view.initialize = function() {
            lungo.dom('#detail').on('load', function(event){

            });
        }

        view.loadHandler = function(e){

            var blog = cache.blogs.get((e.target.id).replace("detail_1_", "")).toJSON();

//            lungo.dom("#" + e.target.id).title();
            Lungo.View.Article.title(blog.en.title);

            var translator = new Translator();

            $(lungo.dom("#" + e.target.id + " header nav a.button")).on('tap', function(e){
                if ($(e.target).text().indexOf("▶", 0) >= 0) {
                    translator.play(blog.en.body);
                    $(e.target).text(" ‖ ");
                } else {
                    translator.pause();
                    $(e.target).text(" ▶ ");
                }
            });

        }

        return view;
    }

    return viewDetail;
});
