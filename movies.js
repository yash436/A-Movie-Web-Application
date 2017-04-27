function initialize () {
}

/* Search movie title */
function sendRequest () {
   var xhr = new XMLHttpRequest();
   var query = encodeURI(document.getElementById("form-input").value);
   xhr.open("GET", "proxy.php?method=/3/search/movie&query=" + query);
   xhr.setRequestHeader("Accept","application/json");
   xhr.onreadystatechange = function () {
       if (this.readyState == 4) {
          var json = JSON.parse(this.responseText);
          var str = JSON.stringify(json,undefined,2);
          document.getElementById("output").innerHTML = "<p><strong>Search Results</strong></p>";
          var i = "";
          var x = [];
          var y = [];
          var z = [];
          for (i = 0; i < json.results.length; i++) {
            x[i] = json.results[i].original_title;
            y[i] = json.results[i].release_date;
            y[i] = y[i].substring(0,4);
            z[i] = json.results[i].id;
            document.getElementById("output").innerHTML += "<p onclick=movieRequest(" + z[i] + ") style='margin-top:10px; margin-bottom:10px; cursor:pointer;'>" + (i+1) + ". " + x[i] + " (" + y[i] + ")</p>";
          }
       }
   };
   xhr.send(null);
}

/* Obtain information about particular movie */
function movieRequest (id) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "proxy.php?method=/3/movie/" + id);
   xhr.setRequestHeader("Accept","application/json");
   xhr.onreadystatechange = function () {
       if (this.readyState == 4) {
          var json = JSON.parse(this.responseText);
          var str = JSON.stringify(json,undefined,2);
          document.getElementById("single_movie_output").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/" + json.poster_path + "' width='200' style='float:left; margin-right:15px;'>";
          document.getElementById("single_movie_output").innerHTML += "<h3>" + json.original_title + "</h3>";
          var genre = [];
          for(i = 0; i < json.genres.length; i++) {
            genre[i] = json.genres[i].name;
          }
          document.getElementById("single_movie_output").innerHTML += "<p><strong>Genre</strong></p>";
          document.getElementById("single_movie_output").innerHTML += "<p>" + genre.join(', ') + "</p>";
          document.getElementById("single_movie_output").innerHTML += "<p><strong>Overview (Summary)</strong></p>";
          document.getElementById("single_movie_output").innerHTML += "<p>" + json.overview + "</p>";
          creditsRequest(id);
       }
   };
   xhr.send(null);
}

/* Obtain top 5 cast members */
function creditsRequest (id) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "proxy.php?method=/3/movie/" + id + "/credits");
   xhr.setRequestHeader("Accept","application/json");
   xhr.onreadystatechange = function () {
       if (this.readyState == 4) {
          var json = JSON.parse(this.responseText);
          var str = JSON.stringify(json,undefined,2);
          var cast = [];
          for(i = 0; i < 5; i++) {
            cast[i] = json.cast[i].name;
          }
          document.getElementById("single_movie_output").innerHTML += "<p><strong>Cast</strong></p>";
          document.getElementById("single_movie_output").innerHTML += "<p>" + cast.join(', ') + "</p>";
       }
   };
   xhr.send(null);
}