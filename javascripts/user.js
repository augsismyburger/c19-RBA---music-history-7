"use strict";

let db = require('./db-interaction');

let filter = "";
let filterKey;
let options;

function addListeners() {
    $('.filterKeySelect').click(function(event) {
        console.log("value", event.target.innerText);
        $('#sortByText').html(event.target.innerText);
        fillSelect(event.target.innerText);
    });
    $('#search').on('keyup', function(event) {
        filter = event.currentTarget.value;
        console.log("filter", filter);
         if (event.keyCode === 13) {
                db.filterSongs(filterKey, filter);
            }
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
