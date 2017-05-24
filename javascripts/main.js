"use strict";

let db = require('./db-interaction');
let list = require('./listeners');

$(document).ready(function(){
    $('#modal1').modal();
  });

db.pullSongs().then(
  list.addListeners()
);

