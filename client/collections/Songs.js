// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  
  localStorage: new Backbone.LocalStorage('song-storage'),

  fetch: function(options) {
      // check if localStorage for this collection exists
      var self = this;
      if(!localStorage.getItem("song-storage")) {
        $.each(songData, function(i, item) {
            self.create(item);  // saves model to local storage
        });

      } else {
          // call original fetch method
          return Backbone.Collection.prototype.fetch.call(this, options);
      }        
  },

  model: SongModel

  


  // initialize: function() {
  //   this.fetch();
  // }

});