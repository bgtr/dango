define('view/main', [
    'lungo',
    'jquery',
    'underscore',
    'Backbone',
    'mustache',
    'collection/blogs',
    'text!template/main.article.html',
    'text!template/detail.html',
    'view/detail',
    'util/cache'
], function (lungo, $, _, Backbone, mustache, Blogs, mainArticleTmpl, detailArticleTmpl, viewDetail, cache) {

    var viewMain = new function() {

        var view = this;

        view.initialize = function() {

            var loading = function () {
                $(lungo.dom('#main-article')).html('<div class="loading black"><span class="top"></span><span class="right"></span><span class="bottom"></span><span class="left"></span></div>');
            }

            var render = function() {
                var output = mustache.render(mainArticleTmpl, {blogs:blogs.toJSON()});
                $(lungo.dom('#main-article')).html(output);

                blogs.each(function(blog){
                    var output = mustache.render(detailArticleTmpl, blog.toJSON());
                    $("body").append(output);

                    lungo.dom("#detail_1_" + blog.id).on('load', function(e){
                        viewDetail.loadHandler(e);
                    });
                });

                cache.blogs = blogs;
            }

            var update = function() {

                $.get("http://meatcamp.dip.jp/api", function(json){

                    console.log(json);
                    for (var i = 0; i < json.length; i++) {
                        json[i].id = _.uniqueId('blog_');
                        blogs.add(json[i]);
                    }

                    render();

                    lungo.Data.Storage.persistent("blogs", blogs);

                }, "json");

            }

            var blogs = lungo.Data.Storage.persistent("blogs");

            if (blogs == null) {
                blogs = new Blogs();
                loading();
                update();
            } else {
                blogs = (new Blogs()).add(blogs);
                render();
            }

            $("#refresh").on('tap', function(e){
                loading();
                update();
                console.log('refresh');
            });

 /*
            blogs = new Blogs();
            blogs.add([
                {
                    "id": _.uniqueId('blog_'),
                    "en": {
                        title: "title 1",
                        body: "Disrupt is two days away… and we’ve put together an array of awesomeness with our partners to make your event experience better. "
                        +"Our conference app: We’ve done a little pivot with our app for Disrupt NY. We’ve invited Pathable to be our partner this year. This web app brings a whole new universe of networking capabilities to the Disrupt community. For starters, it’s plugged right into Eventbrite. Once you’ve registered for the event, you’ll get a neat little invitation to join the Disrupt community."
                        +"After you’re signed up, you’ll be able to see who is attending the conference, message other attendees, schedule meetings in our 1-1 meeting rooms, participate in conference discussions, view the agenda, receive updates instantaneously regarding the conference, and check out a list of sponsors. You can find the web app here. And the great thing is, you can access the community after the conference. So, if you can’t find that business card that will change your life, you can just log in to the app and search for the attendee."
                    },
                    "ja_JP": {
                        title: "タイトル1",
                        body:"日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 " +
                            "日本語記事 "
                    }
                },
                {
                    "id": _.uniqueId('blog_'),
                    "en": {
                        title: "title 2",
                        body: "english content 2"
                    },
                    "ja_JP": {
                        title: "タイトル2",
                        body:"日本語記事2"
                    }
                },
                {
                    "id": _.uniqueId('blog_'),
                    "en": {
                        title: "title 3",
                        body: "english content 3"
                    },
                    "ja_JP": {
                        title: "タイトル3",
                        body:"日本語記事3"
                    }
                },
                {
                    "id": _.uniqueId('blog_'),
                    "en": {
                        title: "title 4",
                        body: "english content 4"
                    },
                    "ja_JP": {
                        title: "タイトル4",
                        body:"日本語記事4"
                    }
                },
                {
                    "id": _.uniqueId('blog_'),
                    "en": {
                        title: "title 5",
                        body: "english content 5"
                    },
                    "ja_JP": {
                        title: "タイトル5",
                        body:"日本語記事5"
                    }
                }
            ]);
  */

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
