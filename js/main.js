/* global data */
/* exported data */
var photo = document.querySelector('.image');
var pUrl = document.querySelector('.photo-url');
pUrl.addEventListener('input', function (event) {
  photo.src = event.target.value;
});

var formSelector = document.querySelector('.main-form');
formSelector.addEventListener('submit', function (event) {
  event.preventDefault();
  var values = {
    title: formSelector.elements.title.value,
    url: formSelector.elements.url.value,
    textbox: formSelector.elements.notes.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(values);
  photo.src = './images/placeholder-image-square.jpg';
  formSelector.reset();

});
