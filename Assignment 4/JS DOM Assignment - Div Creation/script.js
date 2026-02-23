//Write your code here
function createDiv(width, height, text) {
    var newDiv = document.createElement('div');
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.textContent = text;
    document.getElementById('container').appendChild(newDiv);
}


// Do not change this code
window.createDiv = createDiv;
