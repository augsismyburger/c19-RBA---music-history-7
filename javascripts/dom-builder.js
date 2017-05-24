"use strict";



function writeMusic(data) {
    let keyArray = Object.keys(data);
    let counter = 0;
    $('#song-list').html('');

    for (var i in data) {
    // console.log("keyArray", keyArray[i]);
        $('#song-list').append(`<div class="col s12 m6 z-depth-3">
          <div class="card purple darken-4">
            <div class="card-content white-text">
              <span class="card-title">${data[i].title}</span>
              <p>Artist: ${data[i].artist}</p><br>
              <p>Album: ${data[i].album}</p><br>
              <p>Genre: ${data[i].genre.toUpperCase()}</p>
            </div>
            <div class="card-action">
              <a href="#editModal" keyId="${keyArray[counter]}" class="editSong waves-effect waves-light btn black white-text">Edit Song</a>
              <a href="#" keyId="${keyArray[counter]}" class="songDelete waves-effect waves-light btn black white-text">Delete Song</a>
            </div>
          </div>
        </div>`);
        data[i].id = keyArray[counter];
        counter ++;
    }
    $('#editModal').modal();
}

 function MakeMusic(title, artist, album, genre) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.genre = genre;
    }


function getNewSong() {
    // GRABBING NEW SONGS FROM DOM INPUT
   
    let song = new MakeMusic($('.add-song').val(), $('.add-artist').val(), $('.add-album').val(), $('.add-genre').val());

    $('.add-song').val("");
    $('.add-artist').val("");
    $('.add-album').val("");
    $('.add-genre').val("");
    return song;
}

function getEditSong(data) {
    // GRABBING NEW SONGS FROM DOM INPUT
    let song = new MakeMusic($('.git-song').val(), $('.git-artist').val(), $('.git-album').val(), $('.git-genre').val());
    console.log('this is the edited song', song);

    return song;
}

function fillForm(data) {
  console.log('fillform', data);
    $('.git-song').val(data.title);
    $('.git-artist').val(data.artist);
    $('.git-album').val(data.album);
    $('.git-genre').val(data.genre);
}

module.exports = {writeMusic, getNewSong, getEditSong, fillForm};

