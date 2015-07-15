// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on("add", function(song){
     if (this.length === 1) {
         console.log("Playing first song...");
         this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    var firstSong = this.at(0);
    firstSong.play();
  }

});
