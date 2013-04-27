define('util/translator', [], function () {

    var translator = function(){
            var translator = this;

            translator.voice = undefined;
            translator.endTime = 0;

            translator.play = function(text) {
                if (translator.voice == undefined) {
                    String.prototype.replaceAll = function (org, dest){
                        return this.split(org).join(dest);
                    }
                    var query = "http://tts-api.com/tts.mp3?q=" + text.replaceAll(" ", "+");
                    translator.voice = new Audio(query);
                }
                translator.voice.play();
            }

            translator.pause = function() {
                translator.voice.pause();
            }
        };

    return translator;
});