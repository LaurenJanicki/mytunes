// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on("add", function(song){ 
      if(this.length === 1){
         this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.shift();
      if (this.length > 0){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song);
    } , this);
  },

  playFirst: function(){
      var firstSong = this.at(0);
      firstSong.play();
  }

});
