// javascript code goes here

function changeColor() {
    var color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
}

function changeFontSize() {
    var size = document.getElementById('fontsize').value;
    document.getElementById('text-container').style.fontSize = size + 'px';
}

function makeItalic() {
    var text = document.getElementById('text-container');
    if (text.style.fontStyle === 'italic') {
        text.style.fontStyle = 'normal';
    } else {
        text.style.fontStyle = 'italic';
    }
}

function makeUnderline() {
    var text = document.getElementById('text-container');
    if (text.style.textDecoration === 'underline') {
        text.style.textDecoration = 'none';
    } else {
        text.style.textDecoration = 'underline';
    }
}

function makeBold() {
    var text = document.getElementById('text-container');
    if (text.style.fontWeight === 'bold') {
        text.style.fontWeight = 'normal';
    } else {
        text.style.fontWeight = 'bold';
    }
}

function changeFont() {
    var font = document.getElementById('list').value;
    document.getElementById('text-container').style.fontFamily = font;
}

function getCSS() {
    var text = document.getElementById('text-container');
    var styles = window.getComputedStyle(text);

    var output = '';
    output += 'color: ' + text.style.color + '; ';
    output += 'font-size: ' + styles.fontSize + '; ';
    output += 'font-family: ' + styles.fontFamily + '; ';
    output += 'text-decoration: ' + styles.textDecoration + '; ';
    output += 'font-style: ' + styles.fontStyle + '; ';
    output += 'font-weight: ' + styles.fontWeight + ';';

    document.getElementById('css-props').textContent = output;
}
