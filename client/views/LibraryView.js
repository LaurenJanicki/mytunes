// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.$el.addClass('library')
    this.render();

    this.collection.on('change', function(){
      this.render();
    }, this)
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<caption>Library</caption>').append('<th class="artist header">Artist</th><th class="title header">Title</th><th class="playCount header">Play Count</th>')
    .append(this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
