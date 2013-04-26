define('view/main', [
    'lungo',
    'Backbone',
    'mustache',
    'collection/blogs',
    'text!template/main.article.html',
    'text!template/detail.html',
    'view/detail'
], function (lungo, Backbone, mustache, Blogs, mainArticleTmpl, detailArticleTmpl, viewDetail) {

    var viewMain = new function() {

        var view = this;

        view.initialize = function() {
            blogs = new Blogs();
            blogs.add([{id:1, body:"あああああああああああああ"},
                {id:2, body:"いいいいいいいいいいいいいいいいいいい"}]);

                var output = mustache.render(mainArticleTmpl, {blogs:blogs.toJSON()});
                $(lungo.dom('#main-article')).html(output);

            blogs.each(function(blog){
                var output = mustache.render(detailArticleTmpl, blog.toJSON());
                $("body").append(output);

                $(output).on('load', function(e){viewDetail.loadHandler(e);});
            });

            lungo.dom('#main-article').on('doubletap', function(event){
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

    return viewMain;
});
