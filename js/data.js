/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntriesJson = localStorage.getItem('javascript-local-storage');
if (previousEntriesJson !== null) {
  data = JSON.parse(previousEntriesJson);
}

window.addEventListener('beforeunload', stringnifyNstore);

function stringnifyNstore(event) {
  var dataJson = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJson);

}
