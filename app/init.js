requirejs.config({
    paths: {
        jquery: '../components/jquery/jquery-1.9.1.min',
        underscore: '../components/underscorejs/underscore-1.4.4.min',
        Backbone: '../components/backbonejs/backbone-1.0.0.min',
        lungo: '../components/lungo/lungo',
        mustache: '../components/mustache/mustache',
        text: '../components/requirejs/text'
    },
    shim: {
        underscore : {
            exports: "_"
        },
        jquery : {
            exports: "$"
        },
        Backbone : {
            deps: ['underscore', 'jquery'],
            exports: "Backbone"
        },
        lungo : {
            exports: "Lungo"
        }
    }
});



requirejs([
    'lungo',
    'jquery',
    'Backbone',
    'util/cache',
    'view/main',
    'view/main.aside',
    'view/detail'
], function (Lungo, $, Backbone, cache,
             viewMain, viewMainAside, viewDetail) {

    /*
     * # Hacks #
     * LungoのRouterには、引数渡し機能がないので、
     * パラメータをキャッシュに保存する
     * http://localhost/index.html#top/hoge/aaa/fuga/bbb
     * → #topに遷移し、パラメータ{hoge : "aaa", fuga : "bbb"}がcacheに保存される
     */
    /*
    $(window).on('hashchange', function(event){
        //event.preventDefault();
        try {
            var query = location.hash.split("/");
            if (query.length == 1) {
                Lungo.Router.section
                return true;
            }

            var params = {};
            for (var i = 1; i < query.length; i++)
                if (i % 2 == 0)
                    params[query[i-1]] = query[i];

            cache['params'] = params;

            location.hash = query[0];
        } catch (e) {

        }
    });
    */
    $(document).delegate("a", "tap", function(e){
        try {
            var dataset = $(e.currentTarget).data();
            cache.params = dataset.params;
        } catch (e) {

        }
    });

    /*
    * Lungoの初期化
    */
    Lungo.init({
        name: 'Everyday English',
        version: "0.0.1",
        resources: [
            // template
            'app/template/main.html',
            'app/template/main.aside.html'
        ]
    });

    /*
     * Viewの初期化
     */
    viewMain.initialize();
    viewMainAside.initialize();
    viewDetail.initialize();

});

