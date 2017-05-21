"use strict";

let db = require('./db-interaction');
let list = require('./user');

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
  });

db.pullSongs();
$('#new-song-button').click(db.addSong);
list.addListeners();

