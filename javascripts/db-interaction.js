"use strict";

let domBuilder = require('./dom-builder');
let firebase = require('./firebaseConfig');

function pullSongs() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/Songs.json`,
            method: 'GET',
            success: function(data) {
                // console.log('This is the data', data);
                domBuilder.writeMusic(data);
                resolve();
            },
            error: function(obj, textStatus, errorThrown) {
                console.log("ERROR TYPE", textStatus, errorThrown);
            }
        });
    });
}

function pullSong(songId) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/Songs/${songId}.json`,
            method: 'GET',
            success: function(data) {
                console.log('This is the pull data', data);
                resolve(data);
            },
            error: function(obj, textStatus, errorThrown) {
                console.log("ERROR TYPE", textStatus, errorThrown);
            }
        });
    });
}

function addSong(newSong) {
    return new Promise(function(resolve, reject) {

        console.log('newsong', newSong);

        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/Songs.json`,
            method: 'POST',
            data: JSON.stringify(newSong),
            success: function(data) {
                // newSong.id = data;
                pullSongs();
            },
            error: function(obj, textStatus, errorThrown) {
                console.log("ERROR TYPE", textStatus, errorThrown);
            }
        });
    });

}

function editSong(songId, songObj) {
    return new Promise(function(resolve, reject) {
        
        console.log('edit song', songObj);
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/Songs/${songId}.json`,
            method: 'PATCH',
            data: JSON.stringify(songObj),
            success: function(data) {
                console.log("patch return");
                pullSongs();
            },
            error: function(obj, textStatus, errorThrown) {
                reject( textStatus, errorThrown);
            }
        });
    });
}

function deleteSong(songId) {
    return new Promise(function(resolve, reject) {
    
        $.ajax({
                url:`${firebase.getFBsettings().databaseURL}/Songs/${songId}.json`,
                method: 'DELETE',
                error: function(obj, textStatus, errorThrown) {
                    reject( textStatus, errorThrown);
                }
            }).done (function() {
                pullSongs();
                resolve();
                console.log('made it here');
        });
    });
}

function filterSongs(filterKey, filter) {

    let filterURL = `${firebase.getFBsettings().databaseURL}/Songs.json?orderBy="${filterKey}"&equalTo="${filter}"`;

    $.ajax({
        url: filterURL,
        method: 'GET',
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
module.exports = {pullSongs, pullSong, addSong, editSong, deleteSong, filterSongs};
