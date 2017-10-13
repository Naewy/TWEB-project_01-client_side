// Disable warning on next line, this is called in generate.js
// eslint-disable-next-line
function drawChart(objectList) {
  const ctx = document.getElementById('myChart').getContext('2d');
  const ctx2 = document.getElementById('myDoughnutChart').getContext('2d');

  // Our custom labels and data
  const mylabels = [];
  const mydata = [];

  // Populate our customs array with our data
  objectList.forEach((element) => {
    if (element.logo === undefined) {
      mylabels.push(element.name);
      mydata.push(element.nb_issues);
    }

    console.log(mylabels);
  });

  /* global Chart */
  // eslint-disable-next-line
  const myDoughnutChart = new Chart(ctx2, {
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
          'rgba(0, 128, 255, 0.3)',
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
          'rgba(0, 128, 255, 1)',
        ],
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: mylabels,
    },
    options: {
      animateRotate: true,
      responsive: false,
    },
  });

  // eslint-disable-next-line
  const myChart = new Chart(ctx, {
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
          'rgba(0, 128, 255, 0.3)',
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
          'rgba(0, 128, 255, 1)',
        ],
        borderWidth: 1.6,
      }],
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}
