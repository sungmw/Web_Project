document.getElementById('time').innerHTML = new Date().toLocaleString();

function pink() {
  document.body.style.backgroundColor = 'pink';
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue';
}
function yellow() {
  document.body.style.backgroundColor = 'yellow';
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue';
}
function linen() {
  document.body.style.backgroundColor = 'linen';
}
function purple() {
  document.body.style.backgroundColor = 'Purple';
}
function orange() {
  document.body.style.backgroundColor = 'Orange';
}
function green() {
  document.body.style.backgroundColor = 'green';
}
function blue() {
  document.body.style.backgroundColor = 'blue';
}
function red() {
  document.body.style.backgroundColor = 'red';
}


function showhtml() {
  document.getElementById('fig').src = 'img/HTML5img.jpg';
  document.getElementById('desc').innerHTML =
    '<b>HTML 입니다</b>';
}

function showcss() {
  document.getElementById('fig').src = 'img/CSSimg.jpg';
  document.getElementById('desc').innerHTML =
    '<b>CSS3 입니다</b>';
}

function showjs() {
  document.getElementById('fig').src = 'img/javascriptImg.jpg';
  document.getElementById('desc').innerHTML =
    '<b>Javascript 입니다</b>';
}

function showSCP() {
  document.getElementById('fig').src = 'img/SCP.jpg';
  document.getElementById('desc').innerHTML =
  '<b>SCP</b>는 나를 더욱 강하게 만든다. ';
}

function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}

