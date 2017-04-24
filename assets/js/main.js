var startYear,
    endYear,
    startValue,
    middleValue,
    endValue;

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

function generateGraph(sY, eY, sV, mV, eV) {

  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [sY, "", eY],
      datasets: [{
        label: 'Value',
        data: [sV,mV,eV],
        backgroundColor: "rgba(153,255,51,0.4)"
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
