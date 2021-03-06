// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    //this.render();

    this.collection.on('add', function(song){
      song.save();
      this.render(); 
    } , this);

    this.collection.on('remove', function(){
    this.render(); 
    } , this);

  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<caption>Queue</caption>').append('<th class="artist header">Artist</th><th class="title header">Title</th><th class="playCount header">Play Count</th>')
    .append(this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
