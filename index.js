let rawData;
const getDataButton = document.getElementById('getDataButton');
const contentGoesHere = document.getElementById('contentGoesHere');
const contentButton = document.getElementById('getNames');
const getGenresButton = document.getElementById('getGenres');

const cb =  (event) => {
    console.log(event)
};

const getData = () => {
    fetch("https://api.tvmaze.com/search/shows?q=a")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            rawData = data;
            contentGoesHere.innerHTML = rawData;
        })
}

const getNamesCb = () => {
    const names = rawData.map((item) => {
        return item.show.name;
    })
    contentGoesHere.innerHTML = names;
}

const getGenresCb = () => {
    const genres = rawData.map((item) => {
        return item.show.genres;
    })
    contentGoesHere.innerHTML = genres;
}

getDataButton.addEventListener('click', getData);
contentButton.addEventListener('mouseover', getNamesCb);
getGenresButton.addEventListener('dblclick', getGenresCb);

/*GET /https://api.spotify.com/v1/playlists/{playlist_id}/tracks
GET /https://api.spotify.com/v1/tracks/{id}
curl --request GET \
  --url https://api.spotify.com/v1/audio-features \
  --header 'Authorization: ' \
  --header 'Content-Type: application/json'

  document.getElementById("Title").addEventListener("click", displayDate);
  document.getElementById("link"). element.addEventListener("mouseover", myFunction);
  document.getElementById("body").element.addEventListener("mouseout", myThirdFunction);

  function getSong(songs, artist) {
    const spotifyArray = songs.filter(songs => song.name === string);
    return spotifyArray;
}

function getPlaylist(playlist, artist) {
    const playlistArray = playlists.filter(playlist => playlist.startsWith(artist));
    return playlistArray;
} 

function getRadio(radio, artist) {
    const radioArray = radio.filter(radio => radio.pop() === artist.pop());
    return radioArray;
} 

//Include playlist sort?
*/