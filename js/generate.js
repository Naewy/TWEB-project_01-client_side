//TODO parser le json que je recois en un objet
$(document).ready(function () {
  let xhttp = new XMLHttpRequest();

  // Makes the request to get the data
  xhttp.open("GET", "http://localhost:3000/data");
  xhttp.responseType = "json";
  xhttp.send();

  // Callback function when the state is changed
  xhttp.onreadystatechange = () => {
    // If everything is okay
    if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {

      let object = xhttp.response;
      document.getElementById("entreprise").innerHTML = object;

      console.log("Data : " + object[0].name);
    }
  };

  $("#nom").text("Test");
});