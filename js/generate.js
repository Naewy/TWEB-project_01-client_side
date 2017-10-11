$(document).ready(function () {
  const xhttp = new XMLHttpRequest();

  // Makes the request to get the data
  xhttp.open("GET", "https://raw.githubusercontent.com/Naewy/TWEB-project_01-client_side/master/docs/data/data.json");
  xhttp.responseType = "json";
  xhttp.send();

  // Callback function when the state is changed
  xhttp.onreadystatechange = () => {

    // If everything is okay
    if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {

      let object = xhttp.response;

      // Add dynamically all the repos to the table
      for (let i = 1; i < object.length; i++) {
        $("table").append(`<tr><td id="name"><a href="${object[i].url}">${object[i].name}</a> - ${object[i].description}</td><td id="nb_issues">${object[i].nb_issues}</td></tr>`);
      }

      $("#entreprise").text(object[0].entreprise);
      $("#today").text(object[0].entreprise);

      // Call the drawChart function to draw the chart with de acquired data
      drawChart(object);
    }
  };


});