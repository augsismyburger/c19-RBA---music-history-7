"use strict";

function writeMusic(data) {
    for (var i in data) {
        console.log("write music data", data[i]);

        $('#song-list').append(`<div class="col s12 m6">
          <div class="card blue-grey">
            <div class="card-content white-text">
              <span class="card-title">${data[i].title}</span>
              <p>Artist: ${data[i].artist}</p><br>
              <p>Album: ${data[i].album}</p><br>
              <p>Genre: ${data[i].genre.toUpperCase()}</p>
            </div>
            <div class="card-action">
              <a id="toDelete">Delete Song</a>
              <a id="editSong">Edit Song</a>
            </div>
          </div>
        </div>`);
    }
}

function writeNewSong(data) {
    $('#song-list').append(`<div class="col s12 m6">
          <div class="card blue-grey">
            <div class="card-content white-text">
              <span class="card-title">${data.title}</span>
              <p>Artist: ${data.artist}</p><br>
              <p>Album: ${data.album}</p><br>
              <p>Genre: ${data.genre.toUpperCase()}</p>
            </div>
            <div class="card-action">
              <a id="toDelete">Delete Song</a>
              <a id="editSong">Edit Song</a>
            </div>
          </div>
        </div>`);
}

function getNewSong() {
    // GRABBING NEW SONGS FROM DOM INPUT
    function MakeMusic(title, artist, album, genre) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.genre = genre;
    }

    let song = new MakeMusic($('#new-song').val(), $('#new-artist').val(), $('#new-album').val(), $('#new-genre').val());

    return song;
}

module.exports = {writeMusic, getNewSong, writeNewSong};
