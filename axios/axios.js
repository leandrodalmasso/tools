let jokeHeading = document.getElementById('joke');
let getJokeButton = document.getElementById('getJoke');

getJokeButton.addEventListener('click', getJoke);

function getJoke(url) {
  axios.get('http://api.icndb.com/jokes/random')
    .then(response =>
        jokeHeading.innerHTML = response.data.value.joke
    )
    .catch(error =>
      jokeHeading.innerHTML = error.message
    )
}
