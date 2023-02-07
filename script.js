$("search-button").on("click", function() {

  var queryURL = "api.openweathermap.org/data/2.5/forecast?" + "lat=44.34,lon=10.99&appid=" + apiKey
    var apiKey = ab946162ed5f078e48643c8d3cc48c0a
  console.log(queryURL)

   $.ajax({
       url: queryURL,
       method: "GET"
    })
    .then(function(response) {
       console.log(response);
     })
   })


















 
 
 
 
 
 
 
 

 