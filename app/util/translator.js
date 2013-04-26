define('util/translator', [], function () {

    var translator = new function(){
            var translator = this;

            translator.voice = undefined;
            translator.endTime = 0;

            translator.play = function(text) {
                var query = "http://tts-api.com/tts.mp3?q=" + text.replace(" ", "+");
//                var query = "http://tts-api.com/tts.mp3?q" + encodeURI("So, if you can’t find that business card that will change your");
                translator.voice = new Audio(query);
//                translator.voice.play();
                if (translator.endTime > 0) {
                    translator.voice.currentTime = translator.endTime;
                }
                translator.voice.seekable.start();
            }

            translator.pause = function() {
//                translator.voice.pause();
                translator.endTime = translator.voice.seekable.end();
            }
        };

    return translator;
});