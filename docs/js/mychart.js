function drawChart(objectList) {

  let ctx = document.getElementById('myChart').getContext('2d');
  let ctx2 = document.getElementById('myDoughnutChart').getContext('2d');

  // Our custom labels and data
  mylabels = [];
  mydata = [];

  // Populate our customs array with our data
  objectList.forEach((element) => {

    if (element.name !== undefined) {
      mylabels.push(element.name);
      mydata.push(element.nb_issues);
    }

    console.log(mylabels);
  });

  var myDoughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: mydata,
        backgroundColor: [
          'rgba(255, 0, 0, 0.3)',
          'rgba(0, 255, 0, 0.3)',
          'rgba(0, 0, 255, 0.3)',
          'rgba(255, 128, 0, 0.3)',
          'rgba(255, 0, 128, 0.3)',
          'rgba(128, 255, 0, 0.3)',
          'rgba(0, 255, 128, 0.3)',
          'rgba(0, 255, 255, 0.3)',
          'rgba(128, 0, 255, 0.3)',
          'rgba(0, 128, 255, 0.3)'
        ],
        borderColor: [
          'rgba(255, 0, 0, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(255, 128, 0, 1)',
          'rgba(255, 0, 128, 1)',
          'rgba(128, 255, 0, 1)',
          'rgba(0, 255, 128, 1)',
          'rgba(0, 255, 255, 1)',
          'rgba(128, 0, 255, 1)',
          'rgba(0, 128, 255, 1)'
        ]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: mylabels
    },
    options: {
      animateRotate: true,
      responsive: false
    }
  });

  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: mylabels,
      datasets: [{
        label: '# of Issues',
        data: mydata,
        backgroundColor: [
          'rgba(255, 0, 0, 0.3)',
          'rgba(0, 255, 0, 0.3)',
          'rgba(0, 0, 255, 0.3)',
          'rgba(255, 128, 0, 0.3)',
          'rgba(255, 0, 128, 0.3)',
          'rgba(128, 255, 0, 0.3)',
          'rgba(0, 255, 128, 0.3)',
          'rgba(0, 255, 255, 0.3)',
          'rgba(128, 0, 255, 0.3)',
          'rgba(0, 128, 255, 0.3)'
        ],
        borderColor: [
          'rgba(255, 0, 0, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(255, 128, 0, 1)',
          'rgba(255, 0, 128, 1)',
          'rgba(128, 255, 0, 1)',
          'rgba(0, 255, 128, 1)',
          'rgba(0, 255, 255, 1)',
          'rgba(128, 0, 255, 1)',
          'rgba(0, 128, 255, 1)'
        ],
        borderWidth: 1.6
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
