// set variable | I dont use let from ES6 //
var startYear,
    endYear,
    startValue,
    middleValue,
    endValue;

// Function for get value and some low validations //
function getValue() {
  startYear = document.querySelector("#startYear").value,
  endYear = document.querySelector("#endYear").value,
  startValue = document.querySelector("#startValue").value,
  middleValue = document.querySelector("#middleValue").value,
  endValue = document.querySelector("#endValue").value;

  if(startYear > endYear || startValue < 0 ) {
    document.querySelector("#errorCheck").innerHTML = "You write wrong value";
  } else {
    document.getElementById('errorCheck').innerHTML = "";
    generateGraph(startYear, endYear, startValue, middleValue, endValue);
  }

}

// Function for draw the graph, using char.js
function generateGraph(sY, eY, sV, mV, eV) {

  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [sY, "", eY],
      datasets: [{
        label: 'Value',
        data: [sV,mV,eV],
        backgroundColor: "#c72425"
      }]
    },
    options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        beginAtZero: true
                    }
                }]
            }
        }
  });
}

// Add function for moving panda //
function moving(event) {
    var key = event.keyCode,
        character = document.getElementById('panda'),
        move = {
            leftright: function (speed) {
                var x = parseInt(getComputedStyle(character).left);
                if (key == 37) {
                    x -= speed;
                } else if (key == 39) {
                    x += speed;
                }
                return x;
            }
        };
    character.style.left = (move.leftright(100)) + "px";
}

document.addEventListener('keydown', moving);
