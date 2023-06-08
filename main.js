var count = 0;
var button = document.getElementById('clickMe');
var display = document.getElementById('clicks');

button.onclick = function() {
    count++;
    display.textContent = count;
}
