# A-Movie-Web-Application

- A web application to get information about movies, their cast, their posters, etc.
- This application was developed using plain JavaScript and Ajax.
- Used the Web Service REST API of the movie DB TMDb (The Movie Database).
- Everything was done asynchronously and the web page was never redrawn/refreshed completely.
- The application had a text section where one can type a movie title (eg, The Matrix), one "Display Info" button to search, one section to display the search results, and one section to display information about a movie.
- The search results is an itemized clickable list of movie titles along with their years they were released.
- When you click on one of these movie titles, you display information about the movie: the poster of the movie, the movie title, its genres, the movie overview/summary, and the names of the top five cast members.

- API access key can be obtained by signing up on https://www.themoviedb.org/account/signup
- The access key will allow you to send web service requests to TMDb (maximum 3 requests per second)
- After you get the API key, you put it in proxy.php
