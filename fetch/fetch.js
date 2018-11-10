let jokeHeading = document.getElementById('joke');
let getJokeButton = document.getElementById('getJoke');

getJokeButton.addEventListener('click', getJoke);

function getJoke(url) {
  fetch('http://api.icndb.com/jokes/random')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Ooops, something went wrong..');
      }
    })
    .then(json =>
      jokeHeading.innerHTML = json.value.joke
    )
    .catch(error =>
      jokeHeading.innerHTML = error.message
    )
}

/*
The promise returned by fetch rejects when it’s impossible to make a request.
For instance, a remote server is not available, or the URL is malformed.

But if the remote server responds with error 404, or even error 500,
then it’s considered a valid response. That's why we should check the 
response.status property that has HTTP status, and if it’s not 200,
then throw an error.
*/
