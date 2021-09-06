// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const table = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()

size.addEventListener('submit', function(event) {
  table.innerHTML = '';
  event.preventDefault();
  makeGrid();
})

table.addEventListener('click', function(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = color.value;
  }
})
                      
function makeGrid() {
  // Your code goes here!
  for (var i=0; i < height.value; i++) {
  	const tr = table.insertRow(0);
    for (var j=0; j < width.value; j++) {
      tr.insertCell(0);
    }
  }
}

