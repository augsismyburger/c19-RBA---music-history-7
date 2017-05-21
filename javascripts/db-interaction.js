"use strict";

let domBuilder = require('./dom-builder');

function pullSongs() {

    $.ajax({
        url: 'https://rythe-ea30c.firebaseio.com/Songs.json',
        method: 'GET',
        success: function(data) {
            domBuilder.writeMusic(data);
        },
        error: function(obj, textStatus, errorThrown) {
            console.log("ERROR TYPE", textStatus, errorThrown);
        }
    });
}

function addSong() {
    let newSong = domBuilder.getNewSong();
    $.ajax({
        url: 'https://rythe-ea30c.firebaseio.com/Songs.json',
        method: 'POST',
        data: JSON.stringify(newSong),
        success: function(data) {
            domBuilder.writeNewSong(newSong);
        },
        error: function(obj, textStatus, errorThrown) {
            console.log("ERROR TYPE", textStatus, errorThrown);
        }
    });

}
function filterSongs(filterKey, filter) {

    let filterURL = `https://rythe-ea30c.firebaseio.com/Songs.json?orderBy="${filterKey}"&equalTo="${filter}"`;

    $.ajax({
        url: filterURL,
        method: 'Get',
        success: function(data) {
            console.log("filter data", data);
            $('#song-list').html('');
            domBuilder.writeMusic(data);
        },
        error: function(obj, textStatus, errorThrown) {
            console.log("ERROR TYPE", textStatus, errorThrown);
        }
    });
}
module.exports = {pullSongs, addSong, filterSongs};
