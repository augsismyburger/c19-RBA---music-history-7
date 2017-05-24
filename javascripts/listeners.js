"use strict";

let db = require('./db-interaction');
let domBuilder = require('./dom-builder');

let filter = "";
let filterKey;
let options;
let songId;
let songObj;

function addListeners() {
    $(document).on('click', '.filterKeySelect', function(event) {
        console.log("value", event.target.innerText);
        $('#sortByText').html(event.target.innerText);
        fillSelect(event.target.innerText);
    });
    $(document).on('keyup', '#search', function(event) {
        filter = event.currentTarget.value;
        console.log("filter", filter);
         if (event.keyCode === 13) {
                db.filterSongs(filterKey, filter);
            }
    });
    $(document).on('click', '.editSong', function() {
        songId = event.target.attributes[1].value;
        db.pullSong(songId).then (
        domBuilder.fillForm
        );

        $(document).on('click', '.editSongSubmit', function() {
            let songObj = domBuilder.getEditSong();
            // console.log(songId, songObj);
            db.editSong(songId, songObj);
        });
    });
    $(document).on('click', '.songDelete', function(event) {
        songId = event.target.attributes[1].value;
        db.deleteSong(songId);
    });
    $(document).on('click', '.new-song-button', function() {
        let newSong = domBuilder.getNewSong();
        db.addSong(newSong);
    });
}

function fillSelect(selectData) {
    console.log("data working", selectData);
    switch (selectData) {
        case 'Artist' :
            filterKey = 'artist';
            console.log("filterkey", filterKey);
            break;
        case 'Album' :
            filterKey = 'album';
            console.log("filterkey", filterKey);
            break;
        case 'Genre' :
            filterKey = 'genre';
            console.log("filterkey", filterKey);
            break;

    }
}

module.exports = {addListeners, filterKey, filter};
