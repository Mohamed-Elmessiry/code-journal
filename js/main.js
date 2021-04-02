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

function idNum(data) {
  var count = 0;
  for (var i = 0; i < data.entries.length; i++) {
    count = data.entries[i].entryId++;

  }
  return count;
}

function addEntry(entry) {

  var divOne = document.createElement('div');
  divOne.setAttribute('class', 'dummy-row');
  divOne.setAttribute('data-entry-id', idNum(data));
  var divImage = document.createElement('div');
  divImage.setAttribute('class', 'dummy-image');
  divOne.appendChild(divImage);
  var listOne = document.createElement('li');
  divImage.appendChild(listOne);
  var photo = document.createElement('img');
  photo.setAttribute('src', entry.url);
  photo.setAttribute('class', 'd-photo');
  photo.setAttribute('alt', 'placeholder');
  listOne.appendChild(photo);
  var divText = document.createElement('div');
  divText.setAttribute('class', 'dummy-text');
  divOne.appendChild(divText);
  var listTwo = document.createElement('li');
  divText.appendChild(listTwo);
  var heading = document.createElement('h2');
  heading.textContent = entry.title;
  listTwo.appendChild(heading);
  var listThree = document.createElement('li');
  listThree.textContent = entry.textbox;
  divText.appendChild(listThree);

  var editButtonDiv = document.createElement('div');
  editButtonDiv.setAttribute('class', 'edit-button-container');
  divOne.appendChild(editButtonDiv);
  var editButton = document.createElement('button');
  editButton.setAttribute('class', 'edit-button');
  editButtonDiv.appendChild(editButton);

  editButton.addEventListener('click', function () {
    formSelector.className = 'main-form';
    displayList.className = 'hidden';
    for (var i = 0; i < data.entries.length; i++) {
      if (event.target === data.entries[i]) {
        titleSelector.textContent = data.entries[i].title;
      }
    }

  });

  return divOne;
}

var dummySelector = document.querySelector('.dummy');

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    dummySelector.appendChild(addEntry(data.entries[i]));

  }
  changeView();
});

var htwoEntries = document.querySelector('.hEntries');

var displayList = document.querySelector('.dummy');

var newButton = document.querySelector('.new');
newButton.addEventListener('click', function (event) {
  formSelector.className = 'main-form';
  displayList.className = 'hidden';
  data.view = 'entry-form';
  htwoEntries.className = 'hidden';
  newButton.className = 'hidden';
  changeView();
});

var views = document.querySelector('.a-entries');
views.addEventListener('click', function (event) {
  formSelector.className = 'hidden';
  displayList.className = 'dummy';
  data.view = 'entries';
  htwoEntries.className = 'hEntries';
  newButton.className = 'new';

  changeView();

});

function changeView(event) {
  if (data.view === 'entries') {
    formSelector.className = 'hidden';
    displayList.className = 'dummy';
  } else if (data.view === 'entry-form') {
    formSelector.className = 'main-form';
    displayList.className = 'hidden';
  }

}

var titleSelector = document.querySelector('#title');
