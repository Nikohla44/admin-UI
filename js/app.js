/*=========== Digital Clock ==========*/
setInterval(function() {
  var currentTime = new Date()
    , hours = currentTime.getHours()
    , minutes = currentTime.getMinutes()
    , seconds = currentTime.getSeconds()
    , period = "AM";
if(hours >= 12) {
        period = "PM";
      }
      if (hours > 12) {
        hours = hours - 12;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
  var clock = document.getElementById("clock")
  clock.innerText = clockTime;
}, 1000);

/*=========== Slider ==========*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if(n > x.length) {slideIndex = 1}
  if(n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

/*=========== Addition Game ==========*/
var number1;
var number2;

number1 = Math.floor((Math.random() * 10) + 1);
number2 = Math.floor((Math.random() * 10) + 1);
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

var answer = number1 + number2;

var checkAnswer = document.querySelector("input[type=text]");
var value = checkAnswer.value;
var btn = document.querySelector("input[type=button][value=check]");

btn.onclick = function() {
  value = checkAnswer.value;
  if (value == answer) {
    alert("You are correct");
  } else {
    alert("You are incorrect, the answer was " + answer);
  }

  document.querySelector("input[type=text]").value = "";
  document.getElementById("number1").innerHTML = "";
  document.getElementById("number2").innerHTML = "";
  number1 = Math.floor((Math.random() * 10) + 1);
  number2 = Math.floor((Math.random() * 10) + 1);
  document.getElementById("number1").innerHTML = number1;
  document.getElementById("number2").innerHTML = number2;

  answer = number1 + number2

};

/*=========== Word Count ==========*/
var print = function(msg) {
  document.getElementById('output').innerHTML = "Length is " + msg;
}

document.getElementById('wordCountBtn').onclick = function(event) {
  print(document.getElementById('str').value.length);
}

/*=========== Todo List ==========*/
function get_todos() {
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');
  if(todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function add() {
  var task = document.getElementById('task').value;

  var todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function clearDefault(a) {
  if(a.defaultValue == a.value) {a.value = ""}
}

function remove() {
  var id = this.getAttribute('id');
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function show() {
  var todos = get_todos();

  var html = '<ul>';
  for(var i = 0; i < todos.length; i++) {
    html += '<li>' + todos[i] + '<button class ="remove" id ="' + i + '"> Delete </button> </li>';
  };
  html += '</ul>';

  document.getElementById('todos').innerHTML = html;

  var buttons = document.getElementByClassName('remove');
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  }
}

document.getElementById('add').addEventListener('click', add);
show();

/*=========== Contact form ==========*/
$(document).ready(function() {
  function init() {
    if(localStorage["name"]) {
      $('#name').val(localStorage["name"]);
    }
    if(localStorage["email"]) {
      $('#email').val(localStorage["email"]);
    }
    if(localStorage["message"]) {
      $('#message').val(localStorage["message"]);
    }
  }
  init();
})

$('.stored').change(function() {
  localStorage[$(this).attr('name')] = $(this).val();
});
