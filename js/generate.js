/* global XMLHttpRequest */
const xhttp = new XMLHttpRequest();

// Makes the request to get the data
xhttp.open('GET', 'https://raw.githubusercontent.com/Naewy/TWEB-project_01-client_side/master/docs/data/data.json');
xhttp.responseType = 'json';
xhttp.send();

// Callback function when the state is changed
xhttp.onreadystatechange = () => {
  // If everything is okay with the request
  if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
    const object = xhttp.response;

    // Add dynamically all the repos to the table
    for (let i = 1; i < object.length; i += 1) {
      // Check if the description has something to display
      const description = object[i].description === null ? '' : object[i].description;
      $('table').append(`<tr><td id="name"><a href="${object[i].url}">${object[i].name}</a> - ${description}</td><td id="nb_issues">${object[i].nb_issues}</td></tr>`);
    }

    // Fill different part in the html with different information
    $('#entreprise').text(object[0].name);
    $('.today').text(object[0].name);

    // If the enterprise gave a description, display it
    if (object[0].description !== undefined) {
      $('.entreprise_descr').text(`A brief description was given by the enterprise to describe them : ${object[0].description}`);
    }
    // Add the logo of the enterprise
    $('#logo').attr('src', object[0].logo);
    // Add the link to the enterprise
    $('#url_entreprise').attr('href', object[0].url);

    /* global drawChart */
    // Call the drawChart function to draw the chart with de acquired data
    drawChart(object);
  }
};
